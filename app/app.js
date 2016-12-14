import React, { Component } from 'react';
import { render } from 'react-dom';
import NewsList from './NewsList';

var items = [
  {
    "by" : "bane",
    "descendants" : 49,
    "id" : 11600137,
    "kids" : [ 11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483 ],
    "score" : 56,
    "time" : 1461985332,
    "title" : "Yahoo's Marissa Mayer could get $55M in severance pay",
    "type" : "story",
    "url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
  },
  {
    "by" : "nabla9",
    "descendants" : 12,
    "id" : 13172957,
    "kids" : [ 13173441, 13173547, 13173404, 13174070, 13173317, 13173287, 13173508 ],
    "score" : 83,
    "time" : 1481677998,
    "title" : "Thomas Schelling has died",
    "type" : "story",
    "url" : "https://www.washingtonpost.com/news/monkey-cage/wp/2016/12/13/thomas-schelling-has-died-his-ideas-shaped-the-cold-war-and-the-world/"
  }
];

render(<NewsList items = {items} />, document.getElementById('root'));