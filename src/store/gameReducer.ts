import { createAction, createReducer } from "@reduxjs/toolkit";

type GameReducerType = {
  roomId: null | string;
  isLoading: boolean;
  round: null | number;
  currentQuestion: null | string;
};

const initialState = {
  roomId: null,
  isLoading: false,
  round: null,
  currentQuestion: null,
} as GameReducerType;

export const setRoomId = createAction<string>("game/addRoomId");
export const setIsLoading = createAction<boolean>("game/setIsLoading");
export const setRound = createAction<number>("game/setRound");
export const setCurrentQuestion = createAction<string>(
  "game/setCurrentQuestion"
);

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
    });
});

export default gameReducer;
