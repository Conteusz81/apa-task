import React, { useRef } from 'react';
import cx from "classnames";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import ButtonsPanel from "./ButtonsPanel";
import useGridClick from "../custom-hooks/useGridClick"

const Card = ({ id, content, status }) => {
    const ref = useRef();
    const { isActive } = useGridClick(ref);

    const cardStyle = cx("flex flex-col rounded shadow cursor-pointer transition duration-300 ease-in", {
        "transform bg-gray-200 scale-105": isActive,
        "transform scale-100": !isActive,
    });


    return (
        <div ref={ref} className={cardStyle}>
            <CardTitle id={id} status={status} />
            <CardBody content={content} />
            <ButtonsPanel id={id} isActive={isActive} />
        </div>
    );
};

export default Card;