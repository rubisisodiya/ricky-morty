import React, { Component } from 'react';
import fetchData from '../Helpers/Fetcher';
export class Episode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            episode: [],
            isLoaded: false
        }
    }
    
    componentDidMount() {
        fetchData(this.props.location.pathname.substring(1))
            .then(res => res.data)
            .then((data)=>this.setState({
                episode: data,
                isLoaded: true
        }))
    }
    render() {
        const { isLoaded, episode } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(
                <div className='fetchedEpisode'>
                    <a href='/'>back</a>
                    <div className='episodeWrapper'>
                        <p>{episode.name}</p>
                        <p>{episode.air_date}</p>
                        <p>{episode.episode}</p>
                    </div>
                </div>
                )
        }
    }
}

export default Episode;