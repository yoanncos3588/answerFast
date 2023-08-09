import { createAction, createReducer } from "@reduxjs/toolkit";
import { GameReducerType } from "../@types/reducers";
import { defaultConfig } from "../utils/gameConfigPossibility";

const initialState = {
  roomId: null,
  isLoading: false,
  round: null,
  currentQuestion: null,
  gameSettings: defaultConfig,
} as GameReducerType;

export const setRoomId = createAction<string>("game/addRoomId");
export const setIsLoading = createAction<boolean>("game/setIsLoading");
export const setRound = createAction<number>("game/setRound");
export const setCurrentQuestion = createAction<string>(
  "game/setCurrentQuestion"
);
export const setGameSettings = createAction<{ key: string; value: string }>(
  "game/setGameSettings"
);

export const toggleTheme = createAction<number>("game/toggleTheme");

const gameReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setRoomId, (state, action) => {
      state.roomId = action.payload;
    })
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setRound, (state, action) => {
      state.round = action.payload;
    })
    .addCase(setCurrentQuestion, (state, action) => {
      state.currentQuestion = action.payload;
    })
    .addCase(setGameSettings, (state, action) => {
      state.gameSettings = {
        ...state.gameSettings,
        [action.payload.key]: action.payload.value,
      };
    })
    .addCase(toggleTheme, (state, action) => {
      state.gameSettings.themes[action.payload].activ =
        !state.gameSettings.themes[action.payload].activ;
    });
});

export default gameReducer;
