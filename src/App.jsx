// import './App.css'
// import Login from './Components/Login/Login'
// import Profile from './Components/Profile/Profile'
// import UserProvider from './Context/UserContextProvider'

// function App() {

//   return (
//     <>
//       <UserProvider>
//         <div className='flex justify-center items-center flex-col h-screen'>
//           <Login />
//           <Profile />
//         </div>
//       </UserProvider>
//     </>
//   )
// }

// export default App



import { useState } from 'react'
 import './App.css'
 
 function App() {
 
  const [color, setColor] = useState('white')
 
   return (
     <>
      <div className='flex justify-center duration-200 h-screen w-full items-center' style={{backgroundColor : color}}>
       
          <div className='py-2 px-3 rounded-lg bg-gray-400 absolute mt-[80vh]'>
           <div className=''>
             <button className='bg-yellow-400 mr-2 font-bold px-2 py-2 rounded-lg' onClick={()=> setColor('yellow')}>Yellow</button>
             <button className='bg-green-800 px-2 py-2 rounded-lg font-bold text-white mr-2' onClick={()=> setColor('green')}>Green</button>
             <button className='bg-[aqua] px-2 py-2 rounded-lg font-bold text-black mr-2' onClick={()=> setColor('Aqua')}>Aqua</button>
             <button className='bg-[Crimson] px-2 py-2 rounded-lg font-bold text-white mr-2' onClick={()=> setColor('Crimson')}>Crimson</button>
             <button className='bg-[DarkBlue] px-2 py-2 rounded-lg font-bold text-white mr-2' onClick={()=> setColor('DarkBlue')}>Blue</button>
             <button className='bg-[HotPink] px-2 py-2 rounded-lg font-bold text-black mr-2' onClick={()=> setColor('HotPink')}>Pink</button>
             <button className='bg-[LightSeaGreen] px-2 py-2 rounded-lg font-bold text-black mr-2' onClick={()=> setColor('LightSeaGreen')}>SeaGreen</button>
             <button className='bg-[Magenta] px-2 py-2 rounded-lg font-bold text-white mr-2' onClick={()=> setColor('Magenta')}>Magenta</button>
             <button className='bg-[MediumSpringGreen] px-2 py-2 rounded-lg font-bold text-black mr-2' onClick={()=> setColor('MediumSpringGreen')}>lightGreen</button>
             <button className='bg-[MidnightBlue] px-2 py-2 rounded-lg font-bold text-white mr-2' onClick={()=> setColor('MidnightBlue')}>MidnightBlue</button>
             <button className='bg-[Olive] px-2 py-2 rounded-lg font-bold text-black mr-2' onClick={()=> setColor('Olive')}>Olive</button>
           </div>
          </div>
      </div> 
     </>
   )
 }
 
 export default App
