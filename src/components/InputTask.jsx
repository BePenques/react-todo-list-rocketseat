import styles from './InputTask.module.css'
import { PlusCircle} from 'phosphor-react'

export function InputTask(){
    return (
        <article className={styles.article}>
            <form action="">
                <input type="text" name="" id="" placeholder='Adicione uma nova tarefa'/>
                <a href="#">
                   <PlusCircle size={15} />
                    Criar
                </a>
            </form>
        </article>
    )
}