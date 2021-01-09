import React, { useEffect } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const TimeframeSelect = ({ updateActiveAlert }) => {
  useEffect(() => {
    updateActiveAlert({ timeFrame: '15m' });
  }, []);

  const handleChange = (e) => updateActiveAlert({ timeFrame: e.target.value });

  return (
    <select
      placeholder="time frame"
      className="form-control"
      onChange={handleChange}
    >
      <option value="15m">Daytrade Algo</option>
      <option value="1h">Swing Trade Algo</option>
      <option value="1d">Investment Algo</option>
      <option value="ALL_TIMEFRAMES">All Timeframes</option>
    </select>
  );
};

export default TimeframeSelect;
