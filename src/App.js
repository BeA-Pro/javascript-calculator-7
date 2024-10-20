import { MissionUtils } from "@woowacourse/mission-utils";
import Calculator from './Calculator.js';

class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const calculator = new Calculator(input);
    const [result, message] = calculator.checkInputValidity();
    if (!result) throw new Error(message);

    const [result2, message2] = calculator.splitNumberSection();
    const [result3, message3] = calculator.checkIsPositiveNumber();
    if (!result3) throw new Error(message3);

    MissionUtils.Console.print("결과 : " + calculator.addNumbers());
  }
}

export default App;
