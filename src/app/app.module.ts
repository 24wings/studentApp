import { UserDinnerPipe } from './pipe/user-dinner';
import { DinnerService } from './service/dinner-service';
import { DinnerComponent } from './pages/dinner/dinner';
import { UserService } from './service/user-service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';

import { SignInComponent } from './pages/index';
import { HomeComponent } from './pages/home/home';
import { SignUpComponent } from './pages/sign/sign-up';

// firebase  topshadow/firebase
export const config = {
  apiKey: 'AIzaSyDlGnlRFT4tjKqjR-6RUOr5zIH84e3pxNI',
  authDomain: 'fir-5559e.firebaseapp.com',
  databaseURL: 'https://fir-5559e.firebaseio.com',
  storageBucket: 'fir-5559e.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent, DinnerComponent, UserDinnerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(config),
    RouterModule.forRoot([{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: HomeComponent
    }, {
      path: 'signin',
      component: SignInComponent
    }, {
      path: 'signup',
      component: SignUpComponent
    }, {
      path: 'dinner',
      component: DinnerComponent
    }
    ])
  ],
  providers: [UserService, DinnerService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
