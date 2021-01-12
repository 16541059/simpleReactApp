import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Badge
} from 'reactstrap';
import "./Navbar.css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {/* useDispatch,*/ useSelector } from "react-redux";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const Cart = useSelector(state => Array.from(state.cartReducer));
 
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed-top" >
     
      <Navbar color="dark" light  expand="md">
       
        <Link className="ex btn" style={{color:"white"}}  to="/home"> <h5>Home</h5> </Link>
        <NavbarToggler  onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="ex btn"  style={{color:"white"}}  href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="ex btn"  style={{color:"white"}} href="https://github.com/reactstrap/reactstrap">
                GitHub</NavLink>
            </NavItem>
          
          </Nav>

           
            <Link className="btn btn-primary mr-2" to="/login"> 
              {  localStorage.getItem("myData") ? null:<FontAwesomeIcon icon={["fas","sign-in-alt"]}/>} { localStorage.getItem("myData") ? localStorage.getItem("myData"):`Giriş Yap `  }    </Link>
            

          <UncontrolledDropdown  className="pr-2" >
         
            <DropdownToggle caret>
  <FontAwesomeIcon  icon={['fas', 'cart-plus']} />        Sepetim <Badge>{Cart.length}</Badge>
              </DropdownToggle>
            <DropdownMenu style={{background:"darkgrey"}} right>
         <DropdownItem>
         <Link to="cart">Sepete Git</Link>
         </DropdownItem>
          
              {
                Cart.map(
                  cart => (<DropdownItem key={cart.books._id}>
                    {cart.books.content}
                    <Badge style={{ position: "absolute", right: "0px", }} color="info" >{cart.quantity}</Badge>
                  </DropdownItem>)

                )
              }
                
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="pr-2" >
            <DropdownToggle caret>
              <FontAwesomeIcon icon={['fas', 'envelope']} />   Mesajlar
              </DropdownToggle>
            <DropdownMenu style={{background:"darkgrey"}}  right>
              <DropdownItem>
                Option 1
                </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown className="pr-2" inNavbar>
            <DropdownToggle  caret>
            <FontAwesomeIcon   icon={['fas', 'user']} /> Profil  
              </DropdownToggle>
            <DropdownMenu  right>
            <DropdownItem>
            <NavbarText > <Link to="/profile"> <FontAwesomeIcon icon={['fas', 'user']} />
             Profili Düzenle  </Link>   </NavbarText>
                </DropdownItem>
              <DropdownItem>
              <NavbarText>  <Link to="/login" type="submit"  onClick={()=>localStorage.removeItem("myData")}>
                <FontAwesomeIcon icon={['fas', 'sign-out-alt']}  /> Çıkış </Link>   </NavbarText>
                </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapSatateToProps = state => {
  return {
    Cart: state.cartReducer,
 
  }
}


export default connect(mapSatateToProps)(Navi);
