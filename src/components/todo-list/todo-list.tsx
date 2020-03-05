import React from "react";
import { TodoListPaper, TodoListContainer } from "./styles";
import { ITodoListProps } from "./types";
import { TodoListItem } from "./components/todo-list-item";
import { Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import TodoListActions from "./components/todo-list-actions";
import { useConfirmDialog } from "hooks";
import { ConfirmDialog } from "components/Dialog";

const TodoList: React.FC<ITodoListProps> = ({
    items,
    onAdd,
    onDelete,
    onFlag
}: ITodoListProps) => {
    const [
        isOpen,
        title,
        content,
        confirm,
        openDialog,
        closeDialog
    ] = useConfirmDialog();
    const handleDelete = (taskId: string): void => {
        openDialog(
            "Delete task",
            "Are you sure you would like to delete current task?",
            () => {
                closeDialog();
                onDelete(taskId);
            }
        );
    };
    return (
        <React.Fragment>
            <TodoListContainer>
                <TodoListPaper>
                    {!items.length ? (
                        <Typography align="center">
                            {"You have not tasks"}
                        </Typography>
                    ) : (
                        <div>
                            {items.map((item, id) => (
                                <TodoListItem
                                    key={id}
                                    {...item}
                                    onDelete={handleDelete}
                                    onFlag={onFlag}
                                />
                            ))}
                        </div>
                    )}
                </TodoListPaper>
                <TodoListActions onAdd={onAdd} />
            </TodoListContainer>
            <ConfirmDialog
                isOpen={isOpen}
                title={title}
                dialogContent={content}
                handleConfirm={confirm}
                handleCancel={closeDialog}
            />
        </React.Fragment>
    );
};

export default observer(TodoList);
