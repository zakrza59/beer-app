import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';

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

    fetch(`${API_URL}?page=1&per_page=20`)
    .then(handleResponse)

    .then((data) => {
      console.log('Success', data);
      this.setState({ 
        beers: data, 
        loading: false 
      });
    });
    
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        {this.state.beers.map((beer) => (
          <div key={beer.id}>{beer.name}</div>
        ))}
      </div>
    );
  }
}

export default List;