import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  EmbeddedViewRef, HostListener,
  Injector, OnDestroy, OnInit, Type
} from "@angular/core";
import {debounceTime, of, Subject, Subscription} from "rxjs";
import {TooltipPosition} from "./tooltip-position";

export abstract class AbstractTooltipDirective {
  protected componentRef?: ComponentRef<any>;
  protected tooltipSubject = new Subject<boolean>();
  protected tooltipSubscription?: Subscription;
  protected tooltipPosition = TooltipPosition.BELOW;

  protected constructor(
    protected elementRef: ElementRef,
    protected appRef: ApplicationRef,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected injector: Injector) {
  }

  onDestroy(): void {
        this.tooltipSubscription?.unsubscribe();
        this.destroy();
    }

  onInit(): void {
        this.tooltipSubscription = this.tooltipSubject.pipe(
          debounceTime(500)
        ).subscribe(
          shouldCreate => shouldCreate ? this.create() : this.destroy()
        );
    }

  protected abstract getType(): Type<unknown>;
  protected abstract setSpecialProperties(): void;

  private setTooltipComponentProperties() {
    if (this.componentRef) {
      this.componentRef.instance.tooltipPosition = this.tooltipPosition;

      const {left, right, top, bottom} = this.elementRef.nativeElement.getBoundingClientRect();

      switch (this.tooltipPosition) {
        case TooltipPosition.BELOW: {
          this.componentRef.instance.left = Math.round((right - left) / 2 + left);
          this.componentRef.instance.top = Math.round(bottom);
          break;
        }
        case TooltipPosition.ABOVE: {
          this.componentRef.instance.left = Math.round((right - left) / 2 + left);
          this.componentRef.instance.top = Math.round(top);
          break;
        }
        case TooltipPosition.RIGHT: {
          this.componentRef.instance.left = Math.round(right);
          this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        case TooltipPosition.LEFT: {
          this.componentRef.instance.left = Math.round(left);
          this.componentRef.instance.top = Math.round(top + (bottom - top) / 2);
          break;
        }
        default: {
          break;
        }
      }
    }
    this.setSpecialProperties();
  }

  protected create(): void {
    if (!this.componentRef) {
      const componentFactory =
        this.componentFactoryResolver.resolveComponentFactory(this.getType());
      this.componentRef = componentFactory.create(this.injector);
      this.appRef.attachView(this.componentRef.hostView);
      const domElem =
        (this.componentRef.hostView as EmbeddedViewRef<any>)
          .rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      this.setTooltipComponentProperties();
    }
  }

  protected destroy(): void {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.componentRef = undefined;
    }
  }
}
