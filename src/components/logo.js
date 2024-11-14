import React, { Component } from 'react'; 
import logo from '../assets/youtube-logo.png';

class Logo extends Component {
    render() {
        return (
            <div style={styles.logoContainer}>
                <img src={logo} alt="Logo" style={styles.logoImage} />
            </div>
        );
    }
}

const styles = {
    logoContainer: {
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1000,
    },
    logoImage: {
        width: '50px',
        height: '50px',
    }
};

export default Logo;
