import React from 'react';
import FooterSponsors from './FooterSponsors';

const AppFooter = (): JSX.Element => {
    
    return (
        <div style={{backgroundColor: '#023874', position: "absolute", bottom: "0",
         width: "100%"}}>
            <h1>
                Footer
            </h1>
            <p>Sponsorer og samarbeidspartnere:</p>
            <FooterSponsors/>
        </div>
    );
};

export default AppFooter;
