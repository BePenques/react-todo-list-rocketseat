import styles from './InputTask.module.css'
import { PlusCircle} from 'phosphor-react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskList } from "./TaskList"
import { Task } from "./Task"
// import styles from './TaskList.module.css'


export function InputTask(){
    
      const [tasks, setTasks] = useState([
        {
            id: uuidv4(),
            title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            isCompleted: false
        },
      ]);

      const [newTitleText, setNewTitleText] = useState([]);
      
      function handleCreateNewTask(){
          event.preventDefault()
         
          setTasks([//passa qual o novo valor
             ...tasks,
             {
                id: uuidv4(),
                title: newTitleText,
                isCompleted: false
             }
          ]);

          setNewTitleText('');
       
      }
    function handleNewCommentChange(){
        // event.target.setCustomValidity('');
        setNewTitleText(event.target.value)
    }

    function handleTask(idToChange){
       
       console.log(idToChange)
       let newTaks = tasks.map(el=>{
        //    if(el.id === idToChange){
            // return {          
            //     ...el,
            //     isCompleted: !el.isCompleted
            // }
        //    }
       })
       console.log(newTaks);
    
    }


    return (
        <article className={styles.article}>
            <form onSubmit={handleCreateNewTask}>
                <input 
                    type="text" 
                    name="task"  
                    id="task" 
                    value={newTitleText} 
                    onChange={handleNewCommentChange} 
                    placeholder='Adicione uma nova tarefa'
                    required
                />
                <button type="submit">
                   <PlusCircle size={15} />
                    Criar
                </button>
            </form>
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
                                id={task.id}
                                title={task.title}
                                isCompleted={task.isCompleted}
                                onHandleTask={handleTask}
                            />
                        )
                    })}
                    
                </div> 
            </div>
        </article>
    )
}