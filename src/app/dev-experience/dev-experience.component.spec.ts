import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevExperienceComponent } from './dev-experience.component';

describe('DevExperienceComponent', () => {
  let component: DevExperienceComponent;
  let fixture: ComponentFixture<DevExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevExperienceComponent]
    });
    fixture = TestBed.createComponent(DevExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
