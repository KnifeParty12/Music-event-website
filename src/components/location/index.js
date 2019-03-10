import React from 'react';

const Location = () => {
    return (
        <div className={'location_wrapper'}>


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19887.82209106872!2d-0.14732483726038245!3d51.45856474005106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x731c695d54661098!2sClapham+Common!5e0!3m2!1sen!2sin!4v1552222870414"

                width="100%"
                height="500"
                frameBorder="0"
                allowFullScreen> </iframe>

            <div className={'location_tag'}>
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;
