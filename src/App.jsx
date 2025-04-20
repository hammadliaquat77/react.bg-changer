import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('white');

  return (
    <>
      <div
        className="flex justify-center items-center duration-200 min-h-screen w-full relative"
        style={{ backgroundColor: color }}
      >
        <div className="p-3 rounded-lg bg-gray-400 fixed bottom-4 w-[95%] max-w-[800px] flex flex-wrap justify-center gap-2">
          <button
            className="bg-yellow-400 font-bold px-3 py-2 rounded-lg"
            onClick={() => setColor('yellow')}
          >
            Yellow
          </button>
          <button
            className="bg-green-800 text-white font-bold px-3 py-2 rounded-lg"
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className="bg-[aqua] text-black font-bold px-3 py-2 rounded-lg"
            onClick={() => setColor('aqua')}
          >
            Aqua
          </button>
          <button
            className="bg-[crimson] text-white font-bold px-3 py-2 rounded-lg"
            onClick={() => setColor('crimson')}
          >
            Crimson
          </button>
          <button
            className="bg-[darkblue] text-white font-bold px-3 py-2 rounded-lg"
            onClick={() => setColor('darkblue')}
          >
            Blue
          </button>
          <button
            className="bg-[hotpink] text-black font-bold px-3 py-2 rounded-lg"
            onClick={() => setColor('hotpink')}
          >
            Pink
          </button>
          <button
            className="bg-[lightseagreen] text-black font-bold px-3 py-2 rounded-lg"
            onClick={() => setColor('lightseagreen')}
          >
            SeaGreen
          </button>
          <button
            className="bg-[magenta] text-white font-bold px-3 py-2 rounded-lg"
            onClick={() => setColor('magenta')}
          >
            Magenta
          </button>
          <button
            className="bg-[mediumspringgreen] text-black font-bold px-3 py-2 rounded-lg"
            onClick={() => setColor('mediumspringgreen')}
          >
            LightGreen
          </button>
          <button
            className="bg-[midnightblue] text-white font-bold px-3 py-2 rounded-lg"
            onClick={() => setColor('midnightblue')}
          >
            MidnightBlue
          </button>
          <button
            className="bg-[olive] text-black font-bold px-3 py-2 rounded-lg"
            onClick={() => setColor('olive')}
          >
            Olive
          </button>
        </div>
      </div>
    </>
  );
}

export default App;




























// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [color, setColor] = useState('white');

//   const colors = [
//     { name: 'Yellow', value: 'yellow', text: 'black' },
//     { name: 'Green', value: 'green', text: 'white' },
//     { name: 'Aqua', value: 'aqua', text: 'black' },
//     { name: 'Crimson', value: 'crimson', text: 'white' },
//     { name: 'Blue', value: 'darkblue', text: 'white' },
//     { name: 'Pink', value: 'hotpink', text: 'black' },
//     { name: 'SeaGreen', value: 'lightseagreen', text: 'black' },
//     { name: 'Magenta', value: 'magenta', text: 'white' },
//     { name: 'LightGreen', value: 'mediumspringgreen', text: 'black' },
//     { name: 'MidnightBlue', value: 'midnightblue', text: 'white' },
//     { name: 'Olive', value: 'olive', text: 'black' },
//   ];

//   return (
//     <div
//       className="flex flex-col justify-center items-center min-h-screen w-full duration-200"
//       style={{ backgroundColor: color }}
//     >
//       <div className="bg-gray-400 p-4 rounded-lg shadow-lg w-[90%] sm:w-auto">
//         <div className="flex flex-wrap justify-center gap-2">
//           {colors.map((c, index) => (
//             <button
//               key={index}
//               className={`px-3 py-2 rounded-lg font-bold`}
//               style={{
//                 backgroundColor: c.value,
//                 color: c.text,
//               }}
//               onClick={() => setColor(c.value)}
//             >
//               {c.name}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
