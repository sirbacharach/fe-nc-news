import { useState } from "react";

const Collapsible = ({children, descriptor}) => {
const [isHidden, setIsHidden] = useState(false)

function toggleIsHidden() {
    setIsHidden(!isHidden)
}
return (
    <div>
        <button id="collapsible-button" onClick={toggleIsHidden}>
        {isHidden? "Show" : "Hide"} {descriptor}
        </button>
        {isHidden ? null : children}
    </div>
)

};

export default Collapsible