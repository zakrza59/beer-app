import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import Loading from '../loading/Loading';
import Table from './Table.js';
import Pagination from '../pagination/Pagination'


class List extends React.Component {
  constructor() {
    super();
  
    this.state = {
      loading: false,
      beers: [],
      page: 1,
      totalPages: 12,
    };

    this.handlePaginationClick = this.handlePaginationClick.bind(this);
  }

  componentDidMount() {
    this.fetcher();
  }

  fetcher() {
    this.setState({ loading: true });

    const { page } = this.state;
    
    fetch(`${API_URL}?page=${page}&per_page=20`)
    .then(handleResponse)

    .then((data) => {
      console.log('Success', data);
      this.setState({ 
        beers: data, 
        loading: false 
      });
    });
  }

  handlePaginationClick(direction) {
    let nextPage = this.state.page;

    nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

    this.setState({ page: nextPage }, () => {
      this.fetcher();
    })
  }

  render() {

    const { loading, beers, page, totalPages } = this.state;

    if (loading) {
      return <div className="Loading-container"><Loading /></div>
    }
    return (
      <div>
        <Table beers={beers} />
        <Pagination 
        page={page}
        totalPages={totalPages}
        handlePaginationClick={this.handlePaginationClick}
        />
      </div>
    );
  }
}

export default List;