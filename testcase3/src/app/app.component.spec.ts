import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the correct title', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Angular App');
  });

  it('should increase the counter on button click', () => {
    const button = fixture.nativeElement.querySelector('button');
    const counterElement = fixture.nativeElement.querySelector('p');

    expect(counterElement.textContent).toContain('Counter: 0');

    button.click();
    fixture.detectChanges();

    expect(counterElement.textContent).toContain('Counter: 1');
  });
});
