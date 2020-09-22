/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// 测试数据
let strings = ["Hello", "98052", "101"];
// 
let validators:{ [s: string]: Validation.StringValidator } = {};
validators["zip code validator"] = new Validation.ZipCodeValidator();
validators["letter validator"] = new Validation.LettersOnlyValidator();

strings.forEach((e) => {
  for (let name in validators) {
    console.log(`"${e}" - ${ validators[name].isAcceptable(e) ? "matches" : 'does not match'} ${name}`)
  }
});