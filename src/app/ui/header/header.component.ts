import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/classes/user';
import { UserService } from 'src/app/core/service/users/user.service';
import { UtilityService } from 'src/app/core/service/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User = new User();

  constructor(private utilityService: UtilityService,
    private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getConnectedUser();
  }

  logout() {
    this.utilityService.deleteToken();
    this.router.navigateByUrl("login");
  }

  getConnectedUser() {
    this.userService.findUserByEmail(this.utilityService.getUserName()).subscribe((res) => {
      this.user = res.data;
    })
  }

}
