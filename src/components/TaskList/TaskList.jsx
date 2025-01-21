import React, { Component } from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
`;

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Task 1' },
        { id: 2, text: 'Task 2' },
        { id: 3, text: 'Task 3' },
      ],
    };
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(task => task.id !== id),
    }));
  };

  render() {
    return (
      <div>
        {this.state.tasks.map(task => (
          <TaskContainer key={task.id}>
            <span>{task.text}</span>
            <DeleteButton onClick={() => this.handleDelete(task.id)}>Видалити</DeleteButton>
          </TaskContainer>
        ))}
      </div>
    );
  }
}

export default TaskList;