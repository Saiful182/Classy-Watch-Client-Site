import React from 'react';
import FooterAddress from '../FooterAddress/FooterAddress';
import FooterButtom from '../FooterButtom/FooterButtom';
import './footercontaine.css'
const FooterContainer = () => {
    return (
        <div className="total-footer">
            <div className="footer-container">
                <FooterAddress></FooterAddress>
            </div>
            <FooterButtom></FooterButtom>
        </div>
    );
};

export default FooterContainer;