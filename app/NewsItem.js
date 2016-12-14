import React, { Component } from 'react';
import '../css/newsItem.css';
import URL from 'url';
import ImageGrayArrow from '../img/grayarrow.gif';

export default class NewsItem extends Component {
  getDomain() {
    return URL.parse(this.props.item.url).hostname;
  }

  getTitle() {
    return (
      <div className="newItem__title">
        <a 
          href={this.props.item.url
            ? this.props.item.url
            : `https://news.ycombinator.com/item?id='${this.props.item.id}`}
          className="newItem__titleLink">
          {this.props.item.title}
        </a>
        {
          this.props.item.url
          && <span className="newsItem__domain"><a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}>({this.getDomain()})</a></span>
        }
      </div>
    );
  }

  getCommonLink() {
    var commentText = 'discuss';
    if (this.props.item.kids && this.props.item.kids.length) {
      commentText = this.props.item.kids.length + ' comment';
    }
    return (
      <a href={`https://news.ycombinator.com/item?id=${this.props.item.id}`}>
        {commentText}
      </a>
    );
  }

  getSubtext() {
    return (
      <div className="newItem__subText">
        {this.props.item.score} points by
        <a href={`https://news.ycombinator.com/user?id=${this.props.item.by}`}>
          {this.props.item.by}
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="newsItem">
        <div className="newsItem__itemText">
          {this.getTitle()}
          {this.getSubtext()}
        </div>
      </div>
    );
  }
}