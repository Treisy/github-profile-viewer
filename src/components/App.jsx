import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'Treisy',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }
    render(){
        return(
            <div>
                {this.props.clientSecret}
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};
App.defaultProps = {
    clientId: '405d5ee345fb4b51a783',
    clientSecret: '1165ff1876b2b53fd40055a37cea51a1d02479ab'
}


export default App