import {Campaign2} from "./campaign2";
import {MatomoPiwik} from "./matomo-piwik";
import {Utm} from "./utm";

export interface CampaignsAll {
  Campaign?: Campaign2;
  "Matomo / Piwik"?: MatomoPiwik;
  UTM?: Utm;
}
