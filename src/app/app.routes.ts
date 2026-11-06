import { Routes } from '@angular/router';

import { Login } from './pages/login/login';

// Player pages
import { PlayerHome } from './pages/player-home/player-home';
import { PlayerTrainings } from './pages/player-trainings/player-trainings';
import { PlayerMatches } from './pages/player-matches/player-matches';
import { PlayerActivityDetails } from './pages/player-activity-details/player-activity-details';

// Administration pages
import { AdminHold } from './pages/admin-hold/admin-hold';
import { AdminManageHold } from './pages/admin-manage-hold/admin-manage-hold';
import { AdminStatistics } from './pages/admin-statistics/admin-statistics';
import { AdminTeamStatistics } from './pages/admin-team-statistics/admin-team-statistics';

// Trainer pages
import { TraenerForside } from './pages/traener-forside/traener-forside';
import { TraenerHold } from './pages/traener-hold/traener-hold';
import { TraenerTraeninger } from './pages/traener-traeninger/traener-traeninger';
import { TraenerKampe } from './pages/traener-kampe/traener-kampe';
import { TraenerFremmoede } from './pages/traener-fremmoede/traener-fremmoede';
import { TraenerOpretTraening } from './pages/traener-opret-traening/traener-opret-traening';
import { TraenerOpretKamp } from './pages/traener-opret-kamp/traener-opret-kamp';
import { TraenerAktivitetsDetaljer } from './pages/traener-aktivitets-detaljer/traener-aktivitets-detaljer';
import { TraenerKalender } from './pages/traener-kalender/traener-kalender';

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

  // Trainer pages
  {
    path: 'traener',
    component: TraenerForside,
  },
  {
    path: 'traener-hold',
    component: TraenerHold,
  },
  {
    path: 'traener-traeninger',
    component: TraenerTraeninger,
  },
  {
    path: 'traener-kampe',
    component: TraenerKampe,
  },
  {
    path: 'traener-fremmoede',
    component: TraenerFremmoede,
  },
  {
    path: 'traener-opret-traening',
    component: TraenerOpretTraening,
  },
  {
    path: 'traener-opret-kamp',
    component: TraenerOpretKamp,
  },
  {
    path: 'traener-aktivitets-detaljer',
    component: TraenerAktivitetsDetaljer,
  },
  {
    path: 'traener-kalender',
    component: TraenerKalender,
  },
];
