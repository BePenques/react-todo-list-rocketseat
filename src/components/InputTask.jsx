import styles from './InputTask.module.css'
import { PlusCircle} from 'phosphor-react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from "./Task"
import { ClipboardText } from 'phosphor-react'


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
        
        setTasks([//imutabilidade
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

    function deleteTask(id){

        const tasksWithoutDeletedOne = tasks.filter(el=>{
            return el.id != id;
       })

       setTasks(tasksWithoutDeletedOne);

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
                    <strong className={styles.concluidas}>Concluidas 
                            {tasks.length > 0 ? <span>{tasks.filter(el => el.isCompleted == true).length} de {tasks.length}</span>
                                              :  <span>{tasks.length}</span>
                            }         
                    </strong>
                    
                </div>
                <div className={tasks.length > 0  ? styles.list : styles.listZeroItens}>
                    <div name="classDisplayNone">
                        <ClipboardText size={56}/>
                        <span> Você ainda não tem tarefas cadastradas</span>
                        <p> Crie tarefas e organize seus itens a fazer</p>
                    </div>
                    {tasks.map(task => {
                        return (
                            <Task 
                                key={task.id} 
                                id={task.id}
                                title={task.title}
                                isCompleted={task.isCompleted}
                                onHandleTask={handleTask}
                                onDeleteTask={deleteTask}
                            />
                        )
                    })}
                    
                </div> 
            </div>
        </article>
    )
}