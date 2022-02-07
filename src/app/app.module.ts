import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
// Auth0 Module
import { AuthModule } from '@auth0/auth0-angular';
// MaterialUI Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthButtonComponent } from './auth-button/auth-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ProfileComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FontAwesomeModule,
    NgbModule,
    AuthModule.forRoot({// Info found under application settings in Auth0
      domain: 'dev-2px0rxvp.us.auth0.com',// Domain
      clientId: 'MEurl2oRnzKFTwZvJlyqh2eANs6Ar77w',// Client ID
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
