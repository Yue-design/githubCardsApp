import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  onStart,
  onStop,
  selectStopWatch,
  selectStopWatchState,
} from './stopwatchSlice';
import styles from './StopWatch.module.css';

export function StopWatch() {
  const currentTime = useSelector(selectStopWatch);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{currentTime}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(onStart())}
        >
          start
        </button>
      </div>
    </div>
  );
}
