import { createSlice } from '@reduxjs/toolkit';

export const stopwatchSlice = createSlice({
  name: 'stopwatch',
  initialState: {
    // value: 0,
    time: 0,
    running: true,
  },
  reducers: {
    onStart: state => {
      state.time += Date.now();
    },
    onStop: state => {
      state.seconds -= 1;
    },
  },
});

export const { onStart, onStop,} = stopwatchSlice.actions;

export const selectStopWatch = state => state.stopwatch.time;

export const selectStopWatchState = state =>  state.stopwatch.running;

export default stopwatchSlice.reducer;
