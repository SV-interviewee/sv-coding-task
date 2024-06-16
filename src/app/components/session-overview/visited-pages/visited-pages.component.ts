import {Component, HostListener, Input} from '@angular/core';
import {Session} from "../../../core/models/session";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatDivider} from "@angular/material/divider";
import {MatList, MatListItem} from "@angular/material/list";
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {DurationPipe} from "../pipes/duration.pipe";
import {Subject} from "rxjs";
import {TooltipPosition} from "../../../directives/tooltip-position";

@Component({
  selector: 'app-visited-pages',
  standalone: true,
  imports: [
    MatCheckbox,
    MatDivider,
    MatList,
    NgForOf,
    MatListItem,
    DurationPipe,
    DatePipe,
    NgIf,
    NgClass
  ],
  templateUrl: './visited-pages.component.html',
  styleUrl: './visited-pages.component.css'
})
export class VisitedPagesComponent {

  session?: Session;
  tooltipSubject?: Subject<boolean>;
  tooltipPosition = TooltipPosition.BELOW;
  left: number = 0;
  top: number = 0;

  constructor() {
    console.log("creating visited pages")
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.tooltipSubject?.next(true);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.tooltipSubject?.next(false);
  }

  getSize(): number {
    return this.session?.visits.length as number;
  }
}
