import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export function Task({title, isCompleted}){
// export function Task(){

    return(
       
        <div className={styles.taskBox}>
            <div className={styles.checkBoxLabel}>
                <input type="checkbox" checked={isCompleted}/>
                <label>{title}</label>
            </div>
                <button className={styles.btn} title="Deletar Tarefa">
                    <Trash size={24}/>
                </button>
        </div>
    )
}