import React from "react";
import queries from '../components/reducers/queries';
import {connect} from 'react-redux';

class MovieItem extends React.Component {
    constructor() {
        super();
        this.state = {
            url: 'https://reactjs-cdp.herokuapp.com/movies',
            content: []
        };
    };

    shouldComponentUpdate() {
        return true;
    }

    render() {
        const {content} = this.props;

        return(
            content.map(item => {
                return (
                    <div className="movie-item" key={item.id}>
                    <a href={'film/' + item.id}>
                        <img className="movie-poster" src={item.poster_path}/>
                        <div className="movie-label">
                            <div className="title">{item.title}</div>
                            <div>{item.release_date.substring(0,4)}</div>
                        </div>
                        <div className="movie-genre">{item.genres.map(genre => {
                            return genre + ' ';
                        })}</div>
                        </a>
                    </div>
                )
            })           
        )
    };
}

export default connect(state =>({
    content: state.queries
}))(MovieItem);