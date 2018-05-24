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
      return <div>Loading...</div>
    }
    return (
      <div className="Table-container">
        <table className="Table">
          <thead className="Table-head">
            <tr>
              <th width="35%">Name</th>
              <th>Image</th>
              <th width="35%">Tagline</th>
            </tr>
          </thead>
          <tbody className="Table-body">
            {beers.map((beer) => (
            <tr key={beer.id}>
              <td>
                {beer.name}
              </td>
              <td><img src={beer.image_url} alt={beer.id} /></td>
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