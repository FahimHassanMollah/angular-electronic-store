import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public user: User;
  constructor() {
    this.user = new User('','','','','');

  }
  signUpFormSubmitHandler(event : any ) {
    event.preventDefault();
  }
}
