"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var NyeSporsmaal_1 = require("./NyeSporsmaal");
var NyeSpmComp = (function () {
    function NyeSpmComp(_http) {
        this._http = _http;
        this.hentAlleNyeSpm();
    }
    //METODER:
    NyeSpmComp.prototype.hentAlleNyeSpm = function () {
        var _this = this;
        this.laster = "Vennligst vent";
        this._http.get("api/StdSpm/NyeSpmList")
            .map(function (resultat) {
            var JsonData = resultat.json();
            return JsonData;
        })
            .subscribe(function (JsonData) {
            _this.alleNyeSpm = [];
            _this.laster = "";
            //console.log(JsonData);
            if (JsonData) {
                for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                    var sporsmaal = JsonData_1[_i];
                    _this.alleNyeSpm.unshift(new NyeSporsmaal_1.NyeSporsmaal(sporsmaal.id, sporsmaal.Epost, sporsmaal.Sporsmaal));
                }
                console.log(_this.alleNyeSpm.length);
                if (_this.alleNyeSpm.length == 0)
                    _this.ingenSpm = 'Ingen spørsmål i DB.';
                else
                    _this.ingenSpm = '';
            }
        }, function (error) { return alert(error); }, function () { return console.log('Utført get-api/StdSpm'); });
    };
    NyeSpmComp.prototype.slettNyttSporsmaal = function (id) {
        var _this = this;
        this._http.delete("api/StdSpm/" + id)
            .map(function (returData) { return returData.toString(); })
            .subscribe(function (retur) {
            _this.hentAlleNyeSpm();
        }, function (error) { return alert(error + "SLETTING FEILET"); }, function () { return console.log("Sletting utført."); });
    };
    return NyeSpmComp;
}());
NyeSpmComp = __decorate([
    core_1.Component({
        selector: "NyeSpm",
        templateUrl: "./app/NyeSpm.html"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], NyeSpmComp);
exports.NyeSpmComp = NyeSpmComp;
//# sourceMappingURL=NyeSpm.component.js.map