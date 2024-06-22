import styles from './InputTask.module.css'
import { PlusCircle} from 'phosphor-react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from "./Task"
import { Empty } from './Empty'
import { Counters } from './Counters'


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

       if (!confirm('Deseja mesmo apagar essa tarefa?')) {
        return
      }

       setTasks(tasksWithoutDeletedOne);

    }

    const checkedTasks = tasks.reduce((prevValue, currentTask) => {
        if (currentTask.isCompleted) {
          return prevValue + 1
        }
    
        return prevValue
      }, 0)

    return (
        <article className={styles.article}>
            <form onSubmit={handleCreateNewTask}>
                <input 
                    type="text" 
                    name="task"  
                    id="task" 
                    value={newTitleText} 
                    onChange={(e) => setNewTitleText(e.target.value)} //handleNewCommentChange
                    placeholder='Adicione uma nova tarefa'
                    required
                />
                <button type="submit">
                   <PlusCircle size={15} />
                    Criar
                </button>
            </form>
            <div className={styles.tasklist}>
                <Counters
                    tasksLength={tasks.length}
                    checkedTasks={checkedTasks}
                />
       
                {tasks.length > 0 ? (
                <div>
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
                    ) : (
                    <Empty />
                )}           

            </div>
        </article>
    )
}