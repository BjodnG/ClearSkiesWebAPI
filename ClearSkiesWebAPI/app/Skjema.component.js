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
var forms_1 = require("@angular/forms");
var NyeSporsmaal_1 = require("./NyeSporsmaal");
var SkjemaComp = (function () {
    function SkjemaComp(_http, fb) {
        this._http = _http;
        this.fb = fb;
        this.skjema = fb.group({
            Epost: ['', forms_1.Validators.email],
            Sporsmaal: ['', forms_1.Validators.required]
        });
        this.nyttSporsmaal = new NyeSporsmaal_1.NyeSporsmaal('', '');
    }
    //Metoder:
    SkjemaComp.prototype.postNyttSporsmaal = function () {
        console.log('Dette skal postes til DB: \r\n' + this.skjema.value.Epost + '\r\n' + this.skjema.value.Sporsmaal);
        //this.nyttSporsmaal = new NyeSporsmaal(this.skjema.value.Epost, this.skjema.value.Sporsmaal);
        this.nyttSporsmaal.Epost = this.skjema.value.Epost;
        this.nyttSporsmaal.Sporsmaal = this.skjema.value.Sporsmaal;
        this._http.post("api/StdSpm/", this.nyttSporsmaal)
            .subscribe();
        console.log('Dette skal postes til DB: \r\n' + this.nyttSporsmaal.Epost + '\r\n' + this.nyttSporsmaal.Sporsmaal);
    };
    return SkjemaComp;
}());
SkjemaComp = __decorate([
    core_1.Component({
        selector: "Skjema",
        templateUrl: "./app/Skjema.html"
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder])
], SkjemaComp);
exports.SkjemaComp = SkjemaComp;
//# sourceMappingURL=Skjema.component.js.map