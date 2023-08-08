import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
//import AOS from "aos";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public userData:any =[];
  constructor(private userService: UserService,private router: Router) {

  }
  ngOnInit() {
    //AOS.init();
    this.userService.getUserData().subscribe((users: any) => {
      //console.log(users)
      this.userData = users;
    });
  }
  userDetails(user: any){
    debugger
    //console.log(user);
    //this.router.navigate(['user-details'], { state: { example: 'bar' } });
    this.router.navigate(['user-details',user.name.replace(/\s+/g, '-')], {
      state: {
        response: { usersData: user },
      },
    });
  }
}
