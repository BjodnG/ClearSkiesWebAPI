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
    public nyttSporsmaal: NyeSporsmaal;
    public skjema: FormGroup;
    //private EMAIL_REGEXP: string = "/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/";

    public alleNyeSpm: Array<NyeSporsmaal>;

    constructor(private _http: Http, private fb: FormBuilder) {

        this.hentAlleStdSpm();
        this.hentAlleNyeSpm();

        this.skjema = fb.group({
            Epost: ['', Validators.email],
            Sporsmaal: ['',Validators.required]
        });
        this.nyttSporsmaal = new NyeSporsmaal('', '');
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
            () => console.log('Utført get-api/StdSpm' + this.alleStdSpm[0].Sporsmaal )
            );
    }

    postNyttSporsmaal() {

        console.log('Dette skal postes til DB: \r\n' + this.skjema.value.Epost + '\r\n' + this.skjema.value.Sporsmaal);
        //this.nyttSporsmaal = new NyeSporsmaal(this.skjema.value.Epost, this.skjema.value.Sporsmaal);
       
        this.nyttSporsmaal.Epost = this.skjema.value.Epost;
        this.nyttSporsmaal.Sporsmaal = this.skjema.value.Sporsmaal;
        

        this._http.post("api/StdSpm/", this.nyttSporsmaal)
            .subscribe();

        console.log('Dette skal postes til DB: \r\n' + this.nyttSporsmaal.Epost + '\r\n' + this.nyttSporsmaal.Sporsmaal);
        
    }

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
            () => console.log('Utført get-api/StdSpm' + this.alleNyeSpm[0].Sporsmaal)
            );
    }

}
