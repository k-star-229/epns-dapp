// import { useMoralisCloudFunction } from "react-moralis";
// import { Moralis } from 'moralis';
// import { useEffect } from 'react';
// import ABI from '../contracts/BCProtocol.json';
// import { CONTRACT_ADDRESS } from '../config';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Connect from "../components/connect";

const Header = () => {

    // let options = {
    //     chainId: "80001",
    //     address: CONTRACT_ADDRESS,
    //     topic: "SendNotification(address, address, bytes, address, timestamp)",
    //     abi: ABI,
    //     limit: 500000,
    //     tableName: "UniNotificationSent",
    //     sync_historical: false,
    // };

    // const { fetch } = useMoralisCloudFunction(
    //     "watchContractEvent",
    //     options
    //     { useMasterKey: true }
    // );

    // const getEvents = () => {
    //     fetch({
    //         onSuccess: (data) => console.log(data),
    //     });
    // };

    return (
        <>
            <header>
                {/* <button onClick={getEvents}>Make Cloud Call</button> */}
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Communication" id="notice">
                                    <NavDropdown.Item href="/notice">Inbox</NavDropdown.Item>
                                    {/* <NavDropdown.Divider /> */}
                                    <NavDropdown.Item href="/sendnotice">Send Notice</NavDropdown.Item>                                    
                                </NavDropdown>
                                <NavDropdown title="Channels" id="channel">
                                    <NavDropdown.Item href="/channels/mine">My Channel</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/channels/all">Channels</NavDropdown.Item>
                                    <NavDropdown.Item href="/channels/create">Create Channel</NavDropdown.Item>
                                </NavDropdown>
                                {/* <Nav.Link href="/events">Events</Nav.Link> */}
                            </Nav>
                            <Nav>
                                <Connect />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header;