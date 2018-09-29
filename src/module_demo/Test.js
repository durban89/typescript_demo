"use strict";
exports.__esModule = true;
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var LettersOnlyValidator_1 = require("./LettersOnlyValidator");
// 测试数据
var strings = ["Hello", "98052", "101"];
// 
var validators = {};
validators["zip code validator"] = new ZipCodeValidator_1.ZipCodeValidator();
validators["letter validator"] = new LettersOnlyValidator_1.LettersOnlyValidator();
strings.forEach(function (e) {
    for (var name_1 in validators) {
        console.log("\"" + e + "\" - " + (validators[name_1].isAcceptable(e) ? "matches" : 'does not match') + " " + name_1);
    }
});
