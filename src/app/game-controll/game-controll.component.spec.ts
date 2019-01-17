import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControllComponent } from './game-controll.component';

describe('GameControllComponent', () => {
  let component: GameControllComponent;
  let fixture: ComponentFixture<GameControllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameControllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
