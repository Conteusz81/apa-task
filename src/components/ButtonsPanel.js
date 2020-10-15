import React from 'react';
import cx from "classnames";
import { HiOutlineDocumentAdd, HiCheckCircle } from "react-icons/hi"

const ButtonsPanel = ({ id, isActive }) => {
    const buttonsStyle = cx ("flex justify-evenly transition duration-300 ease-in-out transform", {
        "scale-100": isActive,
        "scale-0": !isActive
    });

    const handleAddButtonClick = e => {
        e.stopPropagation();
        alert(`ADD COMPONENT NR: ${id}`);
    };

    const handleCheckButtonClick = e => {
        e.stopPropagation();
        alert(`CHECK COMPONENT NR: ${id}`);
    }

    return (
        <div className={buttonsStyle}>
            <div
                className="py-1 flex-grow hover:bg-white"
                onClick={handleAddButtonClick}
            >
                <HiOutlineDocumentAdd className="mx-auto" />
            </div>
            <div
                className="py-1 flex-grow hover:bg-white"
                onClick={handleCheckButtonClick}
            >
                <HiCheckCircle className="mx-auto" />
            </div>
        </div>
    );
};

export default ButtonsPanel;