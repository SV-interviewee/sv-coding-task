import {Visit} from "./visit";
import {Interest} from "./interest";
import {ScoreOverview} from "./score-overview";
import {Campaign} from "./campaign";
import {CampaignHit} from "./campaign-hit";
import {Company} from "./company";
import {Referer} from "./referer";
import {CampaignsAll} from "./campaigns-all";

export interface Session {
  guid: string;
  startedAt: string;
  lastActivityAt: string;
  language: string;
  referer: boolean | Referer;
  campaign: boolean | Campaign;
  campaignHits: CampaignHit[] | boolean;
  hasVideo: string;
  requiredVideoEvent: string;
  score: string;
  siteSearch: any[];
  mainInterest: string;
  campaignsAll: any[] | CampaignsAll;
  isVideoPresentable: null | string;
  user_agent: string;
  company: Company;
  visits: Visit[];
  interests: Interest[];
  score_overview?: ScoreOverview[];
}
