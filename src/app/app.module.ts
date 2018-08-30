import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CaseListComponent } from './dashboard/case-list/case-list.component';
import { SubjectListComponent } from './dashboard/subject-list/subject-list.component';
import { CaseToolbarComponent } from './dashboard/case-toolbar/case-toolbar.component';
import { SubjectInfoComponent } from './dashboard/subject-info/subject-info.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    CaseListComponent,
    SubjectListComponent,
    CaseToolbarComponent,
    SubjectInfoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
