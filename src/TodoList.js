import React, { Component } from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";




class TodoList extends Component {
    renderTodoList = () => {
        const { allTodoes } = this.props.todos
        console.log(allTodoes);
       return <ul>
           {
               allTodoes.map((todo, index) => (
                   <li key={index}>
                        {todo.text}
                   </li>
               ))
           }
       </ul>


    }

    render() { 
        const { todos } = this.props;
        return (
            todos.loading ? <span>"Carregando..."</span> : (
                this.renderTodoList()
            )
        )
    }
}

const TodosQuery = gql`
    query {
        allTodoes{
            id
            text
        }
    }
`;

export default graphql(TodosQuery, { name : "todos"})(TodoList);