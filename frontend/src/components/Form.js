import React, { Component } from "react";

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            unique_url: null,
            original_url: null
        }
    }

    handleLongURLChange = (event) => {
        this.setState({original_url: event.target.value});
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
                    unique_url: json['link']
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
                        className="form-control"
                        type="text"
                        aria-label="original_url"
                        name="original_url"
                        onChange={this.handleLongURLChange}
                        placeholder="Type url"
                        required/>
                </div>
                <div className="alert-success result-link" role="alert">
                    {this.state.unique_url}
                </div>
                <button title="submitButton" type="submit" className="btn btn-primary">Short Url</button>
            </form>
	    )
    }
}