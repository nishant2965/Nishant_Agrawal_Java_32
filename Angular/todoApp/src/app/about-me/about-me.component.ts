import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  loginText = 'Login';

  toggleLogin() {
    this.loginText = this.loginText === 'Login' ? 'Logout' : 'Login';
  }
}
