import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {ToastContainer} from 'react-toastify';
import {Button, ButtonToolbar, Navbar, Nav} from 'react-bootstrap';


import {Auth} from '../../Services/authentication';
import './App.css';

export class App extends Component {

  logout() {
    Auth.logout();
    Auth.notify("success", "Logout Succesful");
    this
      .props
      .history
      .push("/");
  }

  render() {
  
    return (

      <div className="App">
        <Navbar>
          <Nav pullLeft>
            <p id="desi-crav">DesiCrav</p>
          </Nav>
          <Nav pullRight>

            <div className="nav-buttons">

              <ButtonToolbar>
                {localStorage.userState
                  ? JSON
                    .parse(localStorage.getItem("userState"))
                    .isLoggedIn
                    ? <div className="dash-button">
                        <Button className="button-logout" onClick={() => this.logout()}>
                          Logout
                        </Button>
                      </div>
                    : <div>
                        <Link to={"/register"} className="button-seperate">
                          <Button>
                            Register
                          </Button>
                        </Link>

                        <Link to={"/reset"} className="button-seperate">
                          <Button>
                            Reset
                          </Button>
                        </Link>

                        <Link to={"/"} className="button-seperate">
                          <Button>
                            Login
                          </Button>
                        </Link>

                      </div>
                  : <div>
                    <Link to={"/register"} className="button-seperate">
                      <Button>
                        Register
                      </Button>
                    </Link>

                    <Link to={"/reset"} className="button-seperate">
                      <Button>
                        Reset
                      </Button>
                    </Link>

                    <Link to={"/"} className="button-seperate">
                      <Button>
                        Login
                      </Button>
                    </Link>

                  </div>
}
              </ButtonToolbar>
            </div>
          </Nav>
        </Navbar>
        < ToastContainer
        autoClose={2000}/>
      </div>

    );
  }
}


