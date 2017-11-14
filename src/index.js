import React, {Component} from 'react';
export default class Index extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.params);
    }
    
    render() {
        return (
            <div className='main-content'>index</div>
        );
    }
}