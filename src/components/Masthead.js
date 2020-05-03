import React from "react";

class Masthead extends React.Component {
	render() {
		return (
				<div id="masthead" className="container-fluid text-white text-center">
					<div className="row">
						<div className="col-12 col-lg-9 mx-auto mb-5">
							<h1>Build a landing page for your business or project and generate more leads!</h1>
						</div>
						<div className="col-12 col-md-10 col-lg-9 mx-auto">
							<form>
								<div className="form-row">
									<div className="col-12 col-md-8 col-lg-9">
										<input
											className="form-control form-control-lg"
											type="email"
											placeholder="Enter your email..."
										/>
									</div>
									<div className="col-12 col-md-4 col-lg-3">
										<button className="btn btn-block btn-lg btn-primary">Sign Up!</button>
									</div>
								</div>
							</form>
						</div>
					</div>
			</div>
		)
	}
}

export default Masthead;