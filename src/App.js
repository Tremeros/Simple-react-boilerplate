import React from 'react';
import Amount from "./Amount.js";
import {Euro} from "./Euro.js";
import {Pound} from "./Pound.js";

import MyImage from './assets/images/isis.jpg';
import './styles/style.css';

import TwitterIcon from './Icons/twitter.svg';
import FacebookIcon from './Icons/facebook.svg';
import GithubIcon from './Icons/github.svg';
 
const App = ({ title }) =>
   <div>
     <h1>Currency Converter</h1>
     <Amount
    renderAmountOne={amount => (
      <div>
        <h2>My one Amount</h2>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
    renderAmountTwo={amount => (
      <div>
        <h2>My other Amount</h2>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  />
   </div>
export default App;