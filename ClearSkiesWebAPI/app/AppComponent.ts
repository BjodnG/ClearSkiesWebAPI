import { Component } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



import { StdSpmComp } from './StdSpm.component';
import { NyeSpmComp } from './NyeSpm.component';


@Component({
    selector: "min-app",
    templateUrl: "./app/HovedSide.html"
})
export class AppComponent {

    public synligComponent: string;

    constructor(private _http: Http, private fb: FormBuilder) {

        this.synligComponent = 'StdSpm';
        
    }

    //METODER:
    byttComponent(nyComponent: string) {
        this.synligComponent = nyComponent;
    }

    ComponentSjekk(comp: string) {

        if (this.synligComponent == comp){
            return true;
        }
        return false;
    }

}
