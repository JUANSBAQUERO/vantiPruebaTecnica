import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAnimationComponent } from './input-animation.component';

describe('InputAnimationComponent', () => {
  let component: InputAnimationComponent;
  let fixture: ComponentFixture<InputAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
