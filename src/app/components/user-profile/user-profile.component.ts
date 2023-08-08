import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
@Input() userData: any = {};
  userDataJson: any;

// constructor() {
//   this.userDataJson = JSON.parse(this.userData);
//   console.log(this.userDataJson)
// }
}
