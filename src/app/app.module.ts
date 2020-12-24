// Importing core modules of Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Whenever CLI is used to generate new component and services,
// It will automatically update this file to import and add them here.
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Using @NgModule decorator we provide additional metadata to specify the component,
// the services, the imports..etc Further 
// Decorators are used while processing, instantiation and at runtime.
@NgModule({
  declarations: [
    AppComponent,
  ],
// Various imports needed for Application can be added here.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
