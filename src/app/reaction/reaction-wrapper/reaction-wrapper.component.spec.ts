import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionWrapperComponent } from './reaction-wrapper.component';

describe('ReactionWrapperComponent', () => {
  let component: ReactionWrapperComponent;
  let fixture: ComponentFixture<ReactionWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactionWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
