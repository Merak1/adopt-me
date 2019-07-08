// const Pet = (props) => {
//     return React.createElement("div", {},
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h2", {}, props.breed),
//     )
// }
const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {},
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    )
}
const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt me!"),
        React.createElement(Pet, {
            name: "Nemo",
            animal: "Fish",
            breed: "Clow"
        }),
        React.createElement(Pet, {
            name: "Clifford",
            animal: "Dog",
            breed: "Red"
        }),
        React.createElement(Pet, {
            name: "Kazumi",
            animal: "cat",
            breed: "kira kira doki doki"
        }),
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));