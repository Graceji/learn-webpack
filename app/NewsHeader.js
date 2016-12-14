import React, { Component } from 'react';
import img from '../img/y18.gif';
import '../css/NesHeader.css';
import '../css/app.css';

export default class NewsHeader extends Component {
  getLogo() {
    return (
      <div className="newsHeader__logo">
        <a href="https://news.ycombinator.com/">
          <img src={img} alt=""/>
        </a>
      </div>
    );
  }

  getTitle() {
    return (
      <div className="newsHeader__title">
        <a href="https://news.ycombinator.com/" className="newsHeader__textLink">
          Hacker News
        </a>
      </div>
    )
  }

  getNav() {
    var navLinks = [
      {
         name: 'new',
         url: 'newest'
       },
       {
         name: 'comments',
         url: 'newcomments'
       },
       {
         name: 'show',
         url: 'show'
       },
       {
         name: 'ask',
         url: 'ask'
       },
       {
         name: 'jobs',
         url: 'jobs'
       },
       {
         name: 'submit',
         url: 'submit'
       }
    ];

    return (
      <div className="newHeader__nav">
        {
          navLinks.map(link => {
            return (
              <a href=""
                key={link.url}
                className="newsHeader__navLink newsHeader__textLink"
              >
                {link.name}
              </a>
            );
          })
        }
      </div>
    );
  }

  getLogin() {
    return (
      <div className="newsHeader__login">
        <a href="https://news.ycombinator.com/login?goto=news" className="newsHeader-textLink">login</a>
      </div>
    );
  }

  render() {
    return (
      <div className="newsHeader">
        { this.getLogo() }
        { this.getTitle() }
        {this.getNav()}
        {this.getLogin()}
      </div>
    ); 
  }
}

