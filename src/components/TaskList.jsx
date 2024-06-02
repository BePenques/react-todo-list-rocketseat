import styles from './TaskList.module.css'
import { Task } from "./Task"
import { v4 as uuidv4 } from 'uuid';

const tasks = [
    {
        id: uuidv4(),
        title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        isCompleted: true
    },
    {
        id: uuidv4(),
        title: 'Integer 2 urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        isCompleted: false
    }
  ];

export function TaskList(){
    return(
        <div className={styles.tasklist}>
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
        </div>
    )
}