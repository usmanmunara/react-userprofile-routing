import React, {Component} from 'react';

import {Button} from 'react-bootstrap'

import './register.css'
import {Auth} from '../../Services/authentication';

export class Register extends Component {

    register(event) {
        event.preventDefault();
        const confirmPass = Auth.passwordCheck(this.refs.pass.value, this.refs.confirmpass.value);
        if (confirmPass) {
            Auth.notify("error", "Password does not match! Enter correct password");
            Auth.notify("warn", "Password length must be greater than 6");
        } else {
                    Auth.notify("success", "Registration confirmed");
                    Auth.addUser(this.refs.email.value, this.refs.pass.value);
                    this
                        .props
                        .history
                        .push("/");
        }
    }

    render() {
        return (
            <div className="Register">
                <h2>Register Kerein</h2>
                <form className="form-group" onSubmit={(e) => this.register(e)}>

                    <label className="col-form-label">
                        Email:
                    </label>
                    <input
                        className="form-control regInput"
                        type="email"
                        placeholder="email"
                        ref="email"/>
                    <br/>
                    <label className="col-form-label">
                        Password:
                    </label>
                    <input
                        className="form-control regInput"
                        type="password"
                        placeholder="Password"
                        ref="pass"/>
                    <br/>
                    <label className="col-form-label">
                        Confirm Password:
                    </label>
                    <input
                        className="form-control regInput"
                        type="password"
                        placeholder="Confirm Password"
                        ref="confirmpass"/>
                    <br/>
                    <Button type="submit" value="submit">Register</Button>
                </form>

            </div>
        );
    }
}
