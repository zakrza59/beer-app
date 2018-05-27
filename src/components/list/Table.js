import React from 'react';
import { withRouter } from 'react-router-dom';
import './Table.css'

const Table = (props) => {
  const { beers, history } = props;

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
            <tr 
              key={beer.id}
              onClick={() => history.push(`/beer/${beer.id}`)}
            >
              <td><b>{beer.name}</b></td>
              <td><img src={beer.image_url} alt={beer.id} /></td>
              <td><i>"{beer.tagline}"</i></td>
            </tr>
            ))}
          </tbody>
        </table>  
      </div>
  )
}

export default withRouter(Table);