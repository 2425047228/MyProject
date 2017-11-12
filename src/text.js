import React, {Component} from 'react';

export default class Text extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.params);
    }
    
    render() {
        return (<div className='main-content'>text</div>);
    }
}