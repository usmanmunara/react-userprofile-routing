import React, {Component} from 'react';

import './reset.css'

export class Reset extends Component {

    renderLogin(e){
        e.preventDefault();
        this.props.reset();
    }
  
    render() {
        return (
            <div className="Reset">
            <h2>Password Bhool Gaye Ho Kia?</h2>   
            <form onSubmit={(e) => this.renderLogin(e)}> 
                <input className="form-control resetInput" type="email" placeholder="Enter your email address"/>
                <br/>
                <input className="form-control resetSubmit" type="submit" value="Reset"/>   
            </form>   
            </div>
        );
    }
}
