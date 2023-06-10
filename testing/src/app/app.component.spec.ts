import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

describe('AppComponent', () => {
  let component:TestComponent;
  beforeEach(async () => {
    component=new TestComponent();
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

  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testing app is running!');
  });
  
  it('should add two numbers correctly',()=>{
    const result = component.sum(2,3);
    expect(result).toEqual(5);
  });

  it('should handle negative numbers correctly',()=>{
    const result=component.sum(-2,5);
    expect(result).toEqual(3);
  });

  it('should return the number when adding with zero',()=>{
    const result = component.sum(0,7);
    expect(result).toEqual(7);
  });

   
  it('factorial of number',()=>{
   
    expect(component.factorial(5)).toBe(120);
});
});
