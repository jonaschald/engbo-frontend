import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './environment';
import {map, catchError, of, Observable} from 'rxjs';

@Service()
export class HttpService {
  private http = inject(HttpClient)

  private apiUrl = environment.apiUrl;

  // Test om backend er online
  testApiIsOnline(): Observable<boolean> {
    return this.http.get(`${this.apiUrl}/health`, {
      responseType: 'text',
      observe: 'response',
    }).pipe(
      map(response => response.status === 200),
      catchError(err => {
        console.error('API request failed', err);
        return of(false)
      })
    )
  }

  // Registrér en bruger
  RegisterUser(request: IRegisterRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${this.apiUrl}/api/auth/register`, request)
  }

  // Prøv at logge ind
  LoginUser(request: ILoginRequest) {
    return this.http.post<ILoginResponse>(`${this.apiUrl}/api/auth/login`, request)
  }
}
