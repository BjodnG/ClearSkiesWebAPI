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
var StdSporsmaal_1 = require("./StdSporsmaal");
var StdSpmComp = (function () {
    function StdSpmComp(_http) {
        this._http = _http;
        this.hentAlleStdSpm();
    }
    //METODER:
    StdSpmComp.prototype.hentAlleStdSpm = function () {
        var _this = this;
        this.laster = "Vennligst vent";
        this._http.get("api/StdSpm/StdSpmList")
            .map(function (resultat) {
            var JsonData = resultat.json();
            return JsonData;
        })
            .subscribe(function (JsonData) {
            _this.alleStdSpm = [];
            _this.laster = "";
            if (JsonData) {
                for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                    var sporsmaal = JsonData_1[_i];
                    _this.alleStdSpm.push(new StdSporsmaal_1.StdSporsmaal(sporsmaal.Sporsmaal, sporsmaal.Svar));
                }
            }
        }, function (error) { return alert(error); }, function () { return console.log('Utført get-api/StdSpm' + _this.alleStdSpm[0].Sporsmaal); });
    };
    return StdSpmComp;
}());
StdSpmComp = __decorate([
    core_1.Component({
        selector: "StdSpm",
        templateUrl: "./app/StdSpm.html"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], StdSpmComp);
exports.StdSpmComp = StdSpmComp;
//# sourceMappingURL=StdSpm.component.js.map