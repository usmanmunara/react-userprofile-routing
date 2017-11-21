import React, {Component} from 'react';

import {Button} from 'react-bootstrap'

import {currentUser} from '../../Data/users.js';
import {Auth} from '../../Services/authentication';
import './login.css';



export class Login extends Component {

    userMatch(e){
        e.preventDefault();
        const isLoggedIn = Auth.login(this.refs.email.value, this.refs.pass.value);  
        if(!isLoggedIn){
            Auth.notify("error", 'Wrong email or Password');
        } else {
            Auth.notify("success", "Login Successful!");
            this.props.history.push("/dashboard");
            currentUser.push(isLoggedIn[0]);
            localStorage.setItem("userState",JSON.stringify({
                isLoggedIn: true,
            }))    
        }
    }

    render() {
        return (
            <div className="Login">
                <h2>Chae kay Dhabay mein Khushamdeed</h2>
                <h2>Bare meherbani Login Kerein</h2>
                <form onSubmit={(e) => this.userMatch(e)}>
                    <label className="col-form-label">
                        Email:
                    </label>
                    <input
                        className="form-control regInput" type="email" placeholder="Email" ref="email"/>
                    <br/>
                    <label className="col-form-label">
                        Password:
                    </label>
                    <input
                        className="form-control regInput" type="password" placeholder="Password" ref="pass"/>
                    <br/>
                    <Button type="submit" value="login">Submit</Button>
                    
                </form>
            </div>
        );
    }
}
