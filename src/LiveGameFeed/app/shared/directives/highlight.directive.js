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
var HighlightDirective = (function () {
    function HighlightDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        var self = this;
        self.renderer.setElementClass(this.el.nativeElement, 'feed-highlight', true);
        var horn = document.getElementById('horn');
        horn.className += ' orange';
        setTimeout(function () {
            self.renderer.setElementClass(self.el.nativeElement, 'feed-highlight-light', true);
            document.getElementById("horn").className = document.getElementById("horn").className.replace(/(?:^|\s)orange(?!\S)/g, '');
        }, 1000);
    }
    HighlightDirective.prototype.highlight = function (color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    };
    return HighlightDirective;
}());
HighlightDirective = __decorate([
    core_1.Directive({
        selector: '[feedHighlight]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], HighlightDirective);
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map