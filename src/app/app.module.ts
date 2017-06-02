import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { WineComponent } from './wine/wine.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { appRouting } from './app.routes';
import { StarRatingPipe } from './shared/starRating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SearchComponent,
    ResultsComponent,
    WineComponent,
    NotFoundComponent,
    StarRatingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
