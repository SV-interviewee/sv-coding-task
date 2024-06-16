import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {Session} from "../../core/models/session";
import {SessionOverviewService} from "../../services/session-overview.service";
import {Subscription} from "rxjs";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {DatePipe, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import {SafeHtmlPipe} from "./pipes/safe-html.pipe";
import {MatTooltip} from "@angular/material/tooltip";
import {DurationPipe} from "./pipes/duration.pipe";
import {PluckPipe} from "./pipes/pluck.pipe";
import {AbstractTooltipDirective} from "../../directives/abstract-tooltip.directive";
import {VisitedPagesComponent} from "./visited-pages/visited-pages.component";
import {VisitedPagesDirective} from "../../directives/visited-pages.directive";

@Component({
  selector: 'app-session-overview',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    DatePipe,
    SafeHtmlPipe,
    NgStyle,
    NgIf,
    NgOptimizedImage,
    MatTooltip,
    DurationPipe,
    PluckPipe,
    VisitedPagesDirective,
  ],
  templateUrl: './session-overview.component.html',
  styleUrl: './session-overview.component.css'
})
export class SessionOverviewComponent implements OnInit, OnDestroy {
  columnsToDisplay = ["category", "date", "company", "sector", "city", "pages", "duration", "source", "interest", "more"]
  sessions: Session[] = [];

  sessionSubscription?: Subscription;

  constructor(private sessionOverviewService: SessionOverviewService) {
  }

  ngOnDestroy(): void {
        this.sessionSubscription?.unsubscribe();
    }

  ngOnInit(): void {
    this.sessionSubscription = this.sessionOverviewService.getSessionData()
      .subscribe(wrapper => this.sessions = wrapper.result);
  }

  protected readonly VisitedPagesComponent = VisitedPagesComponent;
}
