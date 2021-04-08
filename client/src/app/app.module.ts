import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';

// add service & httpmodule
import { ProjectService } from "./services/project.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"; // needed for form data-binding for add / edit

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [ProjectService],
  bootstrap: [ProjectComponent]
})
export class AppModule { }
