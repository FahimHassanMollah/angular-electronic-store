import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducers/index.reducer';
import { selectIsLoading } from './store/selectors/loader.selector';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbAlertModule, NavbarComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-electronic-store';
  store: Store<AppState> = inject(Store);
  isLoading$ = this.store.select(selectIsLoading);
  constructor() {
   
  }
}
