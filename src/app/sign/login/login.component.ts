import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/core/classes/authUser';
import { AuthentificationService } from 'src/app/core/service/authentification/authentification.service';
import { UtilityService } from 'src/app/core/service/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm!: FormGroup
  auth: AuthUser = new AuthUser();
  isProgressing: boolean = false;
  isCorrect: boolean = true;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authentificationService: AuthentificationService,
    private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.signInForm = this.formBuilder.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }


  onSignIn(){
    this.isProgressing = true
    const formValue = this.signInForm.value;
    this.auth.email = formValue.email;
    this.auth.password = formValue.password;
    this.isProgressing = true;
    this.authentificationService.signin(this.auth).subscribe((result: any)=>{
      if(result.status == "OK"){
        this.utilityService.saveToken(result.data);
        this.router.navigateByUrl('dashboards');
        this.isProgressing = false
        this.isCorrect = true;
      }else{
        this.utilityService.deleteToken();
        this.isProgressing = false
      }
    }, ()=>{
      this.utilityService.deleteToken();
      this.isProgressing = false
      this.isCorrect = false;
    })
  }
}
