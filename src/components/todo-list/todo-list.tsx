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
    onFlag,
    onEdit
}: ITodoListProps) => {
    const [
        isOpen,
        title,
        content,
        confirm,
        openDialog,
        closeDialog
    ] = useConfirmDialog();
    const handleDelete = (taskId: string, taskTtitle?: string): void => {
        openDialog(
            taskTtitle ? `Delete task "${taskTtitle}"` : `Delete task`,
            "Are you sure you would like to delete current task?",
            () => {
                closeDialog();
                onDelete(taskId);
            }
        );
    };
    const handleFlag = (id: string): void => {
        onFlag(id);
    };
    const handleEdit = (id: string, title: string): void => {
        onEdit(id, title);
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
                                    onDelete={() =>
                                        handleDelete(item.id, item.title)
                                    }
                                    onFlag={() => handleFlag(item.id)}
                                    onEdit={(title: string) =>
                                        handleEdit(item.id, title)
                                    }
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
