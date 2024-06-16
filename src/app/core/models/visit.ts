import {Event} from "./event";

export interface Visit {
  startedAt: string;
  lastActivityAt: string;
  url: string;
  referer?: string;
  refererMedium?: string;
  refererSource?: string;
  events?: Event[];
  refererTerm?: string;
}
