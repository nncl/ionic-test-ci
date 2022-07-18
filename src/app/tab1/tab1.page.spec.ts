import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have trullable flag', () => {
    expect(component.flag).toBeTrue();
  });

  it('should have one app-explore-container', () => {
    const containers = fixture.debugElement.queryAll(By.css('app-explore-container'));
    
    expect(containers.length).toEqual(1);
  });

  it('should NOT have any app-explore-container', () => {
    component.flag = false;

    fixture.detectChanges();

    const containers = fixture.debugElement.queryAll(By.css('app-explore-container'));

    expect(containers.length).toEqual(0);
  });
});
