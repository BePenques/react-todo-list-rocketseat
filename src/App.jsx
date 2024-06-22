import { Header } from "./components/Header"
import { InputTask } from "./components/InputTask"
import './global.css';
import styles from './App.module.css'

function App() {
 

  return (
   <main>
      <Header/>

      <section className={styles.wrapper}>
          <InputTask></InputTask>  
      </section>
   </main>
  )
}

export default App
