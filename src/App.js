import { render } from 'react-dom'; 
import { StrictMode } from 'react';
import SearchParams from "./SearchParams";

////////// code JSX 
const App = () => {
  return (
    <StrictMode>
      <div>
          <h1> Adopt Me!</h1>
          <SearchParams />
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));

///////// code React
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",
//     }),
//   ]);
// };

// render(React.createElement(App), document.getElementById("root"));
