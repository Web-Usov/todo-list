import React from "react";
import { HomeContainer } from "./styles";
import TodoList from "components/todo-list";
import todoListStore from "store/todo-list";
import { observer } from "mobx-react";
import { Typography, styled } from "@material-ui/core";

const Title = styled(Typography)({
    marginBottom: 10,
    width: "100%",
    color: "#ffffff"
});

const HomePage: React.FC = () => {
    return (
        <HomeContainer>
            <Title variant="h4" display="block">
                Todo List
            </Title>
            <TodoList
                items={todoListStore.tasks}
                onAdd={todoListStore.add}
                onDelete={todoListStore.remove}
                onFlag={todoListStore.flag}
                onEdit={todoListStore.edit}
            />
        </HomeContainer>
    );
};

export default observer(HomePage);
