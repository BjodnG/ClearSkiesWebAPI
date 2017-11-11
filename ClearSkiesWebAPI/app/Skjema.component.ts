import { Component } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


import { NyeSporsmaal } from './NyeSporsmaal';

@Component({
    selector: "Skjema",
    templateUrl: "./app/Skjema.html"
})
export class SkjemaComp {

    public nyttSporsmaal: NyeSporsmaal;
    public skjema: FormGroup;


    constructor(private _http: Http, private fb: FormBuilder) {

        this.skjema = fb.group({
            Epost: ['', Validators.email],
            Sporsmaal: ['', Validators.required]
        });
        this.nyttSporsmaal = new NyeSporsmaal('', '');
    }

    //Metoder:

    postNyttSporsmaal() {

        console.log('Dette skal postes til DB: \r\n' + this.skjema.value.Epost + '\r\n' + this.skjema.value.Sporsmaal);
        //this.nyttSporsmaal = new NyeSporsmaal(this.skjema.value.Epost, this.skjema.value.Sporsmaal);

        this.nyttSporsmaal.Epost = this.skjema.value.Epost;
        this.nyttSporsmaal.Sporsmaal = this.skjema.value.Sporsmaal;


        this._http.post("api/StdSpm/", this.nyttSporsmaal)
            .subscribe();

        console.log('Dette skal postes til DB: \r\n' + this.nyttSporsmaal.Epost + '\r\n' + this.nyttSporsmaal.Sporsmaal);

    }
}