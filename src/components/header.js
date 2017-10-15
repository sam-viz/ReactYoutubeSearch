import React from "react";


const style = {
    root : {
        "margin-bottom": 15
    }
}

const Header = (props) => {
    return (
        <nav style={style.root}>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">YTLike</a>
            </div>
        </nav>
    );
}

export default Header;