import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'

import React, { Suspense } from 'react';
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Landing = React.lazy(() => import('./components/Landing'));

import { CountContext } from './context';
import { useContext } from 'react';
//import './App.css'

// function App() {
  
//   return (
//     <div>
//       <BrowserRouter>
//         <AppToolBar />
//         <Suspense fallback={<div>Loading..,</div>}>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Landing />} />
//         </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   )
// }

// function AppToolBar() {
//   const navigate = useNavigate();
//   return(
//     <div>
//       <button onClick={() => {
//         navigate('/');
//       }}>Landing</button>

//       <button onClick={() => {
//         navigate('/dashboard')
//       }}>Dashboard</button>
//   </div>
//   )
// }

function App() {
  const [count, setCount] = useState(0);  
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  )
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <ButtonRenderer /> 
    </div>
  )
}

function CountRenderer() {
  const {count} = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
}

function ButtonRenderer() {
  const {count, setCount} = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>INCREASE</button>
      <button onClick={() => setCount(count - 1)}>DECREASE</button>
    </div>
  )
}


export default App
