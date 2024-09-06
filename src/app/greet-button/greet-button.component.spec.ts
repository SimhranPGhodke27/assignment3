import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetButtonComponent } from './greet-button.component';

describe('GreetButtonComponent', () => {
  let component: GreetButtonComponent;
  let fixture: ComponentFixture<GreetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
