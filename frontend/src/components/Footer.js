import React from 'react';

export class Footer extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            © Copyright, Fastly URL Shortener Project 2021
            </div>
        </nav>
      );
    }
}