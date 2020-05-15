import React, { Component } from 'react';
import fetchData from '../Helpers/Fetcher';

export class EpisodesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            episodes: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetchData('episode')
            .then(res => res.data.results)
            .then((data)=>this.setState({
                episodes: data,
                isLoaded: true
            }))
    }

    render() {
        const { isLoaded, episodes } = this.state;
        console.log(episodes);
        if (!isLoaded) {
            return <div>Chill it's loading...</div>
        } else {
            return(
                <React.Fragment>
                    <div className='fetchedPages'>
                    {episodes.map(episode => (
                        <div key={episode.id}>
                            <p>{episode.name}</p>
                            <p>{episode.air_date}</p>
                            <p>{episode.episode}</p>
                            <hr/>
                        </div>
                        ))}
                        </div>
                
                </React.Fragment>
                );
        }
    }
}

export default EpisodesList;