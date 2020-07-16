import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurePage } from './sure.page';

describe('SurePage', () => {
  let component: SurePage;
  let fixture: ComponentFixture<SurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
