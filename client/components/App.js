import React, { Component } from 'react';

export default ({ children }) => {
  return <div>
    <h4 className="title-lyrical">lyrical</h4>
    <div className="container">{ children }</div>
  </div>;
};
