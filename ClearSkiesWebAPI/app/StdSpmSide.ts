import { Component } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { StdSporsmaal } from './StdSporsmaal';
import { NyeSporsmaal } from './NyeSporsmaal';


@Component({
    selector: "min-app",
    templateUrl: "./app/StdSpmSide.html"
    //template: "<h1>{{melding}}</h1>"

})
export class StdSpmSide {

    public laster: string;

    public alleStdSpm: Array<StdSporsmaal>;
    public nyttSporsmaal: Array<NyeSporsmaal>;

    constructor(private _http: Http) {

        this.hentAlleStdSpm();
    }

    //METODER:

    hentAlleStdSpm() {
        this.laster = "Vennligst vent";
        this._http.get("api/StdSpm/")
            .map(resultat => {
                let JsonData = resultat.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.alleStdSpm = [];
                this.laster = "";
                if (JsonData) {
                    for (let sporsmaal of JsonData) {
                        this.alleStdSpm.push(
                            new StdSporsmaal(
                                sporsmaal.Sporsmaal,
                                sporsmaal.Svar
                            )
                        )
                    }
                }
            },
            error => alert(error),
            () => console.log('Utført get-api/StdSpm' + this.alleStdSpm[0].Sporsmaal )
            );
    }

    postNyttSporsmaal() {

    }

}
