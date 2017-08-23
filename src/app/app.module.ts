import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    AlertModule.forRoot(),
    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
