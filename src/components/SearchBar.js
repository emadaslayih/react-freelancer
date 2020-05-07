import React from 'react';


class SearchBar extends React.Component{
    state={ term: ""  };
    onSubmit= (event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="col-12 col-md-10 col-lg-9 mx-auto">
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="col-12 col-md-8 col-lg-9">
                            <input
                                className="form-control form-control-lg mb-2"
                                type="email"
                                placeholder="Enter your email..."
                                value={this.state.term}
                                onChange={ e =>this.setState({term: e.target.value})} />
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <button onClick={this.onSubmit} className="btn btn-block btn-lg btn-primary">Sign Up!</button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default SearchBar;