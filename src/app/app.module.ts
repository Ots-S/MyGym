import { ProgramViewComponent } from './components/program-view/program-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgramCardComponent } from './components/program-card/program-card.component';
import { SeriesComponent } from './components/series-view/series.component';
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExerciceCardComponent } from './components/exercice-card/exercice-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ExerciceCounterComponent } from './components/exercice-counter/exercice-counter.component';
import { SeriesRecapComponent } from './components/series-recap/series-recap.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programview/:program', component: ProgramViewComponent },
  { path: 'series/:serie', component: SeriesComponent },
  { path: 'recap', component: SeriesRecapComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramCardComponent,
    ProgramViewComponent,
    SeriesComponent,
    TopMenuComponent,
    ContactFormComponent,
    FooterComponent,
    ExerciceCardComponent,
    CarouselComponent,
    ExerciceCounterComponent,
    SeriesRecapComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  exports: [ExerciceCardComponent],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
