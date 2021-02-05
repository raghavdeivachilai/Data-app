import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {FecserviceService} from './fecservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private fecservice: FecserviceService, private router: Router) {
  }
  canActivate(): boolean {
    if (this.fecservice.CheckloggedInstatus()) {
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
