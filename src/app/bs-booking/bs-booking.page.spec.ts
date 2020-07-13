import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BsBookingPage } from './bs-booking.page';

describe('BsBookingPage', () => {
  let component: BsBookingPage;
  let fixture: ComponentFixture<BsBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BsBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
