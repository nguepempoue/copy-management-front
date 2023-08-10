import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/core/service/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private utilityService: UtilityService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  logout() {
    this.utilityService.deleteToken();
    this.router.navigateByUrl("login");
  }

}
