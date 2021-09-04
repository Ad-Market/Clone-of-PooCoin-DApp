import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
           <div className="header_left">
               <div className="header_centerleft">
                    <img
                    src="https://poocoin.app/images/logo/poocoin512.png"
                    />  
                    <div className="title">
                        <span>
                            PooCoin
                            <br/>
                             Charts
                        </span>
                    </div>
                </div>
                <div className="header_centercenter">
                    <div>Binance (BSC)</div>
                    <div>Polygon (Matic)</div>   
                    <div>KuChain (KCC)</div>   
                </div>
                <div className="header_centerright">
                <img
                src="https://poocoin.app/images/logo/poocoin512.png"
                />
                <span>$ 2.36</span>
                <img src="https://poocoin.app/images/logos/telegram.svg" height="25"/>
                </div>
            </div>
            <div className="header_middle">
                <a>Charts</a>
                <a>Trade</a>
                <a>Multi Chart</a>
                <a>About</a>
                <a>Tools</a>
                <a>Premium</a>
                <a>Advertise</a>
                <a>Free Price Bot</a>
                
            </div>
            <div className="header_right">
                <button className="button">
                    connect
                </button>
            </div>
        </div>
    )       
}

export default Header
