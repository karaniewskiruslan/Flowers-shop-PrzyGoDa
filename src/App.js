import "./App.css";

let namesys = [
  { name: "Ruslan Karaniewski", gay: false },
  { name: "Leonardo Davinci", gay: true },
  { name: "Fox Bernad", gay: true },
];

const List = (props) => {
  let nameOfNotGays = props.names
    .filter((nameX) => {
      return !nameX.gay;
    })
    .map((nameX) => {
      return <div key={nameX.name}>{nameX.name}</div>;
    });
  let nameOfGays = props.names
    .filter((nameX) => {
      return nameX.gay;
    })
    .map((nameX) => {
      return <div key={nameX.name}>{nameX.name}</div>;
    });

  return (
    <section>
      {nameOfNotGays}
      <br />
      {nameOfGays}
    </section>
  );
};

// const List = (props) => {
//   return (
//     <div>
//       {props.namesys.map((nameX) => {
//         return <section key={nameX.name}>{nameX.name}</section>;
//       })}
//     </div>
//   );
// };

function App() {
  return (
    <>
      <List names={namesys} />
    </>
  );
}

export default App;
