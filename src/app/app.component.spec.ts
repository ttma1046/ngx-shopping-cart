import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';
import { AppRoutingModule } from './app-routing.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NotFoundPageComponent
      ],
      imports: [
        AppRoutingModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
