
import './App.css'
import ListLocation from './components/ListLocation'
import banner from './banner.png'

function App() {
 
  return (
    <div className="App">
      <header>
        <img className='banner' src={banner}/>
      </header>
<ListLocation />
    </div>
  )
}

export default App
