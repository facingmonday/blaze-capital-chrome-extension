import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Popup from './Popup';
import './index.css';
import configureStore from '../../store/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

render(<Provider store={configureStore()}><Popup /></Provider>, window.document.querySelector('#app-container'));
