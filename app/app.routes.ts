import { Routes } from '@angular/router';
import * as Content from './content';

export const appRoutes: Routes = [
  { path: 'list', component: Content.ListingComponent },
  { path: 'list/:id', component: Content.DetailEditComponent },
  { path: 'stats', component: Content.StatisticsComponent,
    data: {
      title: 'Heroes List'
    }
  },
  { path: '', component: Content.HomeComponent },
  { path: '**', component: Content.HomeComponent }
];