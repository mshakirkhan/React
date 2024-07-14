import React from 'react';
import ReactDOM from 'react-dom/client';

const Heading = () => (
    <h1>Hello This is first functional component</h1>
)

const HeadingTwo = () => <h1>Hello This is second functional component</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingTwo />);