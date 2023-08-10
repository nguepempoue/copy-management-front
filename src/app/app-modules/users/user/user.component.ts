import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/classes/user';
import { UserService } from 'src/app/core/service/users/user.service';
import { UtilityService } from 'src/app/core/service/utility.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  idAdmin: boolean = false;

  constructor(private userService: UserService, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }



  getAllUsers(){
    this.userService.getAllUsers().subscribe((res)=>{
      this.users = res.data;
      console.log("this.users::", this.users);
      
    })
  }

  getAllUsersAdmin(){
    this.userService.getAllUsersAdmin().subscribe((res)=>{
      this.users = res.data;
    })
  }

  getAllUsersTeatcher(){
    this.userService.getAllUsersTeatcher().subscribe((res)=>{
      this.users = res.data;
    })
  }

  getAllUsersStudent(){
    this.userService.getAllUsersStudent().subscribe((res)=>{
      this.users = res.data;
    })
  }

  onChangeUserStatus(idUser: number, status: string){
    let newStatus: string = ""
    if(status == "ACTIVATED"){
      newStatus = "DISABLED"
    }else if(status == "DISABLED"){
      newStatus = "ACTIVATED"
    }
    this.userService.changeUserStatus(idUser, newStatus).subscribe(()=>{
      this.getAllUsers();
    })
  }
}
