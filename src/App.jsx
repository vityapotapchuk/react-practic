import './App.css'
import Header from './components/Header.jsx'
import {data } from './data'

function WayToTeach(props) {

  return (
    <li>
    <p>
      <strong>{props.title}</strong> {props.description}</p>
  </li>
  )
}


function App() {
  return (
      <div>
        <Header />
        <main>
          
          <section>
            <ul>
              <WayToTeach title={data[0].title} description={data[0].description}/>
              <WayToTeach title={data[1].title} description={data[1].description}/>
              <WayToTeach title={data[2].title} description={data[2].description}/>
            </ul>
          </section>
         
        </main>
      </div>
  )
}

export default App
