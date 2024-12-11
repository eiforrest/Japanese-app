import { Action } from "@ngrx/store";

export enum ActionTypes {
    GuessHiragana = "[Guess] Guess Hiragana",
    GuessHiraganaSuccess = "[Guess] Guess Hiragana Success",
    GuessHiraganaFailure = "[Guess] Guess Hiragana Failure"
}

export class GuessHiragana implements Action {
    readonly type = ActionTypes.GuessHiragana;
    // constructor(public payload: { note: Note }) {}
  }
export class GuessHiraganaSuccess implements Action {
    readonly type = ActionTypes.GuessHiraganaSuccess;
    // constructor(public payload: { note: Note }) {}
}

export class GuessHiraganaFailure implements Action {
    readonly type = ActionTypes.GuessHiraganaFailure;
    // constructor(public payload: { note: Note }) {}
}
  
export type ActionsUnion = GuessHiragana | GuessHiraganaSuccess | GuessHiraganaFailure;