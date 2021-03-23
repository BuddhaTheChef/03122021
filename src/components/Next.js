import React from "react";
import {Link} from 'react-router-dom';

const NextPage = () => {
    return (
        <div>
            <h3>Welcome to the Next page</h3>
            <Link to="/"> Show Main Page</Link>
        </div>
    )
}

export default NextPage;