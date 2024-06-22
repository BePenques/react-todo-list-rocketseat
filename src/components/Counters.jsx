import styles from './Counters.module.css'


export function Counters({tasksLength, checkedTasks}){
    return (
        <div className={styles.counter}>
            <strong className={styles.tarefasCriadas}>Tarefas criadas <span>{tasksLength}</span></strong>
            <strong className={styles.concluidas}>Concluidas 
                    {tasksLength > 0 ? <span>{checkedTasks} de {tasksLength}</span>
                                        :  <span>{tasksLength}</span>
                    }         
            </strong>
            
        </div> 
    )
}