import { StringValidator } from './Validation';
import { ZipCodeValidator } from './ZipCodeValidator';
import { LettersOnlyValidator } from './LettersOnlyValidator';

// 测试数据
let strings = ["Hello", "98052", "101"];
// 
let validators:{ [s: string]: StringValidator } = {};
validators["zip code validator"] = new ZipCodeValidator();
validators["letter validator"] = new LettersOnlyValidator();

strings.forEach((e) => {
  for (let name in validators) {
    console.log(`"${e}" - ${ validators[name].isAcceptable(e) ? "matches" : 'does not match'} ${name}`)
  }
});