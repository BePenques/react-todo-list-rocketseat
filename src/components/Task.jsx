import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

// export function Task({title, isCompleted}){
export function Task(){

    return(
       
        <div className={styles.taskBox}>
            <div className={styles.checkBoxLabel}>
                <input type="checkbox" checked={true}/>
                <label>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
            </div>
                <button className={styles.btn} title="Deletar Tarefa">
                    <Trash size={24}/>
                </button>
        </div>
    )
}