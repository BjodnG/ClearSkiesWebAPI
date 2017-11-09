import { Component } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NyeSporsmaal } from './NyeSporsmaal';


@Component({
    selector: "min-app",
    templateUrl: "./app/StdSpmSide.html"
    //template: "<h1>{{melding}}</h1>"

})
export class StdSpmSide {

    public laster: string;

    public alleNyeSpm: Array<NyeSporsmaal>;

    constructor(private _http: Http) {

        //this.hentAlleNyeSpm();
    }

    //METODER:

    hentAlleNyeSpm() {
        this.laster = "Vennligst vent";
        this._http.get("api/StdSpm/")
            .map(resultat => {
                let JsonData = resultat.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.alleNyeSpm = [];
                this.laster = "";
                if (JsonData) {
                    for (let sporsmaal of JsonData) {
                        this.alleNyeSpm.push(
                            new NyeSporsmaal(
                                sporsmaal.Epost,
                                sporsmaal.Sporsmaal
                            )
                        )
                    }
                }
            },
            error => alert(error),
            () => console.log('Utført get-api/StdSpm' + this.alleNyeSpm[0].Sporsmaal )
            );
    }


}
