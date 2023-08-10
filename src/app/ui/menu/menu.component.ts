import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/users/user.service';
import { UtilityService } from 'src/app/core/service/utility.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  idAdmin: boolean = false;

  constructor(private userService: UserService, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.getConnectedUser();
  }

  getConnectedUser() {
    this.userService.findUserByEmail(this.utilityService.getUserName()).subscribe((res) => {
      res.data.roles.forEach((role: any)=>{
        if(role.name == "ADMIN"){
          this.idAdmin = true
        }
      })
    })
  }
}
