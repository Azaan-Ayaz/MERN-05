import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[date,setDate] = useState(new Date())
  const[histor,setHistory] = useState([])

  return (
    <>
      <div className='App'> 
        <div>
          {histor.map(function(historyItem){
            return(
              <div key= {historyItem}>
                <span className=''> 
                  {historyItem.date.getHours()},{historyItem.date.getminutes()},
                  {historyItem.date.getSeconds()}''
                </span>

                <span style={{margin:'10px',
                backgroundColor:'blue'}}>
                  {historyItem.count}
                  </span>
              </div>
            )
          })}
        </div>
    
      <button onClick={function(){
        setCount(count+1);
        const oldHistory = [...history];
        oldHistory.push({date:new Date(), count: count});
        setHistory(oldHistory);
      }}
      
      style={{fontSize:'50px'}}>{count} 
      </button>
      </div>
      </>
  )
}

export default App
