import style from "./App.module.css";

import { CardPerson } from "./components/CardPerson";

export function App() {
  const listStack = [
    { Tec: "HTML" },
    { Tec: "CSS" },
    { Tec: "Eluna" },
    { Tec: "JavaScript" },
  ];

  return (
    <div className={style.container}>
      <CardPerson
        cover="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=50"
        avatar="https://avatars.githubusercontent.com/u/96553782?v=4"
        name="Lucas Smaniotto"
        office="Developer"
        stacks={listStack}
      />
    </div>
  );
}
