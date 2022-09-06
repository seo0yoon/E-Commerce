import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { __UPDATE_PROD_COLOR_IDX__ } from '../actionTypes/layouts';

function ColorChip({ isActive, value, idx }) {
  const dispatch = useDispatch();

  const __updateSelected = useCallback(() => {
    dispatch({
      type: __UPDATE_PROD_COLOR_IDX__,
      payload: idx,
    });
  }, [dispatch, idx]);

  return (
    <li
      onClick={__updateSelected}
      className={`color ${isActive ? 'scale-up' : 'chip-default'}`}
      style={{ backgroundColor: value }}
    ></li>
  );
}

export default ColorChip;
