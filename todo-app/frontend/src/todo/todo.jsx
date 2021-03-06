import React, {Component} from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {description: '', list: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

        this.refresh()

    }

    refresh() {
        Axios.get(`${URL}?sort=-createdAt`)
        .then(resp => this.setState({...this.state, description: '', list: resp.data }) )
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
       const description = this.state.description
       Axios.post(URL, { description })
       .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader> 
                <TodoForm description={this.state.description} 
                handleAdd={this.handleAdd}
                handleChange={this.handleChange} />
                <TodoList list={this.state.list} />
            </div>
        )
    }
}