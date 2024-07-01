import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineServiceLandingPageComponent } from './online-service-landing-page.component';

describe('OnlineServiceLandingPageComponent', () => {
  let component: OnlineServiceLandingPageComponent;
  let fixture: ComponentFixture<OnlineServiceLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineServiceLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineServiceLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
