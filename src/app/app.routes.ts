import { Routes } from '@angular/router';
import {SessionOverviewComponent} from "./components/session-overview/session-overview.component";

export const routes: Routes = [
  {path: "**", component: SessionOverviewComponent}
];
