import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? "#ea0b55" : "#262525", borderBottom:match? "2px solid #ea0b55":"0px"}}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}


export default CustomLink;