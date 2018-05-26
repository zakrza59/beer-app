import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../loading/Loading.js';
import Table from './Table.js'


class List extends React.Component {
  constructor() {
    super();
  
    this.state = {
      loading: false,
      beers: [],
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

    const { loading, beers } = this.state;

    if (loading) {
      return <div className="Loading-container"><Loading /></div>
    }
    return (
      <Table beers={beers} />
    );
  }
}

export default List;