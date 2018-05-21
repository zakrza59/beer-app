import React from 'react';
import { handleResponse } from '../../helpers';

class List extends React.Component {
  constructor() {
    super();
  
    this.state = {
      loading: false,
      beers: [],
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=20')
    .then(handleResponse)
    .then((data) => {
      this.setState({ 
        beers: data.beers, 
        loading: false 
      });
    });
    
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    return (
      <div>text</div>
    );
  }
}

export default List;