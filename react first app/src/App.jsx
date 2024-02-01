import Header from './assets/Header'
import './App.css'
import { Children } from 'react'

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>main section</p>
        <form action="submit">
          <input type="text" placeholder='Add some text'/>
          <option value=""></option>
          <button ></button>
        </form>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}

export default App
