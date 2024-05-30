import styles from './TaskList.module.css'

export function TaskList(){
    return(
        <div className={styles.tasklist}>
            <div className={styles.counter}>
                <strong className={styles.tarefasCriadas}>Tarefas criadas <span>0</span></strong>
                <strong className={styles.concluidas}>Concluidas <span>0</span></strong>
            </div>
            <div className={styles.list}>

            </div>
        </div>
    )
}