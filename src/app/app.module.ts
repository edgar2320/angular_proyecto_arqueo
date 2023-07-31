import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { PathLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkeletonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
   {
    provide: PathLocationStrategy,
    useClass: PathLocationStrategy
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
