import { Injectable } from '@angular/core';
import * as data from "../../assets/01_out.json";
import {Wrapper} from "../core/models/wrapper";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionOverviewService {

  constructor() { }

  public getSessionData(): Observable<Wrapper> {
    return of(data);
  }
}
