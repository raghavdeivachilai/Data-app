import {Component, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: SocialAuthService, private router: Router) {
  }

  ngOnInit(): void {
    //Get the username and login status
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      localStorage.setItem('status', 'true');
      this.router.navigate(['/tables', this.user.name]);
    });
  }
  //Sign in with Google
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
