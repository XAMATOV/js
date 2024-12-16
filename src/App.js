import React from 'react';
import AuthForm from './AuthForm';
import TodoList from './TodoList';

const App = () => {
    return (
        <div>
            <h1>Simple Auth App</h1>
            <AuthForm />
            <TodoList />
        </div>
    );
};

export default App;

