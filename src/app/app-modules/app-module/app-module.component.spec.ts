import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModuleComponent } from './app-module.component';

describe('AppModuleComponent', () => {
  let component: AppModuleComponent;
  let fixture: ComponentFixture<AppModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
