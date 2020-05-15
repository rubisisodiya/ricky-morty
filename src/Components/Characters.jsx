import React, { Component } from 'react';
import { ListEpisodes } from './listEpisodes';
import fetchData from '../Helpers/Fetcher';


export class CharactersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextpage: 0,
            characters: [],
            isLoaded: false
        }
    }

    _getData(param) {
        fetchData('character', param)
            .then(res => res.data)
            .then((data)=>this.setState(() => ({
                nextpage: data.info.next.slice(data.info.next.lastIndexOf('/') + 1),
                characters: this.state.characters.concat(data.results),
                isLoaded: true
        })))
    }

    componentDidMount() {
        this._getData()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { isLoaded, characters } = this.state;
        console.log(this.state);
        if (!isLoaded) {
            return <div>It's loading...</div>
        } else {
            return(
                <div className='characterList'>
                    <ul>
                    {characters.map(character => (
                        <li key={character.id}>
                            <img src={character.image} alt=''/>
                            <p>{character.name}</p>
                            <p>Status: <span>{character.status}</span></p>
                            <p>Species: <span>{character.species}</span></p>
                            <p>Location: <span>{character.location.name}</span></p>
                            <h4>Last Episode:</h4>
                            <ListEpisodes list={character.episode.slice(-1)}/>
                        </li>
                        ))}
                        </ul>
                    <button onClick={()=>this._getData(this.state.nextpage)}>Load More...</button>
                </div>
                );
        }
    }
}

export default CharactersList;