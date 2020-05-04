import React, { Component, Fragment } from 'react';

import Calendari from '../components/Calendari';

class home extends Component {
	render() {
		const margen = {
			marginTop: '50px'
		};
		return (
			<Fragment>
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-6 col-lg-6" style={margen}>
							<Calendari />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default home;
