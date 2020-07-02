import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePanelComponent } from './name-panel.component';

describe('NamePanelComponent', () => {
  let component: NamePanelComponent;
  let fixture: ComponentFixture<NamePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
