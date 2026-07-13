import React from 'react';

const pricingRows = [
    { service: 'Sofa', price: '$120 – $180' },
    { service: 'Sectional', price: '$180 – $260' },
    { service: 'Chair', price: '$40 – $70' },
    { service: 'Area Rug', price: '$40 – $90' },
    { service: 'Pet Hair Removal (Add-On)', price: '+$20 – $40' },
    { service: 'Heavy Stain Treatment (Add-On)', price: '+$20 – $50' }
];

const PriceList: React.FC = () => {
    return (
        <div className="price-list-page">
            <div className="page-intro pricing-hero">
                <p className="eyebrow">Simple, Transparent Pricing</p>
                <h1>Transparent Pricing - No Surprises</h1>
                <p>Clear, upfront pricing for upholstery and rug care in the RTP area.</p>
            </div>

            <div className="pricing-card">
                <table className="pricing-table">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Starting Price Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pricingRows.map((row) => (
                            <tr key={row.service}>
                                <td>{row.service}</td>
                                <td>{row.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pricing-note">
                <p>ⓘ Prices vary based on size, fabric type, and level of soiling. Contact us for a free custom quote tailored to your specific needs.</p>
            </div>
        </div>
    );
};

export default PriceList;