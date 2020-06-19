import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
} from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthenticationService } from "../shared/services/authentication.service";
import { By } from "@angular/platform-browser";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [AuthenticationService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should set submitted to true", async(() => {
    component.OnSubmit();
    expect(component.OnSubmit).toBeTruthy();
  }));

  it("Should call the OnSubmit method", () => {
    fakeAsync(() => {
      fixture.detectChanges();
      spyOn(component, "OnSubmit");
      let el: HTMLElement;
      el = fixture.debugElement.query(By.css("Login")).nativeElement;
      el.click();
      expect(component.OnSubmit).toHaveBeenCalledTimes(1);
    });
  });

  it("Form should be invalid", async(() => {
    component.userLogin.controls.userName.setValue("");
    component.userLogin.controls.password.setValue("");
    expect(component.userLogin.valid).toBeFalsy();
  }));

  it("Form should be valid", async(() => {
    component.userLogin.controls.userName.setValue("shivali");
    component.userLogin.controls.password.setValue("s");
    expect(component.userLogin.valid).toBeTruthy();
  }));
});
