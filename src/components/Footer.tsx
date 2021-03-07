import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { Container } from '../styles/components/Footer';

const Footer = () => {
    return (
        <Container>
            <p>Developed by &lt;Maycon/&gt;</p>
            <div>
                <FiGithub />
                <FiLinkedin />
            </div>
        </Container>
    );
};

export default Footer;
