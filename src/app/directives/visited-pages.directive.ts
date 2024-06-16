import {
  ApplicationRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Type
} from "@angular/core";
import {AbstractTooltipDirective} from "./abstract-tooltip.directive";
import {VisitedPagesComponent} from "../components/session-overview/visited-pages/visited-pages.component";
import {Session} from "../core/models/session";
import {TooltipPosition} from "./tooltip-position";

@Directive({
  selector: "[visitedPagesTooltip]",
  standalone: true
})
export class VisitedPagesDirective extends AbstractTooltipDirective implements OnInit, OnDestroy {

  @Input("session") session?: Session;

  constructor(
    protected override elementRef: ElementRef,
    protected override appRef: ApplicationRef,
    protected override componentFactoryResolver: ComponentFactoryResolver,
    protected override injector: Injector) {
    super(elementRef, appRef, componentFactoryResolver, injector);
    this.tooltipPosition = TooltipPosition.LEFT;
  }

  ngOnDestroy(): void {
        super.onDestroy();
    }

  ngOnInit(): void {
        super.onInit();
    }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.tooltipSubject.next(true);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.tooltipSubject.next(false);
  }

  protected override getType(): Type<unknown> {
    return VisitedPagesComponent;
  }

  protected override setSpecialProperties(): void {
    if (this.componentRef) {
      this.componentRef.instance.session = this.session;
      this.componentRef.instance.tooltipSubject = this.tooltipSubject;
    }
  }
}
