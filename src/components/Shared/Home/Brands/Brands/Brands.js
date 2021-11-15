import React from 'react';
import { Row } from 'react-bootstrap';
import useBrands from '../../../../hooks/useBrands';
import Brand from '../Brand/Brand';
import image from "../../../../../images/Banner/brand banner.jpeg"
import './brands.css'

const Brands = () => {
    const { brands } = useBrands()
    return (
        <div>
            <div className="brand-heading">
                <img style={{ "width": "100%" }} src={image} alt="" />

                <h2>Our Top Brands </h2>
            </div>
            <Row sm={2} md={3} lg={5} className="g-4">
                {
                    brands.map(brand => <Brand brand={brand} key={brand.key}></Brand>)
                }
            </Row>
        </div>
    );
};

export default Brands;