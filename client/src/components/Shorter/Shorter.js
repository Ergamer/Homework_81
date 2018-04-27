import React, {Component} from 'react';
import './Shorter.css';
import {fetchShortLink} from "../../store/actions";
import {connect} from "react-redux";


class Shorter extends Component {


    state = {
      originalUrl: ''
    };

    saveLinksHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    };

    render() {
        return (
            <div className="Shorter">
                <h1>Shorten your link!</h1>
                <div className="EnterLink">
                    <input type="text"
                           placeholder="Enter your link"
                           onChange={this.saveLinksHandler}
                           value={this.state.originalUrl}
                           name="originalUrl"
                    />
                </div>
                <button onClick={() => this.props.fetchShortLink(this.state)}>Shorten!</button>
            </div>
        );
    }
}



const mapDispatchToProps = dispatch => {
    return {
        fetchShortLink: (data) => dispatch(fetchShortLink(data)),

    }
};

export default connect (null, mapDispatchToProps)(Shorter);

