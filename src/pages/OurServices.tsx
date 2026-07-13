import React from 'react';

const services = [
    {
        icon: '🛋️',
        title: 'Upholstery Cleaning',
        description: 'Deep clean sofas, sectionals, loveseats, and chairs. Removes built-up dirt, allergens, and odors — leaving your furniture looking and smelling fresh.'
    },
    {
        icon: '🛡️',
        title: 'Upholstery Protection',
        description: 'Keep your furniture looking clean for longer. Our specialized fabric protectant creates an invisible barrier that resists spills, prevents deep stains, and blocks daily wear and tear.'
    },
    {
        icon: '🧹',
        title: 'Rug Cleaning',
        description: 'Professional cleaning for area rugs of all sizes and materials. Gentle yet thorough methods that restore color, texture, and cleanliness.'
    },
    {
        icon: '🐾',
        title: 'Pet Hair Removal',
        description: 'Specialized treatment to lift and remove embedded pet hair from furniture. Ideal for homes with cats, dogs, or other furry family members.'
    },
    {
        icon: '🔑',
        title: 'Move-Out Cleaning',
        description: 'Thorough upholstery and rug cleaning for renters and property managers preparing a unit for turnover. Help protect your deposit and impress landlords.'
    },
    {
        icon: '🧪',
        title: 'Heavy Stain Treatment',
        description: 'Targeted stain removal for tough spots including food, wine, ink, and more. Advanced treatment techniques for stubborn or set-in stains.'
    },
    {
        icon: '🧼',
        title: 'Carpet Cleaning',
        description: 'Deep, restorative cleaning for wall-to-wall carpeting. We use powerful hot water extraction to lift ground-in dirt, eliminate traffic-lane graying, and refresh high-traffic areas.'
    },
    {
        icon: '⚡',
        title: 'Super Fast Drying',
        description: 'No more waiting days for your fabrics to dry. We utilize specialized high-velocity air movers and advanced extraction techniques to significantly cut down drying times, getting your home back to normal in a flash.'
    }
];

const OurServices: React.FC = () => {
    return (
        <div className="our-services-page">
            <div className="page-intro pricing-hero">
                <p className="eyebrow">Professional Fabric Care</p>
                <h1>Our Services</h1>
                <p>Reliable, local upholstery and rug care designed to refresh your space and protect your investment.</p>
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <div className="service-card" key={service.title}>
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;