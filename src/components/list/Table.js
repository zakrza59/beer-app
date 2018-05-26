import React from 'react';
import './Table.css'

const Table = (props) => {
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
            {props.beers.map((beer) => (
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
  )
}

export default Table