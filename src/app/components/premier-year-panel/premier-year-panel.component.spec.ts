import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierYearPanelComponent } from './premier-year-panel.component';

describe('PremierYearPanelComponent', () => {
  let component: PremierYearPanelComponent;
  let fixture: ComponentFixture<PremierYearPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremierYearPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierYearPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
