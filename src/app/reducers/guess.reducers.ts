import * as guessActions from '../actions/guess.actions';
// import { Note } from '../interfaces/note';


export interface GuessState {
//   data: Note[];
}
export const initialState: GuessState = {
  data: [],
};
export function reducer(
  state = initialState,
  action: guessActions.ActionsUnion
): GuessState {
  switch (action.type) {
    case guessActions.ActionTypes.GuessHiragana: {
      return {
        ...state,
        // data: [...state.data, action.payload.note],
      };
    }
    case guessActions.ActionTypes.GuessHiraganaSuccess: {
      return {
        ...state,
        // ...state.data.splice(state.data.indexOf(action.payload.note), 1),
      };
    }
    case guessActions.ActionTypes.GuessHiraganaFailure: {
        return {
          ...state,
        //   ...state.data.splice(state.data.indexOf(action.payload.note), 1),
        };
      }
    default: {
      return state;
    }
  }
}