import React from 'react';
import { useRecoilValue } from 'recoil';

import { TodoListStatsState } from '../store/TodoListStatsState';

export const TodoListStats = () => {
  const {
    allListCount,
    completeCount,
    completeRatio,
    unCompleteCount,
  } = useRecoilValue(TodoListStatsState);

  const completePercent = Math.round(completeRatio * 100);

  return (
    <>
      <div>All : {allListCount}</div>
      <div>UnComplete : {unCompleteCount}</div>
      <div>Complete : {completeCount}</div>
      <div>CompleteRatio : {completePercent} %</div>
    </>
  );
};
