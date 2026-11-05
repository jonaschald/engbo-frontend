import { Routes } from '@angular/router';

import { Login } from './pages/login/login';

import { PlayerHome } from './pages/player-home/player-home';
import { PlayerTrainings } from './pages/player-trainings/player-trainings';
import { PlayerMatches } from './pages/player-matches/player-matches';
import { PlayerActivityDetails } from './pages/player-activity-details/player-activity-details';

import { AdminHold } from './pages/admin-hold/admin-hold';
import { AdminManageHold } from './pages/admin-manage-hold/admin-manage-hold';
import { AdminStatistics } from './pages/admin-statistics/admin-statistics';
import { AdminTeamStatistics } from './pages/admin-team-statistics/admin-team-statistics';

export const routes: Routes = [

  // Login
  {
    path: '',
    component: Login,
  },

  // Player pages
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

  // Administration pages
  {
    path: 'admin',
    component: AdminHold,
  },
  {
    path: 'admin-manage-hold',
    component: AdminManageHold,
  },
  {
    path: 'admin-statistics',
    component: AdminStatistics,
  },
  {
    path: 'admin-team-statistics',
    component: AdminTeamStatistics,
  },

];
