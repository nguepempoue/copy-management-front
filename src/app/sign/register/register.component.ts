import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/classes/user';
import { AuthentificationService } from 'src/app/core/service/authentification/authentification.service';
import { UtilityService } from 'src/app/core/service/utility.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup
  user: User = new User();
  isProgressing: boolean = false;

  constructor(private router: Router,private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService,
    private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      CfPassword: new FormControl(null, Validators.required),
    })
  }

  onRegister(){
    this.isProgressing = true
    const formValue = this.registerForm.value;
    this.user.firstName = formValue.firstName;
    this.user.lastName = formValue.lastName;
    this.user.password = formValue.password;
    this.user.phoneNumber = formValue.phoneNumber;
    this.user.email = formValue.email;

    console.log("users:: ", this.user);
    

    this.authentificationService.signup(this.user).subscribe((result: any)=>{
      console.log("result::", result);
    }, (error)=>{
      console.log("error::", error);
      
    })
  }
  }

  // backToLogin(){
  //   this.router.navigateByUrl('login');
  // }


