"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var config_service_1 = require("./shared/services/config.service");
var data_service_1 = require("./shared/services/data.service");
var home_component_1 = require("./home/home.component");
var highlight_directive_1 = require("./shared/directives/highlight.directive");
var match_component_1 = require("./shared/components/match.component");
var chat_component_1 = require("./shared/components/chat.component");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routes_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            chat_component_1.ChatComponent,
            home_component_1.HomeComponent,
            highlight_directive_1.HighlightDirective,
            match_component_1.MatchComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            config_service_1.ConfigService,
            data_service_1.DataService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map