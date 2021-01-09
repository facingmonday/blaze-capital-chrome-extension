import React from 'react';
import { useEffect, useState } from 'react';
import { getHighlightedText } from '../../utils';
import StockForm from '../StockForm';
import AlertForm from '../AlertForm';
import { Button } from 'reactstrap';
import styles from './AlgoAlert.module.css';

const AlgoAlert = () => {
  const [highlightedText, setHighlightedText] = useState();
  async function asyncGetHighlightedText() {
    getHighlightedText()
      .then((result) => {
        setHighlightedText(result);
      })
      .catch((e) => {});
  }
  useEffect(() => {
    asyncGetHighlightedText();
  }, []);

  if (!highlightedText) {
    return (
      <React.Fragment>
        <h4 className={styles.h4}>
          To add algo alerts, highlight a ticker on the page.
        </h4>
        {/* <Button size="md" color="success" onClick={asyncGetHighlightedText}>
          Refresh
        </Button> */}
      </React.Fragment>
    );
  }
  return (
    <div className={styles.algoAlertContainer}>
      <StockForm highlightedText={highlightedText} />
      <AlertForm />
    </div>
  );
};
export default AlgoAlert;
