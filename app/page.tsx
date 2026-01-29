"use client"
// import Greetings from "../component/Greetings";
// import Add from "../component/Add";

// const App = () => {
//   return (
//     <>
//      <div>Greetings</div>
//      <div>Add</div>
//     </>
//   );
// };

// export default App;
// Example 1
// const App = () => {
//   const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];

//   return (
//     <main>
//       {numbers.map((number) => (
//         <ul key={Math.random()}>
//           <li>{number}</li>
//         </ul>
//       ))}
//     </main>
//   );
// };
// export default App;


// Example 2
// const App = () => {
//   const usersInfo = [
//     {
//       username: "HuXn",
//       email: "test@gmail.com",
//       location: "USA",
//     },
//     {
//       username: "John",
//       email: "jd@gmail.com",
//       location: "Arab",
//     },
//     {
//       username: "Alex",
//       email: "alexmersion@gmail.com",
//       location: "India",
//     },
//   ];

//   return (
//     <section>
//       {usersInfo.map((user) => (
//         <ul key={Math.random()}>
//           <li>{user.username}</li>
//           <li>{user.email}</li>
//           <li>{user.location}</li>
//         </ul>
//       ))}
//     </section>
//   );
// };

// export default App;


// Example 3
// const App = () => {
//   const myName = "Cherifatou KONDO";
//   const multiply = (a, b) => a + b;
//   const division = (a, b) => a / b;
//   const specialClass = "simple-class";

//   return (
//     <section>
//       {/* Rendering Variable Value */}
//       <h1>{myName}</h1>
//       {/* Rendering Expression */}
//       <p>2 + 2 = {2 + 2}</p>
//       {/* Rendering Array */}
//       <p>My Friends List: {["Kabore-", "Zongo-", "Ky-", "Ouedraogo"]}</p>
//       {/* Rendering Function Value */}
//       <p>2 * 2 = {multiply(2, 2)}</p>
//       {/* Rendering Function Value */}
//       <p>2 / 2 = {division(2, 2)}</p>
//       {/* Rendering Class */}
//       <p className={specialClass}>This is special class</p>
//     </section>
//   );
// };

// export default App;
// import Shopping from "../component/Shopping";

// const App = () => {
//   return (
//     <section>
//       <Shopping
//         items={["robe", "jupe", "pantalon", "chaussure"]
          
//         }
//       />
//     </section>
//   );
// };

// export default App;
// const User = (props) => {
//   return (
//     <section>
//       <img src={props.img} alt={props.name} width={200} />
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age +2}</h2>
//       <h3>Is married: {props.isMarried ? "Marie" : "Celibataire "}</h3>
//       <h4>Hobbies: {props.hobbies} </h4>
//       <h4>Nationalité:{props.Nationalité}</h4>
//     </section>
//   );
// };   

// const App = () => {
//   return (
//     <User
//       img="https://avatars.githubusercontent.com/u/85052811?v=4"
//       name="Cherifatou Espérance"
//       age={19}
//       isMarried={true}
//       hobbies={["Coding" , "Reading" , "Sleeping"]}
//       Nationalité={"Italien"}
//     />

//   );
// };

// export default App;
// const App = () => {
//   return (
//     <User
//       img="https://avatars.githubusercontent.com/u/85052811?v=4"
//       name="HuXn WebDev"
//       age={18}
//       isMarried={false}
//       hobbies={["Coding", "Reading", "Sleeping"]}
//       nationalité="Italien"
//     />
//   );
// };

// const User = ({ img, name, age, isMarried, hobbies ,nationalité}) => {
//   return (
//     <section>
//       <img src={img} alt={name} width={200} />
//       <h1>Name: {name}</h1>
//       <h2>Age: {age}</h2>
//       <h3>Is married: {isMarried}</h3>
//       <h4>Hobbies: {hobbies} </h4>
//       <h4>nationalité:{nationalité}</h4>
//     </section>
//   );
// };

// export default App;
// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// const Password = ({ isValid }) =>
//   isValid ? <ValidPassword /> : <InvalidPassword />;

// const App = () => {
//   return (
//     <section>
//       <Password isValid={true} />
//     </section>
//   );
// };

// export default App;
// const App = () => {
//   return (
//     <section>
//       <h1 style={{ color: "white", backgroundColor: "teal", padding: "2rem" }}>
//         Inline Style
//       </h1>
//     </section>
//   );
// };

//  export default App;
// const App = () => {
//   // const handleClick = () => console.log("You Clicked Me");
//   const handleClick = () => alert("Bonjour 2ie")
//   return <button onClick={handleClick}>Click</button>;
// };

// export default App;
// const Move = () => {
//   function moveHandler() {
//     alert("Mouse Move Event Fired");
//     console.log("Mouse Move Event Fired");
//   }

//   return (
//     <p onMouseOver={moveHandler}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
//       voluptatibus libero, eius odit modi doloremque quos magni tempora. Debitis
//       laborum exercitationem perferendis. Veritatis fuga, quod quasi accusamus
//       eveniet voluptates suscipit.
//     </p>
//   );
// };

// const App = () => {
//   // return <Button />;
//   // return <Copy />;
//   return <Move />;
// };

// export default App;
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

const App = () => {
  return <Counter />;
};

export default App;