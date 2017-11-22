import React, {Component} from 'react';

import {Auth} from '../../Services/authentication';
import {Button} from 'react-bootstrap';

import './reset.css'


export class Reset extends Component {

    renderLogin(e){
        e.preventDefault();
        const emailCheck = Auth.emailCheck(this.refs.email.value) ;
        if (emailCheck){
            Auth.notify("error", "Invalid Email Address");
        } else {
            Auth.notify("success", "Reset successful! Check your email address");
            this.props.history.push("/");
        }
    }
  
    render() {
        return (
            <div className="Reset">
            <h2>Password Bhool Gaye Ho Kia?</h2>   
            <form onSubmit={(e) => this.renderLogin(e)}> 
                <input className="form-control resetInput" type="text" ref="email" placeholder="Enter your email address"/>
                <br/>
                <Button type="submit" value="Reset">Reset</Button>
            </form>   
            </div>
        );
    }
}
