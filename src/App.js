import TodoList from './components/TodoList';
import './App.css'
import Signature from './Signature';
import LeftSection from './components/LeftSection';
import ReadNameSection from './components/ReadNameSection';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  let [readName,setReadName] = useState(true)
  let [name,setName] = useState('')
  
  return (<>

    {(readName) && <ReadNameSection setReadName={setReadName} setName={setName}/> }
    <div className='Header'>
      <Header />
    </div>
    <div className='sections'>
      <div className='todo-app'>
        <TodoList/>
      </div>
      <div className='leftSection'> 
          <LeftSection name={name}/>
      </div> 
    </div>
    <div className='Signature'>
      <Signature/>
    </div>
    </>
  );
}
export default App;
