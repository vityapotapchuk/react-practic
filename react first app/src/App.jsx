import Header from './components/Header'
import './App.css'
import {database} from './data'
import CardContainer from './components/CardContainer'
import Button from './components/Button/Button'


export default function App() {
  function handleClick() {
    console.log('button clicked');
}
  return (
    <div>
      <Header />
      <main>
        <section>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, accusamus?</p>
          <CardContainer name={database[0].name} description={database[0].description} />
          <CardContainer name={database[1].name} description={database[1].description} />
          <CardContainer name={database[2].name} description={database[2].description} />
        </section>
        <section>
          <h3>Chiose your ways</h3>
          <Button onClick={handleClick}>Button 1</Button>
          <Button onClick={handleClick}>Button 2</Button>
          
        </section>
      </main>
    </div>
  )
}


