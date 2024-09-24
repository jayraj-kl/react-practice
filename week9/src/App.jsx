import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { set } from 'mongoose'
import axios from 'axios'
// import './App.css'

// 1. for Mounting and Unmounting
// function App() {
//   const [render, setRender] = useState(true)
//   useEffect(()=> {
//     setInterval(()=> {
//       setRender(r => !r)
//     }, 5*1000)
//   }, [])

//   return (
//     <div>
//       {render ? <MyComponent /> : <div>2nd component</div>}
//     </div>
//   )
// }

// function MyComponent() {
//   useEffect(() => {
//     console.error("component mounted");
//     return () => {
//       console.error("component unmounted");
//     };
//   }, []);
//   return( 
//     <div>
//       From inside my component
//   </div>
//   )
// }

// 2. Data Fetching hooks, cleaning the hook include a loading parameter, Auto refreshing hook
// function useTodos(n) {
//   const [loading, setLoading] = useState(true);
//   const [todos, setTodos] = useState([])
//   function getData() {
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(response=> {
//       setTodos(response.data.todos);
//       setLoading(false)
//     })
//   }

//   useEffect(()=> {
//     const value = setInterval(()=> {
//       getData()
//     }, n * 1000)
//   getData()
//   return(()=>{
//     clearInterval(value)
//   })
//   }, [n])

//   return [
//     todos,
//     loading
//   ];
// }

// function App() {
//   const [todos, loading] = useTodos(5)
//   if(loading) {
//     return (
//       <div>
//         loading..,
//       </div>
//     )
//   }

//   return (
//     <div>
//       {todos.map(todo => <Track todo={todo} />)}
//     </div>
//   )
// }

// function Track({todo}) {
//   return(
//     <div>
//       {todo.title}
//         <br />
//       {todo.description}
//     </div>
//   )
// }


// 3. 
// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine)

//   useEffect(()=>{
//     window.addEventListener('online', () => setIsOnline(true));
//     window.addEventListener('offline', () => setIsOnline(false));
//   }, [])
//   return isOnline;
// }

// function App() {
//   const isOnline = useIsOnline()

//   return(
//     <div>
//       {isOnline ? "You are online yay!" : "You are not online" }
//     </div>
//   )
// }

// 4.

// 5.
// function useInterval(fn, timeout) {
//   useEffect(()=> {
//     const value = setInterval(()=> {
//       fn()
//     }, timeout)
//     return(()=> {
//       clearInterval(value)
//     })
//   }, [])
// }

// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount(c => c + 1);
//   }, 1000)

//   return (
//     <div>
//       Timer is at {count}
//     </div>
//   )
// }

// 6.
function useDebounce(text, timeout) {
  const [debounceValue, setDebounceValue] = useState(text)
  useEffect(()=> {
    const value = setTimeout(()=> {
      setDebounceValue(text)
    }, timeout)
    return(()=> {
      clearTimeout(value)
    })
  }, [text, timeout])

  return debounceValue
}

function App() {
  const [inputValue, setInputValue] = useState('')
  const debounce = useDebounce(inputValue, 500)

  return (
    <div>
      Debounced value is {debounce}
      <br />
       <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    </div>
  )
}

export default App
