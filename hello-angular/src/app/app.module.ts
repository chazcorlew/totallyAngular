import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';

// without listing our components, modules, and services in @NgModule...
// Angular wouldn't recognize any of the things we're using
@NgModule({
  declarations: [ //declarations are where we list our components
    AppComponent,
    BannerComponent,
    WelcomepageComponent
  ],
  imports: [ // where we import new modules
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [], //where we list our services
  bootstrap: [AppComponent]
})
export class AppModule { }
