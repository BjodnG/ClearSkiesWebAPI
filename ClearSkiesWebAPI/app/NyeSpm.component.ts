import { Component } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import { NyeSporsmaal } from './NyeSporsmaal';

@Component({
    selector: "NyeSpm",
    templateUrl: "./app/NyeSpm.html"
})
export class NyeSpmComp {

    public laster: string;
    public ingenSpm: string;

    public alleNyeSpm: Array<NyeSporsmaal>;

    constructor(private _http: Http) {

        this.hentAlleNyeSpm();
    }


    //METODER:

    hentAlleNyeSpm() {
        this.laster = "Vennligst vent";
        this._http.get("api/StdSpm/NyeSpmList")
            .map(resultat => {
                let JsonData = resultat.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.alleNyeSpm = [];
                this.laster = "";
                //console.log(JsonData);
                if (JsonData) {
                    
                    for (let sporsmaal of JsonData) {
                        this.alleNyeSpm.unshift(
                            new NyeSporsmaal(
                                sporsmaal.id,
                                sporsmaal.Epost,
                                sporsmaal.Sporsmaal
                            )
                        )
                    }
                    console.log(this.alleNyeSpm.length);
                    if (this.alleNyeSpm.length == 0)
                        this.ingenSpm = 'Ingen spørsmål i DB.';
                    else
                        this.ingenSpm = '';
                }

            },
            error => alert(error),
            () => console.log('Utført get-api/StdSpm')
            );
    }

    slettNyttSporsmaal(id: string) {

        this._http.delete("api/StdSpm/" + id)
            .map(returData => returData.toString())
            .subscribe(
            retur => {
                this.hentAlleNyeSpm();
            },
            error => alert(error + "SLETTING FEILET"),
            () => console.log("Sletting utført.")
            );

    }
}
