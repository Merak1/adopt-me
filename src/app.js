import React, { Component } from 'react'
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
    // return React.createElement(
    //     "div",
    //     {},
    //     React.createElement("h1", {}, "Adopt me!"),
    //     React.createElement(Pet, {
    //         name: "Nemo",
    //         animal: "Fish",
    //         breed: "Clow"
    //     }),
    //     React.createElement(Pet, {
    //         name: "Clifford",
    //         animal: "Dog",
    //         breed: "Red"
    //     }),
    //     React.createElement(Pet, {
    //         name: "Kazumi",
    //         animal: "cat",
    //         breed: "kira kira doki doki"
    //     }),
    // );

    return (
        <div>
            <h1>Adopt me!</h1>
            <Pet name="Nemo" animal="Fish" breed="Clow" />
            <Pet name="Clifford" animal="Dog" breed="Red" />
            <Pet name="Kazumi" animal="Cat" breed="kira kira doki dokiiiii" />
        </div>
    )
};

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));