import React from "react";

import './DivOrder.css';

// import { faAngleDown, faBars, faBookmark, faCog, faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const OrderList = (props) => {
    if (props.color === "1") {
        return (
            <div className="items">
                <div className="first-item-col1 oi">{ props.price }</div>
                <div className="second-item oi">{ props.amount }</div>
                <div className="third-item oi">{ props.total }</div>
            </div>
        );
    } else if (props.color === "2") {
        return (
            <div className="items">
                <div className="first-item-col2 oi">{ props.price }</div>
                <div className="second-item oi">{ props.amount }</div>
                <div className="third-item oi">{ props.total }</div>
            </div>
        );
    }
}

const DivOrder = () => {
    return (
        <div className="DivOrder">
            <div className="DivOrder-divOrder">
                {/* Part #1 Title */}
                <div className="order-title">
                    <div className="first-title ot">Price(BUSD)</div>
                    <div className="second-title ot">Amount(BTC)</div>
                    <div className="third-title ot">Total</div>
                </div>

                {/* Part #2 All Orders */}
                <div className="order-list">
                    {/* Sell Orders */}

                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="1"/>

                    {/* Now Value */}

                    <div className="now-value-box ">
                        <div className="now-value mv">48,550.66</div>
                        <div className="now-value-dollar mv">$48,553.66</div>
                        <div className="now-value-txt mv">More</div>
                    </div>

                    {/* Buy Orders */}

                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>
                    <OrderList price="48527.41" amount="0.01674" total="812.34884" color="2"/>

                </div>
            </div>
        </div>
    );
}

export default DivOrder;