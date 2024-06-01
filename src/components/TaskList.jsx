import styles from './TaskList.module.css'
import { Task } from "./Task"


export function TaskList(tasks){
    return(
        <div className={styles.tasklist}>
            <div className={styles.counter}>
                <strong className={styles.tarefasCriadas}>Tarefas criadas <span>0</span></strong>
                <strong className={styles.concluidas}>Concluidas <span>0</span></strong>
            </div>
             <div className={styles.list}>
                <Task></Task>
                <Task></Task>
                {/* {tasks.map(task => {
                      return (
                          <Task 
                              key={task.id} 
                              title={task.title}
                              isCompleted={task.isCompleted}
                          />
                      )
                  })} */}
                
            </div> 
        </div>
    )
}