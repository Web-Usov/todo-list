import React from "react";
import { TodoListPaper } from "./styles";
import { ITodoListProps } from "./types";
import { TodoListItem } from "./components/todo-list-item";
import { Typography, Button } from "@material-ui/core";
import { observer } from "mobx-react";

const TodoList: React.FC<ITodoListProps> = ({
    items,
    onAdd,
    onDelete
}: ITodoListProps) => {
    return (
        <TodoListPaper>
            {!items.length ? (
                <Typography align="center">{"You have not tasks"}</Typography>
            ) : (
                <div>
                    {items.map((item, id) => (
                        <TodoListItem
                            key={id}
                            {...item}
                            onAdd={onAdd}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
            <Button
                onClick={() =>
                    onAdd({
                        title: "POP"
                    })
                }
            >
                Add
            </Button>
        </TodoListPaper>
    );
};

export default observer(TodoList);
