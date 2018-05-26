import React from 'react';
import { API_URL } from '../../config';
import Loading from '../loading/Loading';
import { handleResponse } from '../../helpers';
import './Modal.css';

class Modal extends React.Component {
  constructor() {
    super();

    this.state = {
      beer: {},
      loading: false,
    };
  }

  componentDidMount() {
  const beerId = this.props.match.params.id;
  
  this.setState({loading: true});

  fetch(`${API_URL}/${beerId}`)
    .then(handleResponse)
    .then((beer) => {
      this.setState({
        loading: false,
        beer: beer[0]
      });
    })
}

  render() {
    const { loading, beer } = this.state;
    console.log(this.state);
    if (loading) {
      return <div className="loading-container"><Loading /></div>
    }

    return(
      <div className="Modal">
        <h1 className="Modal-heading">
          {beer.name}
        </h1>

        <div className="Modal-container">
          <div className="Modal-item">
          <span className="Modal-value">{beer.tagline}</span>
          </div>
          <div className="Modal-item">
            ABV <span className="Modal-value">{beer.abv}</span>
          </div>
          <div className="Modal-item">
            IBU <span className="Modal-value">{beer.ibu}</span>
          </div>
          <div className="Modal-item">
            <img src={beer.image_url} alt={beer.id} />
          </div>
          <div className="Modal-item">
            <span className="Modal-value">{beer.description}</span>
          </div>
          <div className="Modal-item">
            <span className="Modal-value">{beer.brewers_tips}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal