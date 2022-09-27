import React, {createElement as e, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App1() {
    const[count, setCount] = useState(0)
    return (e('div', {className:'container'} ,
            [
                e('h1',{className:'font-bold', key:1},`Test JSX ${count}`),
                e('button',{className:'py-2 px-4 border', key:2,
                    onClick: ()=> {setCount(count+1); console.log(`Clicked ${count} times`)}},'Button'),
            ]
        )
        /*    <div>
              <h1>React hi!!!</h1>
            </div>*/
    );
}

export default App1;
