import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import HeaderSideBar from '../HeaderSidebar/HeaderSideBar';
import HeaderNav from '../HeaderNav/HeaderNav';
const Header = () => {
    return (
        <div>
            <Navbar variant="dark" expand="lg">
                <Container className="nav-container">
                    <>
                        <HeaderSideBar></HeaderSideBar>
                    </>
                    <>
                        <HeaderNav></HeaderNav>
                    </>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;