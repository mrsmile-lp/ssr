import React from "react";
import MovieItem from './movieItem';

class Content extends React.Component {
    render() {
        return(
            <div className="content">
                <MovieItem/>
            </div>
        )
    };
}

export default Content;