import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {SeriesListComponent} from './components/series-list/series-list.component';
import {NamePanelComponent} from './components/name-panel/name-panel.component';
import {GenrePanelComponent} from './components/genre-panel/genre-panel.component';
import {PremierYearPanelComponent} from './components/premier-year-panel/premier-year-panel.component';
import {SeriesViewComponent} from './components/series-view-panel/series-view.component';
import {NbIconModule, NbThemeModule, NbLayoutModule, NbFormFieldModule, NbInputModule, NbSelectModule} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    SeriesListComponent,
    NamePanelComponent,
    GenrePanelComponent,
    PremierYearPanelComponent,
    SeriesViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NbIconModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    NbSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
