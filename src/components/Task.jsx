import styles from './Task.module.css'
import { Trash } from 'phosphor-react'


export function Task({id,title, isCompleted, onHandleTask, onDeleteTask}){
// export function Task(){


    function handleTask(){
        onHandleTask({ id: id, value: !isCompleted })
    }
    function deleteTask(){
        onDeleteTask({ id: id})
    }

    return(
       
        <div className={styles.taskBox}>
            <div className={styles.checkBoxLabel}>
                <label htmlFor="" onClick={handleTask}>
                    <input type="checkbox"  readOnly  checked={isCompleted}/>
                    <span>{title}</span>
                </label>
            </div>
                <button className={styles.btn} title="Deletar Tarefa" onClick={deleteTask}>
                    <Trash size={24}/>
                </button>
        </div>
    )
}