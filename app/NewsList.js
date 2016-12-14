import React, { Component } from 'react';
import NewsHeader from './NewsHeader';
import NewsItem from './NewsItem';

export default class NewsList extends Component {
  render() {
    const {items} = this.props;
    return (
      <div className="newsList">
        <NewsHeader />
        {
          items.map(item => <NewsItem key={item.id} item={item} />)
        }
      </div>
    );
  }
}
