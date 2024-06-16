import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedPagesComponent } from './visited-pages.component';

describe('VisitedPagesComponent', () => {
  let component: VisitedPagesComponent;
  let fixture: ComponentFixture<VisitedPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitedPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitedPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
