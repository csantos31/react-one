import React from "react";
import ReactDOM from "react-dom";

var GitHub = require('./components/GitHub');

const Index = () => {
    return <GitHub/>;
};

ReactDOM.render(<Index />,document.getElementById('app'));