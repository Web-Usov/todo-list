import React from "react";
import { HomeContainer } from "./styles";
import TodoList from "components/todo-list";
import todoListStore from "store/todo-list";
import { observer } from "mobx-react";
import { Typography, styled } from "@material-ui/core";

const Title = styled(Typography)({
    marginBottom: 10
});

const HomePage: React.FC = () => {
    return (
        <HomeContainer>
            <Title align="center" variant="h5">
                Todo List
            </Title>
            <TodoList
                items={todoListStore.tasks}
                onAdd={todoListStore.add}
                onDelete={todoListStore.remove}
            />
        </HomeContainer>
    );
};

export default observer(HomePage);
