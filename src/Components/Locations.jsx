import React, { Component } from 'react';
import fetchData from '../Helpers/Fetcher';


export class LocationsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetchData('location')
            .then(res => res.data.results)
            .then((data)=>this.setState({
                locations: data,
                isLoaded: true
            }))
    }

    render() {
        const { isLoaded, locations } = this.state;
        console.log(locations);
        if (!isLoaded) {
            return <div>Chill it's loading...</div>
        } else {
            return(
                <React.Fragment>
                    <div className='fetchedPages'>
                    {locations.map(location => (
                        <div key={location.id}>
                            <p>{location.name}</p>
                            <p>{location.type}</p>
                            <p>{location.dimension}</p>
                            <hr/>
                        </div>
                        ))}
                    </div>
                
                </React.Fragment>
                );
        }
    }
}

export default LocationsList;