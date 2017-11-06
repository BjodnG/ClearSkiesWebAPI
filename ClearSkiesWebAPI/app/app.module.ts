import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { Ng2BootstrapModule } from 'ng2-bootstrap';
//import { BootstrapGridModule } from 'ng2-bootstrap-grid';  BootstrapGridModule

import { StdSpmSide } from './StdSpmSide';
@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, ReactiveFormsModule, Ng2BootstrapModule],
    declarations: [StdSpmSide],
    bootstrap: [StdSpmSide]
})
export class AppModule { }

