import React from "react";
import {Image} from "react-bootstrap";
import {connect} from "react-redux";
import {fetchCategories} from "../actions";


class Cat extends React.Component{
    componentDidMount(){
        this.props.fetchCategories();
    }
    render(){
        return(
            <div className="cat container text-center my-5">
                <h2>Get work done in over 1350 different categories</h2>
                <div className="row">
                    {
                        this.props.items.map((item,id)=>{
                            return(
                                <div key={id} className={item.class}>
                                    <Image src={item.link}/>
                                    <a href="/">{item.title}</a>
                                </div>
                            );
                        })
                    }
                
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        items:state.categories
    }
}
export default connect(mapStateToProps,{fetchCategories})(Cat);