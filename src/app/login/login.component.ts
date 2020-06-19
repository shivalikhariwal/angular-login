import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/shared/services/authentication.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isLoginError: boolean = false;
  constructor(
    private userService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  userLogin: FormGroup;
  ngOnInit() {
    this.userLogin = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  OnSubmit() {
    const userName = this.userLogin.controls.userName.value;
    const password = this.userLogin.controls.password.value;

    this.userService.userAuthentication(userName, password).subscribe(
      (data: any) => {
        this.router.navigate(["/dashboard"]);
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      }
    );
  }
}
