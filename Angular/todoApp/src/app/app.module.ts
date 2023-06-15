import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';


@NgModule({ //ng module is a decorator that we are using here
  declarations: [
    AppComponent,
      HeaderComponent,
      AboutMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // starting point of the application among all the components (where exactly we have to start)
  //decorator to define the type of the class
})

export class AppModule { }
