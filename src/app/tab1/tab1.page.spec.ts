import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';

import { Tab1Page } from './tab1.page';
import { Tab1PageModule } from './tab1.module';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), Tab1PageModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT have any app-explore-container', () => {
    const containers = fixture.debugElement.queryAll(By.css('app-explore-container'));

    expect(containers.length).toEqual(0);
  });

  it('should add app-explore-container', () => {
    component.add();
    component.add();

    fixture.detectChanges();

    const containers = fixture.debugElement.queryAll(By.css('app-explore-container'));

    expect(containers.length).toEqual(2);
  });

  it('should remove app-explore-container', () => {
    component.add();
    component.add();
    
    component.remove(1);

    fixture.detectChanges();

    const containers = fixture.debugElement.queryAll(By.css('app-explore-container'));

    expect(containers.length).toEqual(1);
  });
});
