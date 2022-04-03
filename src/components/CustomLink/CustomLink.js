import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    const [hover, setHover] = useState(false);

    return (
        <>
            <Link
                style={{
                    marginLeft: "2rem",
                    marginRight: "2rem",
                    fontSize: "1.5em",
                    fontWeight: "500",
                    textDecoration: match ? "underline" : "none",
                    textDecorationColor: match ? "#DC3545" : "rgb(163, 162, 162)",
                    color: hover ? "#DC3545" : "white",
                    transition: "0.5s"
                }}
                to={to}
                {...props}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {children}
            </Link>
        </>
    );
}

export default CustomLink;