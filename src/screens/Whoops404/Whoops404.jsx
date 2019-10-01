import React from 'react';
import { Link } from 'react-router-dom';
import './Whoops404.css';

const Whoops404 = () => (
  <div className="whoops">
    <div className="whoops-info">
      <h1>404</h1>
      <p>We couldn't find this page.</p>
    </div>
    <Link to="/">Back</Link>
  </div>
);

export default Whoops404;
