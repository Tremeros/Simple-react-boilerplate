import React from 'react';

import MyImage from './assets/images/isis.jpg';
import './styles/style.css';

import TwitterIcon from './Icons/twitter.svg';
import FacebookIcon from './Icons/facebook.svg';
import GithubIcon from './Icons/github.svg';
 
const App = ({ title }) =>
<div>
  <h1>{title}</h1>;
  <img src={MyImage} alt="torchlight in the sky" />
  <ul>
      <li>
        <TwitterIcon width="40px" height="40px" />
        <a href="https://twitter.com/rwieruch">Twitter</a>
      </li>
      <li>
        <FacebookIcon width="40px" height="40px" />
        <a href="https://www.facebook.com/rwieruch/">Facebook</a>
      </li>
      <li>
        <GithubIcon width="40px" height="40px" />
        <a href="https://github.com/rwieruch">Github</a>
      </li>
    </ul>
</div>
export default App;