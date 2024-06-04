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
      const [countTask, setCountTask] = useState(0);
      
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

    function handleTask({id, value}){
      
       const updatedTasks = tasks.map((el)=>{
           if(el.id === id){
                return {   
                    ...el,          
                    isCompleted: value
                    
                }
           }
           return {...el}
       })
       
        setTasks(updatedTasks);
    
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
                    <strong className={styles.tarefasCriadas}>Tarefas criadas <span>{tasks.length}</span></strong>
                    <strong className={styles.concluidas}>Concluidas <span>{tasks.filter(el => el.isCompleted == true).length} de {tasks.length}</span></strong>
                    
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