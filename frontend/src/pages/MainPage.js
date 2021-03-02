import React from 'react';
import Form from '../components/Form'

export default (props) => (
	<div className="row justify-content-center main-container" id="Page-container">
		<div className="col-12 col-md-10 col-lg-8">
			<div className="row justify-content-center">
				<div className="col-7 col-md-7 form-container">
				    <i class="fas fa-cut cut-icon fa-2x"></i>
				    <span class="url-shortener-headline">URL Shortener</span>
                    <Form />
				</div>
			</div>
		</div>
	</div>

)