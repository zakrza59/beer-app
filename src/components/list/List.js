import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import './Table.css'

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
      <div className="Table-container">
        <table className="Table">
          <thead className="Table-head">
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Tagline</th>
            </tr>
          </thead>
          <tbody className="Table-body">
            {this.state.beers.map((beer) => (
            <tr key={beer.id}>
              <td>
                {beer.name}
              </td>
              <td><img src={beer.image_url}/></td>
              <td>"{beer.tagline}"</td>
            </tr>
            ))}
          </tbody>
        </table>  
      </div>
    );
  }
}

export default List;