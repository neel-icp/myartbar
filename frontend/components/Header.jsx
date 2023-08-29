import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { ConnectButton } from "@connect2ic/react"
import logo from '/logo.svg'; // Replace this with your logo path

const Header = () => {
    const buttonStyles = {
        userSelect: 'none',
        zIndex: 5,
        fontSize: '16px',
        textDecoration: 'none', // to remove the default underline from the link
        color: 'WHITE', // adjust the color as you wish
        backgroundColor: 'BLACK', // color of the button
        borderRadius: '50px', // makes the button pill-shaped
        padding: '10px 30px', // adjusts the size of the button
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // adds a small shadow
        fontFamily: "'Helvetica", // font family
        fontWeight: 'normal', // add this line
        textTransform: 'uppercase'
        
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <div>
                <img
                    alt="Logo"
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                />
                {''}
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: 'transparent', borderColor: 'transparent', boxShadow: 'none' }}>
                    <i className="fas fa-ellipsis-v" style={{ color: 'black' }}></i> {/* Here is the three dots icon */}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#ICPUZZLE">ICPUZZLE</Dropdown.Item>
                        <Dropdown.Item href="#PUZZLE">PUZZLE</Dropdown.Item>
                        <Dropdown.Item href="#THE EGGs COLLECTION">THE EGGs COLLECTION</Dropdown.Item>
                        <Dropdown.Item href="#OFFSPRINGS COLLECTION">OFFSPRINGS COLLECTION</Dropdown.Item>
                        <Dropdown.Item href="#ABOUT ME">ABOUT ME</Dropdown.Item>
                        <Dropdown.Item href="#CONTACT">CONTACT</Dropdown.Item>
                        <Dropdown.Item href="#ARCADE(Coming Soon)">ARCADE(Coming Soon)</Dropdown.Item>
                        <Dropdown.Item href="#SWAP(Coming Soon)">SWAP(Coming Soon)</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <ConnectButton 
                style={buttonStyles} 
                onConnect={() => console.log("Connected!")}
                onDisconnect={() => console.log("Disconnected!")} 
            />
            </div>
        </div>
    );
};

export default Header;
