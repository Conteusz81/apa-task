import React from 'react';

const CardBody = ({ content }) => {
    return (
        <div className="p-2 flex items-center flex-grow">
            {content}
        </div>
    );
};

export default CardBody;