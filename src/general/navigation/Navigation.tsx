// @flow
import * as React from 'react';
import {Link} from "react-router-dom";

type Props = {

};
export const Navigation = () => {
    return (
        <div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/cart"}>Cart</Link></li>
                <li><Link to={"/login"}>Log in</Link></li>

            </ul>
        </div>
    );
};
