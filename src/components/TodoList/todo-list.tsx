import React from "react";
import { TodoListPaper, TodoListContainer } from "./styles";
import { Task } from "./components/task";
import { Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import TodoListActions from "./components/todo-list-actions";
import TodoListAddForm from "./components/todo-list-add-form";
import { useConfirmDialog, useFormModal } from "hooks";
import { ConfirmDialog, FormModal } from "components/Dialog";
import { ITodoListItem, ITodoListItemCreate } from "./types";
import {
    ADD_TASK_TITLE,
    DELETE_TASK_TITLE,
    DELETE_TASK_MESSAGE,
    TODO_LIST_EMPTY
} from "helpers/constants";
import { TodoListProgress } from "./components/todo-list-progress";

interface ITodoListProps {
    tasks: ITodoListItem[];
    completedTasks: ITodoListItem[];

    onAdd: (task: ITodoListItemCreate) => void;
    onDelete: (id: string) => void;
    onFlag: (id: string) => void;
    onEdit: (id: string, title: string) => void;
}

const TodoList: React.FC<ITodoListProps> = ({
    tasks,
    completedTasks,
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

    const [
        isOpenForm,
        titleForm,
        contentForm,
        sendForm,
        openForm,
        closeForm
    ] = useFormModal<ITodoListItemCreate>();

    const handleAdd = (): void => {
        openForm(
            ADD_TASK_TITLE,
            <TodoListAddForm
                onAdd={(values?: ITodoListItemCreate) => {
                    closeForm();
                    values && onAdd(values);
                }}
            />,
            (values?: ITodoListItemCreate) => {
                closeForm();
                values && onAdd(values);
            }
        );
    };

    const handleDelete = (taskId: string, taskTtitle?: string): void => {
        openDialog(
            taskTtitle
                ? `${DELETE_TASK_TITLE} "${taskTtitle}"`
                : DELETE_TASK_TITLE,
            DELETE_TASK_MESSAGE,
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
                    {!tasks.length ? (
                        <Typography align="center">
                            {TODO_LIST_EMPTY}
                        </Typography>
                    ) : (
                        <div>
                            <TodoListProgress
                                totalTasks={tasks.length}
                                completedTask={completedTasks.length}
                            />
                            {tasks.map((item, id) => (
                                <Task
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
                <TodoListActions onAdd={handleAdd} />
            </TodoListContainer>
            <ConfirmDialog
                isOpen={isOpen}
                title={title}
                dialogContent={content}
                handleConfirm={confirm}
                handleCancel={closeDialog}
            />
            <FormModal
                isOpen={isOpenForm}
                title={titleForm}
                form={contentForm}
                handleSubmit={sendForm}
                handleClose={closeForm}
            />
        </React.Fragment>
    );
};

export default observer(TodoList);
