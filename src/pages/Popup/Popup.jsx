import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/img/icon-128.png';
import { Button } from 'reactstrap';
import './Popup.css';

// Selectors
import { selectLoading } from '../../selectors/app';
import { selectToken } from '../../selectors/auth';

// Actions
import { loadApp } from '../../actions/app';

// Components 
import AlgoAlert from '../../components/AlgoAlert';
import LoginForm from '../../components/LoginForm';

const Popup = () => {
  const loading = useSelector(selectLoading);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadApp());
  }, []);
  if(loading) {
    return (<div className="App">
      <header className="App-header">
        <h1>Loading</h1>
      </header>
    </div>);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        {
          !token
          ? <LoginForm />
          : <AlgoAlert />
        }
      </div>
      <div className="App-close">
        <Button
          color="secondary"
          size="sm"
          onClick={() => window.close()}
          >CLOSE</Button>
      </div>
    </div>
  );
};

export default Popup;
