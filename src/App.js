import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
import { adventurerNeutral } from '@dicebear/collection';
import React from 'react'
function App() {
 

const avatar = createAvatar(adventurerNeutral, {
  // ... options
});
const run=()=>{
  console.log('run')
}
const svg = avatar.toDataUriSync()

  return (
    <div className="App">
      <div className=' container border border-dark border-1  box'>
          <div className='child'>
            <img src="logo192.png" class="img-thumbnail" alt="..."/>
          </div>
          <div className='child'>
                <div className='child1'>
                    <button type="button" className="btn btn-primary" onClick={run}>สุ่ม</button>
                </div>
                <div className='child1'>
                <select class="form-select form-select-lg mb-1"    onChange={e=>(console.log(e.target.value))} aria-label=".form-select-lg example">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                </div>
                
                
          </div>
             
        
            
      </div>
    </div>
  );
}

export default App;