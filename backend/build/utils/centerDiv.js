"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function centerDiv(text) {
    return "<div\n            style=\"\n                height:100%;\n                width: 100%;\n                display: grid;\n                place-items: center;\n                text-align: center;\n            \"\n        >\n            ".concat(text, "\n        </div>");
}
exports.default = centerDiv;
