import styles from './Task.module.css'
import { Trash, Check } from 'phosphor-react'


export function Task({id,title, isCompleted, onHandleTask, onDeleteTask}){
// export function Task(){


    function handleTask(){
        onHandleTask({ id: id, value: !isCompleted })
    }
    function deleteTask(){
        onDeleteTask(id)
    }

    const checkboxCheckedClassname = isCompleted == true
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
    const paragraphCheckedClassname = isCompleted
        ? styles['paragraph-checked']
        : ''

    return(

        <div className={styles.taskBox}>
            <div className={styles.checkBoxLabel}>
                <label htmlFor="" onClick={handleTask}>
                    <input type="checkbox"  readOnly  checked={isCompleted}/>
                    {/* <span>{title}</span> */}
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        {isCompleted && <Check size={12} color="#fff"/>}
                    </span>
                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                        {title}
                    </p>
                </label>
            </div>
            <button onClick={deleteTask}>
                <Trash size={16} color="#808080"/>
            </button>
        </div>
    )
}