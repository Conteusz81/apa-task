import React from 'react';
import cx from "classnames";
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';
import { GrStatusGoodSmall } from "react-icons/gr"

const StatusTooltip = ({ status, color }) => {
    return <span className={color}>Status: {status}</span>
}

const CardTitle = ({ id, status }) => {
    const componentStatus = cx({
        "text-green-600": status === "ok",
        "text-yellow-600": status === "warning",
        "text-red-600": status === "error",
    });

    return (
        <div className="flex justify-between items-center p-2 shadow bg-indigo-200">
            <span className="font-bold">Component nr {id}</span>
             <Tooltip html={<StatusTooltip status={status} color={componentStatus} />} >
                 <GrStatusGoodSmall size={20} className={componentStatus}/>
             </Tooltip>
        </div>
    );
};

export default CardTitle;