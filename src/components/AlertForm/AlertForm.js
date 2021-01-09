import React, { useEffect } from 'react';
import styles from './AlertForm.module.css';
import { Alert, Spinner } from 'reactstrap';
import ListSelect from '../ListSelect';
import TimeframeSelect from '../TimeframeSelect';

const AlertForm = ({
  alert,
  activeStock,
  complete,
  loading,
  error,
  saveAlert,
}) => {
  if (!activeStock) {
    return null;
  }
  const handleSubmit = (evt) => {
    if (alert.timeFrame && alert.list && alert.stock) {
      saveAlert(alert);
    }
    evt.preventDefault();
  };

  if (loading) {
    return (
      <div style={{ margin: '50px' }}>
        <Spinner color="success" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ margin: '50px 10px' }}>
        <Alert color="warning">Error saving alert.</Alert>;
      </div>
    );
  }
  if (complete) {
    return (
      <div style={{ textAlign: 'center', margin: '50px' }}>
        <Alert color="success">Alert Saved.</Alert>
      </div>
    );
  }

  return (
    <form className={styles.triggerForm} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <ListSelect />
      </div>
      <div className={styles.row}>
        <TimeframeSelect />
      </div>
      <div className={styles.row}>
        <button className="form-control btn btn-success" type="submit">
          Save Alert
        </button>
      </div>
    </form>
  );
};

export default AlertForm;
