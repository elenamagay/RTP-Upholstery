import React from 'react';

const pricingRows = [
    { service: 'Sofa', price: '$125 – $180' },
    { service: 'Sectional', price: '$180 – $260' },
    { service: 'Chair', price: '$40 – $70' },
    { service: 'Area Rug', price: '$60 – $220' },
    { service: 'Optional Add-On Treatments:', isHeader: true },
    { service: 'Pet Hair Removal (per seat)', price: '+$15' },
    { service: 'Heavy Stain Treatment', price: '$20+' },
    { service: 'Scotchgard Protection (per seat)', price: '+$15' },
    { service: 'Fast Drying (per seat)', price: '+$20' },
    { service: 'Fabric Pilling Removal (per seat)', price: '+$20' },
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
                            <tr key={row.service} className={row.isHeader ? 'table-section-header' : ''}>
                                {row.isHeader ? (
                                    <td colSpan={2}>{row.service}</td>
                                ) : (
                                    <>
                                        <td>{row.service}</td>
                                        <td className="price-column">{row.price}</td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pricing-note" spellCheck="false">
                <p><strong>Bundle & Save</strong></p>
                <p className="bundle-note">Refreshing more than one item? Bundle your Sofa or Sectional cleaning with an Area Rug or any of our add-on treatments to qualify for exclusive package pricing.                </p>
            </div>

            <div className="pricing-note">
                <p>ⓘ Prices vary based on size, fabric type, and level of soiling. Contact us for a free custom quote tailored to your specific needs.</p>
            </div>
        </div>
    );
};

export default PriceList;