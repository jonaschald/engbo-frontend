import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { PlayerHome } from './pages/player-home/player-home';
import { PlayerTrainings } from './pages/player-trainings/player-trainings';
import { PlayerMatches } from './pages/player-matches/player-matches';
import { PlayerActivityDetails } from './pages/player-activity-details/player-activity-details';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'player',
    component: PlayerHome,
  },
  {
    path: 'player-trainings',
    component: PlayerTrainings,
  },
  {
    path: 'player-matches',
    component: PlayerMatches,
  },
  {
    path: 'player-activity-details',
    component: PlayerActivityDetails,
  },
];
