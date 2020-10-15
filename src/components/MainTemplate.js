import React from 'react';

const MainTemplate = ({ children }) => {
    return (
        <div className="p-10 grid main-grid gap-4">
            {children}
        </div>
    );
};

export default MainTemplate;