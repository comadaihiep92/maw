import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoosedateandtimePage } from './choosedateandtime.page';

describe('ChoosedateandtimePage', () => {
  let component: ChoosedateandtimePage;
  let fixture: ComponentFixture<ChoosedateandtimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosedateandtimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoosedateandtimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
