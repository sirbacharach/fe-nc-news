import { useState } from "react";

const Collapsible = ({children, descriptor}) => {
const [isHidden, setIsHidden] = useState(false)

function toggleIsHidden() {
    setIsHidden(!isHidden)
}
return (
    <div>
        <button onClick={toggleIsHidden}></button>
        {isHidden ? null : chidren}
    </div>
)

};

export default Collapsible