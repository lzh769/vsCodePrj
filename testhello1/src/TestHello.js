import React from 'react';

function TestHello({name = "world"}) {
    return (
    <div ><h1>Hello, {name}!</h1></div>

    );
}

export default TestHello;