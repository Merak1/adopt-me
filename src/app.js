import React, { Component } from 'react'
import { render } from 'react-dom'
// import Pet from './Pet';
import SearchParams from './searchParams'
const App = () => {

    return (
        <div>
            <h1>Adopt me!</h1>
            {/* <Pet name="Nemo" animal="Fish" breed="Clow" /> */}
            {/* <Pet name="Clifford" animal="Dog" breed="Red" /> */}
            {/* <Pet name="Kazumi" animal="Cat" breed="kira kira doki dokiiiii" /> */}
            <SearchParams />
        </div>
    )
};

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));