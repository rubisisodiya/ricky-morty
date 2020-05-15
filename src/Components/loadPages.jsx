import React, { Component } from 'react';

export class LoadMore extends Component {
    render () {
        return (
            <button onClick={()=>this._getData(this.state.nextpage)}>Load More...</button>
        )
    }
} 

export default LoadMore;