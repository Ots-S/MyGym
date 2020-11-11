import { ProgramViewComponent } from './components/Programs/program-view/program-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/LandingPage/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgramCardComponent } from './components/Programs/program-card/program-card.component';
import { SeriesComponent } from './components/Series/series-view/series.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopMenuComponent } from './components/LandingPage/top-menu/top-menu.component';
import { ContactFormComponent } from './components/LandingPage/contact-form/contact-form.component';
import { FooterComponent } from './components/LandingPage/footer/footer.component';
import { ExerciceCardComponent } from './components/Exercices/exercice-card/exercice-card.component';
import { CarouselComponent } from './components/LandingPage/carousel/carousel.component';
import { ExerciceCounterComponent } from './components/Series/exercice-counter/exercice-counter.component';
import { SeriesRecapComponent } from './components/Series/series-recap/series-recap.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './components/Profile/user-profile/user-profile.component';
import { ExercicesViewComponent } from './components/Exercices/exercices-view/exercices-view.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'programview/:program', component: ProgramViewComponent },
  { path: 'series/:serie', component: SeriesComponent },
  { path: 'recap', component: SeriesRecapComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'exercices', component: ExercicesViewComponent },
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
    ExercicesViewComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [ExerciceCardComponent],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
