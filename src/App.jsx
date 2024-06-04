import { Header } from "./components/Header"
import { InputTask } from "./components/InputTask"
import { TaskList } from "./components/TaskList"
import { Task } from "./components/Task"
import './global.css';
import styles from './App.module.css'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
// import styles from './TaskList.module.css'

function App() {
 

  return (
   <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <main className={styles.main}>
          <InputTask></InputTask>  
          {/* <TaskList></TaskList> */}
        </main>
      </div>
   </div>
  )
}

export default App
