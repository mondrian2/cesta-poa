import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrinesComponent } from './vitrines.component';

describe('VitrinesComponent', () => {
  let component: VitrinesComponent;
  let fixture: ComponentFixture<VitrinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitrinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitrinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
