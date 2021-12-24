import React from "react";

import './Nav.css';


const NavText = (props) => {
    if (props.x === "1") {
        return (
            <div className="txt-com-container">
                <div className="txt-title"> {props.title} </div>
                <div className="txt-sub-1"> {props.sub} </div>
            </div>
        );
    } else {
        return (
            <div className="txt-com-container">
                <div className="txt-title"> {props.title} </div>
                <div className="txt-sub"> {props.sub} </div>
            </div>
        );
    }
}

const Nav = () => {
    return (
        <nav className="Nav">
            <div className="Nav-nav">
                {/* Part #1 */}
                <div className="Nav-first-txt">
                    <h3 className="Nav-first-txt-h3">BTC/BUSD</h3>
                    <a href="/#"><p className="Nav-bit-txt">Bitcoin</p></a>
                </div>

                {/* Part #2 */}

                <div className="Nav-second-txt">
                    <div className="Nav-second-title">46,844.38</div>
                    <div className="Nav-second-sub">$46,830.33</div>
                </div>

                <NavText title="24h Change" sub="-20.17 -0.04%" x="1" />
                <NavText title="24h High" sub="48,300.00" />
                <NavText title="24h Low" sub="46,446.59" />
                <NavText title="24h Volume(BTC)" sub="7,823.32" />
                <NavText title="24h Volume(BUSD)" sub="369,855,727.49"/>

            </div>
        </nav>
    );
}


export default Nav;
