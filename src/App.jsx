import { Header } from "./components/Header"
import { InputTask } from "./components/InputTask"
import { TaskList } from "./components/TaskList"
import { Task } from "./components/Task"
import './global.css';
import styles from './App.module.css'
// import styles from './TaskList.module.css'

function App() {
 
  const tasks = [
    {
        id: 1,
        title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        isCompleted: true
    },
    {
        id: 2,
        title: 'Integer 2 urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        isCompleted: false
    }
  ];

  return (
   <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <main className={styles.main}>
          <InputTask>
          </InputTask>  
          <TaskList></TaskList>
          {/* <div className={styles.tasklist}>
            <div className={styles.counter}>
                  <strong className={styles.tarefasCriadas}>Tarefas criadas <span>0</span></strong>
                  <strong className={styles.concluidas}>Concluidas <span>0</span></strong>
              </div>
              <div className={styles.list}>
           
                  {tasks.map(task => {
                      return (
                          <Task 
                              key={task.id} 
                              title={task.title}
                              isCompleted={task.isCompleted}
                          />
                      )
                  })}            
            </div>
          </div> */}
        </main>
      </div>
   </div>
  )
}

export default App
