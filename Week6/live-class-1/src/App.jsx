import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
// import './App.css'

// function App() {
//     const [title, setTitle] = useState("My name is Jayraj")

//   return (
//     <div>
//       <ButtonComponent title="Update the title" setTitle={setTitle}></ButtonComponent>
//       <HeaderComponent title={title}></HeaderComponent>
//       <HeaderComponent title="My name is Raman"></HeaderComponent>
//       <HeaderComponent title="My name is Raman"></HeaderComponent>
//       <HeaderComponent title="My name is Raman"></HeaderComponent>
//       <HeaderComponent title="My name is Raman"></HeaderComponent>
//       <HeaderComponent title="My name is Raman"></HeaderComponent>
//     </div>
//   )
// }

// function ButtonComponent (props) {
//   function onClickHandler () {
//     props.setTitle("My name is " + Math.random())
//   }
//   return (
//     <button onClick={onClickHandler}>
//       {props.title}
//     </button>
//   )
// }

// const HeaderComponent = React.memo(
//   function HeaderComponent(props) {
//     return (
//      <div>
//        {props.title}
//      </div>
//     )
//  }
// )

// function App() {
//   return (
//     <>
//       <HeaderWithButton></HeaderWithButton>
//       <Header title="My name is Raman"></Header>
//     </>
//   )
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("My name is jayraj")
//   function changeTitle() {
//     setTitle("My name is " + Math.random())
//   }

//   return (
//     <>
//     <button onClick={changeTitle}>
//       Click me to cange the title
//     </button>
//     <Header title={title}></Header>
//     </>
//   )
// }

// function Header(props) {
//   return(
//     <div>
//       {props.title}
//     </div>
//   )
// }

// let counter = 4
// function App() {
//   const [todo, setTodo] = useState([{
//     id: 1,
//     title: "go to gym",
//     description: "go to gym today"
//   }, {
//     id: 2,
//     title: "eat food",
//     description: "eat food today"
//   }, {
//     id: 3,
//     title: "go to class",
//     description: "go to class today"
//   }])

//   return(
//     <>
//       {/* <Todo title={todo[0].title} description={todo[0].description}></Todo>
//       <Todo title={todo[1].title} description={todo[0].description}></Todo>
//       <Todo title={todo[2].title} description={todo[0].description}></Todo> */}
//       <ButtonComponent todo={todo} setTodo={setTodo}></ButtonComponent>
//       {todo.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </>
//   )
// }

// function ButtonComponent({ todo, setTodo }) {
//   function addTodo() {
//     setTodo([...todo, {
//       id: counter++,
//       title: Math.random(),
//       description: Math.random(),
//     }])
//   }
//     return(
//     <button onClick={addTodo}>
//       Click to add TODO!!
//     </button>
//   )
// }

// function Todo(props) {
//   return(
//     <div>
//       <h1>{props.title}</h1>
//       <h5>{props.description}</h5>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <CardWrapper>
//         <div>
//         hi there!!
//         </div>
//       </CardWrapper>
//     </div>
//   );
// }

// function CardWrapper({children}) {
//   console.log(children)
//   return (
//     <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
//       {children}
//     </div>
//   );
// }

function App() {
  const [todos, setTodos] = useState([]);
  
  function fetch_data() {
    fetch('https://sum-server.100xdevs.com/todos').then(async (res) => {
      const json = await res.json();
      const obj = json.todos; // array of objects
      setTodos(obj);
  });
  }
  
  useEffect(() => {
    fetch_data();
    setInterval(() => {
      fetch_data();
    }, 5 * 1000);
    }, []); // Runs when the component mounts.
  
  return (
  <div>
    <h1>Todos:</h1>
    {todos.map((todo) => (
    <TodoWrapper key={todo.id}>
      <Todo title={todo.title} description={todo.description} />
    </TodoWrapper>
    ))}
  </div>
  );
  }
  
  // We have put the TodoWrapper inside the memo, which skips re-rendering the child component, if its props have not changed.
  
  const TodoWrapper = memo((props) => {
  return (
  <div style={{ border: "2px solid black", margin: 10, padding: 20, backgroundColor:'orange' }}>
  {props.children}
  </div>
  );
  })
  
  function Todo(props) {
  return (
  <div>
  <h2>{props.title}</h2>
  <h3>{props.description}</h3>
  </div>
  );
  }
  
  export default App;
  