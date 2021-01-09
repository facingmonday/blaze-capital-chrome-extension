import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './StockForm.module.css';
import { Alert, Spinner } from 'reactstrap';
const StockForm = ({
  activeStock,
  error,
  fetchStocks,
  highlightedText,
  loading,
  stocks,
  updateActiveAlert,
}) => {
  useEffect(() => {
    if (highlightedText) {
      fetchStocks(highlightedText);
    }
  }, [highlightedText]);

  const handleChangeStock = (e) => {
    updateActiveAlert({
      stock: stocks.find((s) => s.symbol == e.target.value),
    });
  };

  if (error) {
    return <Alert color="warning">Invalid stock selected.</Alert>;
  }

  if (loading) {
    return (
      <div style={{ margin: '50px' }}>
        <Spinner color="success" />
      </div>
    );
  }

  return (
    <div className={styles.stockForm}>
      <div>
        <p className={styles.stockDescription}>
          {activeStock?.description?.replace(/(<([^>]+)>)/gi, '')}
        </p>
      </div>
      <select className="form-control" onChange={handleChangeStock}>
        {stocks.map((s) => (
          <option key={`${s.symbol}${s.exchange}${s.country}`} value={s.symbol}>
            {s.symbol?.replace(/(<([^>]+)>)/gi, '')} - {s.exchange} -{' '}
            {s.country}
          </option>
        ))}
      </select>
    </div>
  );
};
StockForm.defaultProps = {};
StockForm.propTypes = {
  prop: PropTypes.string,
};

export default StockForm;
