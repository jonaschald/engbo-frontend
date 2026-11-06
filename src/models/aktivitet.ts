export interface Aktivitet {
  aktivitetId: number;
  aktivitetsType: string;
  holdNavn: string;
  modstander: string | null;
  dato: string;
  tid: string;
  varighed: number;
  baneType: string;
  bane: string;
  adresse: string;
  traenerNavn: string;
  status: number;
}
