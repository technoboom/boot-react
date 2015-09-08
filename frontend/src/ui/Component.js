import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchResource from '../actions/fetchResource';

@connect(state => ({
  items: state.simple.items
}))
class MyComponent extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    items: React.PropTypes.object.isRequired
  };

  fetch() {
    this.props.dispatch(fetchResource());
  }

  render() {
    var list = this.props.items.map((item) => {
      return (<li>{item}</li>)
    });

    return (
      <div>
        <h2>Data:</h2>
        <ul>
          {{list}}
        </ul>
        <button onClick={this.fetch.bind(this)}>
          Fetch
        </button>
      </div>
    );
  }
}

export default MyComponent;
