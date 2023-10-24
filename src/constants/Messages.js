export const INPUT_MESSAGE = {
  start: '숫자를 입력해주세요 : ',
  retry: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
}

export const OUTPUT_MESSAGE = {
  intro: "숫자 야구 게임을 시작합니다.",
  outro: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  end: "게임 종료",
}

export const FINISH_MESSAGE = OUTPUT_MESSAGE.outro + "\n" + INPUT_MESSAGE.retry + "\n";

export const GAME_RESULT = {
  strike: "스트라이크",
  ball: "볼",
  nothing: "낫싱"
}