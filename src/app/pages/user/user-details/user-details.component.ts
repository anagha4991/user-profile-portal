import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  data: any;
  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state?.['response'];
    debugger
    if (!this.data) {
      this.router.navigate(['']);
    }
  }
}
