import styles from './Task.module.css'
import { Trash } from 'phosphor-react'


export function Task({id,title, isCompleted, onHandleTask}){
// export function Task(){


    function handleTask(){
        onHandleTask(id)
    }

    return(
       
        <div className={styles.taskBox}>
            <div className={styles.checkBoxLabel}>
                <input type="checkbox" onChange={handleTask}/>
                <label>{title}</label>
            </div>
                <button className={styles.btn} title="Deletar Tarefa">
                    <Trash size={24}/>
                </button>
        </div>
    )
}