import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//HTTP
import { HttpClientModule } from '@angular/common/http';
//Forms
import { ReactiveFormsModule } from '@angular/forms';
//Routing
import { AppRoutingModule, routesNavigation } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, routesNavigation],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
