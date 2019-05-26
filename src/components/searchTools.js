import React from "react";
import {connect} from 'react-redux';
import {makeSearch} from './actions/makeSearch';


class SearchTools extends React.Component {
    state = {
        query: '',
        filter: 'title',
        endPoint: 'https://react-cdp-api.herokuapp.com/movies',
        searchUrl: 'https://react-cdp-api.herokuapp.com/movies',
        content: []
    };    

    updateQuery = ({target: {value}}) => {
        this.setState({
            query: value
        })
    }

    queryFilter = ({target : {value}}) => {
        this.setState({
            filter: value
        })
    }

        makeSearchQuery = () => {
        const searchUrl = this.state.endPoint + '?search=' + this.state.query + '&searchBy=' + this.state.filter + '&limit=50';
        this.getMovies(searchUrl);
    }

    async getMovies(endpoint) {
        const movies = await fetch(endpoint);
        const jsonMovies = await movies.json();
        await this.setState({
            content: jsonMovies.data
        });
        const {content} = this.state;
        const {makeSearch} = this.props;
        makeSearch(content);
    }

    async componentDidMount() {
        await this.getMovies(this.state.searchUrl);
        const {content} = this.state;
        const {makeSearch} = this.props;
        makeSearch(content);
    }

    hydrate() {
        const {query} = this.state;
        return(
            <div className="search-tools">
                <input type="text" placeholder="search" onChange={this.updateQuery} value={query}></input>
                <div className="search-by-label">Search by</div>
                <label className="radio">
                    <input type="radio" className="search-by-button" name="filter-type" value="title" onChange={this.queryFilter}></input>
                    <div className="radio__text">Title</div>
                </label>
                <label className="radio">
                    <input type="radio" className="search-by-button" name="filter-type" value="genres" onChange={this.queryFilter}></input>
                    <div className="radio__text">Genre</div>
                </label>                
                <div className="search-button button" onClick={this.makeSearchQuery}>Search</div>
            </div>
        );
    }
}

export default connect(state => ({
    content: state.content
}), {makeSearch}) (SearchTools);