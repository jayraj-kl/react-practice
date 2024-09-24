import { useCallback, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { memo } from 'react'
// import './App.css'

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     fetch('https://sum-server.100xdevs.com/todos').then(async (res) => {
//       const json = await res.json()
//       setTodos(json.todos)
//     })
//   }, []);

//   return (
//     <>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </>
//   )
// }

// function Todo({title, description}) {
//   return(
//     <div>
//       <h1>
//         {title}
//       </h1>
//       <h4>
//         {description}
//       </h4>
//   </div>
//   )
// }

// function App() {
//   const [num, setNum] = useState(1)
//   return <div>
//     <ButtonHandler num = "1" setNum={setNum}/>
//     <ButtonHandler num = "2" setNum={setNum}/>
//     <ButtonHandler num = "3" setNum={setNum}/>
//     <ButtonHandler num = "4" setNum={setNum}/>
//     <Todo id={num} />
//   </div>
// }

// function ButtonHandler(props) {
//   function onClickHandler() {
//     const number = parseInt(props.num)
//     props.setNum(number)
//   }
//   return(
//     <button onClick={onClickHandler}>
//       {props.num}
//     </button>
//   )
// }

// function Todo({id}) {
//   const [todo, setTodo] = useState({});
//   useMemo()
//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then(async function(res) {
//         const json = await res.json();
//         setTodo (json.todo);
//       })
//   }, [id])

//   return <div>
//     ID: {id}
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }


// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);

//   let count = useMemo(() => {
//     console.log("Memo Got Called")
//     let  finalcount = 0;
//     for (let i = 1; i <= inputValue; i++) {
//       finalcount += i;
//     }
//     return finalcount
//   }, [inputValue])

//   return (
//     <div>
//       <input type="number" onChange={(e) => {
//           setInputValue(Number(e.target.value));
//         }} placeholder={'Find Sum from 1 to n'} />
//       <br />
//       Sum from 1 to {inputValue} is {count}
//       <br />
//       <button onClick={() => {
//           setCounter(counter + 1);
//         }}>
//         Counter is {counter}
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0) 

//   const inputFunction = useCallback(() => {
//     console.log("Hi There!!")
//   }, [])

//   return(
//     <div>
//       <ButtonComponent inputFunction={inputFunction}> </ButtonComponent>

//       <button onClick={()=> {
//         setCount(count + 1)
//       }}>Click me</button>
//     </div>
//   )
// }

// const ButtonComponent = memo(({inputFunction}) => {
//   console.log("Re-render!!")
//   return(
//     <div>
//       <button>Button clicked</button>
//     </div>
//   )
// })

function App() {
  const [incomeTax, setIncomeTax] = useState(20000)
  const divRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = 10
    }, 5 * 1000)
  }, [])

  return(
    <div>
      hi there your income tax returns are<div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App;

