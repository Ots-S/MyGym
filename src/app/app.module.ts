import { ProgramViewComponent } from './component/program-view/program-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgramCardComponent } from './component/program-card/program-card.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'programview', component: ProgramViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramCardComponent,
    ProgramViewComponent,
  ],
  imports: [BrowserModule, NgbModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
