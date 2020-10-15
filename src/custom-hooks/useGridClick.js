import { useEffect, useState } from "react";

const useGridClick = (ref) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = e => {
        if (
            (ref.current && !ref.current.contains(e.target)) ||
            (isActive && ref.current.contains(e.target))) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });

    return { isActive };
};

export default useGridClick;