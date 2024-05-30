import { Header } from "./components/Header"
import { InputTask } from "./components/InputTask"
import { TaskList } from "./components/TaskList"
import './global.css';
import styles from './App.module.css'

function App() {
 

  return (
   <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <main className={styles.main}>
          <InputTask>
            input de adicionar tasks
          </InputTask>  
          <TaskList></TaskList>
        </main>
      </div>
   </div>
  )
}

export default App
