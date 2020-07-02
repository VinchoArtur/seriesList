import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrePanelComponent } from './genre-panel.component';

describe('GenrePanelComponent', () => {
  let component: GenrePanelComponent;
  let fixture: ComponentFixture<GenrePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenrePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenrePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
