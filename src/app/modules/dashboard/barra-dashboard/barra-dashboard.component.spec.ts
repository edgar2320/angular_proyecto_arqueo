import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDashboardComponent } from './barra-dashboard.component';

describe('BarraDashboardComponent', () => {
  let component: BarraDashboardComponent;
  let fixture: ComponentFixture<BarraDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
