import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class ListEpisodes extends Component {

    render() {
        return(
            <React.Fragment>
                {
                    this.props.list.map( episodeurl => (
                        <Link to={'episode/' + episodeurl.slice(episodeurl.lastIndexOf('/')+1)}>Episode {episodeurl.slice(episodeurl.lastIndexOf('/')+1)}</Link>
                    ))
                }
            </React.Fragment>
        );
    }
}

export default ListEpisodes;