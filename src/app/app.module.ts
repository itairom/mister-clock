import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { reducers, metaReducers } from './store/store';
import { AppEffects } from './store/app.effects';

import { AppComponent } from './root-component/index';
import { HomeComponent } from './pages/home/home.component';

import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ClockAppComponent } from './pages/clock-app/clock-app.component';
import { ClockListComponent } from './cmps/clock-list/clock-list.component';
import { ClockPreviewComponent } from './cmps/clock-preview/clock-preview.component';
import { TimePipe } from './pipes/time.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatCardModule } from '@angular/material/card';
import { ClockEditComponent } from './cmps/clock-edit/clock-edit.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    ClockAppComponent,
    ClockListComponent,
    ClockPreviewComponent,
    TimePipe,
    ClockEditComponent,
  ],
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatAutocompleteModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
