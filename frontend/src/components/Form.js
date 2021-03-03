import React, { Component } from "react";

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            unique_url: null,
            original_url: null,
            show_success_message: false
        }
    }

    handleLongURLChange = (event) => {
        this.setState({
        original_url: event.target.value,
        })
        this.setState({
        button_state: event.target.value
        })
    }

    handleSubmit = (event) => {
        const requestPayload = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"original_url": this.state.original_url})
        };

        fetch("http://127.0.0.1:8000/api/urlshortener/", requestPayload)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    unique_url: json['link'],
                });
            }
        );

        event.preventDefault();
    }

render() {
	return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group mb-4">
                    <label htmlFor="original_url">Type your url:</label>
                    <input
                        value={this.state.original_url || ''}
                        className="form-control"
                        type="text"
                        aria-label="original_url"
                        name="original_url"
                        onChange={this.handleLongURLChange}
                        placeholder="Type url"
                        required/>
                </div>
                /* Render the message after the async call */
                <div className="alert-success result-link" role="alert">
                   { this.state && this.state.unique_url &&
                       <div className="SuccessMessage">Shorten URL: {this.state.unique_url}</div>
                   }
                </div>
                /* Disable the button until the input has some value */
                <button disabled={!this.state.button_state} title="submitButton" type="submit" className="btn btn-primary">Short Url</button>
            </form>
	    )
    }
}