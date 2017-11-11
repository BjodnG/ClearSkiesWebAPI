import { Component } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import { StdSporsmaal } from './StdSporsmaal';
import { NyeSporsmaal } from './NyeSporsmaal';

import { SkjemaComp } from './Skjema.component';


@Component({
    selector: "StdSpm",
    templateUrl: "./app/StdSpm.html"
})
export class StdSpmComp {

    public laster: string;

    public alleStdSpm: Array<StdSporsmaal>;


    constructor(private _http: Http) {

        this.hentAlleStdSpm();
    }

    //METODER:

    hentAlleStdSpm() {
        this.laster = "Vennligst vent";
        this._http.get("api/StdSpm/StdSpmList")
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
            () => console.log('Utført get-api/StdSpm' + this.alleStdSpm[0].Sporsmaal)
            );
    }

}
