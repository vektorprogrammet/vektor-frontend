import React from "react"

/* The TypeScript way: defining interface (shape of data object) for props */
interface routedComponentProps {
    // the questionmark here means that showText is optional, and is allowed to be undefined.
    showText?: string;
}

const RoutedComponent: React.FC<routedComponentProps> = (props) => {
    return (
        <div>
            {/* if props.showtext is defined, show it. otherwise, show "no props"*/}
            {props.showText ? props.showText : "No props"}
        </div>
    )
}

export default RoutedComponent