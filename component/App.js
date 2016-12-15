import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    console.log('init');
    this.state = {
      opacity: 1.0,
      fontSize: '12px'
    };
  }

  componentWillMount() {
    console.log('will');
  }

  componentDidMount() {
    console.log('did');
    const _this = this;
    setTimeout(() => {
      _this.setState({
        opacity: 0.5,
        fontSize: '20px',
      });
    }, 1000);
  }

  handleClick() {
    console.log(this.refs.tips);
    const tip = ReactDOM.findDOMNode(this.refs.tips);
    if (tip.style.display === "none") {
      tip.style.display = "inline";
    } else {
      tip.style.display = "none";
    }
    // console.log(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>点击</button>
        <span ref="tips">隐藏|显示</span>
      </div>
    );
  }
}