// import React from 'react'
// import {Navbar,Container,Nav} from 'react-bootstrap';
// import logo from './Images/logo.jpeg';
// const Header = () => {
//   return (
//     <div>
//       <h1 style={{textAlign:"center"}}>ONLINE ART GALLERY</h1>
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home" style={{fontWeight:"bold",fontFamily:"cursive"}}><img src={logo} style={{height:"40px"}}/></Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/home" style={{fontWeight:"bold",fontSize:"120%",marginLeft:"15%"}}>Home</Nav.Link>
//             <Nav.Link href="/about"style={{fontWeight:"bold",fontSize:"120%",marginLeft:"15%"}}>About</Nav.Link>
//             <Nav.Link href="/product"style={{fontWeight:"bold",fontSize:"120%",marginLeft:"15%"}}>Product</Nav.Link>
//             <Nav.Link href="/profile"style={{fontWeight:"bold",fontSize:"120%",marginLeft:"15%"}}>Profile</Nav.Link>
//             <Nav.Link href="/feedback"style={{fontWeight:"bold",fontSize:"120%",marginLeft:"15%"}}>Feedback</Nav.Link>
//             <Nav.Link href="/cart"style={{fontWeight:"bold",fontSize:"120%",marginLeft:"15%"}}>Cart</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </div>
//   )
// }

// export default Header




import React from "react";
import { Redirect } from "react-router-dom";
import {Nav,Navbar,Container} from 'react-bootstrap'
import SweetAlert from "react-bootstrap-sweetalert";
import logo from'./Images/logo.jpeg'



const _ = require("lodash");


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.name,
      board: [],
      boardItem: "",
      toggle: false,
      submit: true,
      logout: false,
      loggedInUserObj: {},
    };
  }

  onLogoutYes = () => {
    this.setState({ submit: false });
    this.setState({ toggle: true });
    const userObj = JSON.parse(
      localStorage.getItem(_.get(this.state.loggedInUserObj, "userName", ""))
    );
    userObj.isUserLoggedIn = false;
    localStorage.setItem(
      _.get(this.state.loggedInUserObj, "userName", ""),
      JSON.stringify(userObj)
    );
  };

  onLogout = () => {
    this.setState({
      logout: !this.state.logout,
    });
  };

  componentDidMount() {
    const loggedInUserName = _.get(this.props.location, "state.userName", {});
    this.setState({
      loggedInUserObj: JSON.parse(localStorage.getItem(loggedInUserName)),
    });
  }

  render() {
    const localUname = `${_.get(
      this.state.loggedInUserObj,
      "firstName",
      ""
    )} ${_.get(this.state.loggedInUserObj, "lastName", "")}`;

    return (
      <div>
          <h1 style={{textAlign:"center"}}>ONLINE ART GALLERY</h1>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight:"bold",fontFamily:"cursive"}}><img src={logo} style={{height:"40px"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link href="/home" style={{color:"gray",fontWeight:"bold",fontSize:"120%"}}>Home</Nav.Link>
            <Nav.Link href="/about"style={{color:"gray",fontWeight:"bold",fontSize:"120%"}}>About</Nav.Link>
            <Nav.Link href="/product"style={{color:"gray",fontWeight:"bold",fontSize:"120%"}}>Product</Nav.Link>
            <Nav.Link href="/profile"style={{color:"gray",fontWeight:"bold",fontSize:"120%"}}>Profile</Nav.Link>
            <Nav.Link href="/feedback"style={{color:"gray",fontWeight:"bold",fontSize:"120%"}}>Feedback</Nav.Link>
            <Nav.Link href="/cart"style={{color:"gray",fontWeight:"bold",fontSize:"120%"}}>Cart</Nav.Link>
            
            {/* <button
              // className="navbar-toggler"
              // type="button"
              // data-toggle="collapse"
              // data-target="#navbarResponsive"
              // aria-controls="navbarResponsive"
              // aria-expanded="false"
              // aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse" id="navbarResponsive"> */}
              <ul className="navbar-nav ml-auto">
                <li
                  className="nav-item active text-left"
                  onClick={this.onLogout}
                >
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.onLogout}
                  >
                    LOGOUT
                  </button>
                </li>
              </ul>
            {/* </div> */}
            </Navbar.Collapse>
         </Container>
         </Navbar>
        {/* <div className="container">
          <h1 className="mt-4">HELLO {localUname}</h1>
          <p>Welcome to ART GALLERY</p>
        </div> */}
        {!this.state.submit ? <Redirect to={`/`} /> : null}
        {this.state.logout ? (
          <SweetAlert
            warning
            showCancel
            confirmBtnText="Yes"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            onConfirm={this.onLogoutYes}
            onCancel={this.onLogout}
            focusCancelBtn
          ></SweetAlert>
        ) : (
          ""
        )}

    </div>
    );
}
}
export default Header;