import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';
// import { ConnectButton } from "@connect2ic/react" // Commented out the import
import logo from '/logo.svg'; // Replace this with your logo path

const Header = () => {
    const buttonStyles = {
        userSelect: 'none',
        zIndex: 5,
        fontSize: '16px',
        textDecoration: 'none', // to remove the default underline from the link
        color: 'BLACK', // adjust the color as you wish
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
                <Link to="HOME" smooth={true} duration={500}>
                    <img
                        alt="Logo"
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: 'transparent', borderColor: 'transparent', boxShadow: 'none' }}>
                        <i className="fas fa-ellipsis-v" style={{ color: 'black' }}></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="ICPUZZLE" smooth={true} duration={500}>ICPUZZLE</Dropdown.Item>
                        <Dropdown.Item as={Link} to="PUZZLEGENZ" smooth={true} duration={500}>PUZZLE</Dropdown.Item>
                        <Dropdown.Item as={Link} to="THEEGGsCOLLECTION" smooth={true} duration={500}>THE EGGs</Dropdown.Item>
                        <Dropdown.Item as={Link} to="OFFSPRINGS" smooth={true} duration={500}>OFFSPRINGS</Dropdown.Item>
                        {/* ... other dropdown items ... */}
                    </Dropdown.Menu>
                </Dropdown>
                
                {/* Commented out the ConnectButton */}
                {/* 
                <ConnectButton 
                    style={buttonStyles} 
                    onConnect={() => console.log("Connected!")}
                    onDisconnect={() => console.log("Disconnected!")} 
                />
                */}
            </div>
        </div>
    );
};

export default Header;
