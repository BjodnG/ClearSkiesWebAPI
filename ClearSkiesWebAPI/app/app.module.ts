import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './AppComponent';
import { StdSpmComp } from './StdSpm.component';
import { NyeSpmComp } from './NyeSpm.component';
import { SkjemaComp } from './Skjema.component';

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, ReactiveFormsModule],
    declarations: [AppComponent, StdSpmComp, NyeSpmComp, SkjemaComp],
    bootstrap: [AppComponent]
})
export class AppModule { }

