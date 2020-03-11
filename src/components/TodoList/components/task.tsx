import React, { ReactElement, useState } from "react";
import { TaskContainer, TaskTitle } from "../styles";
import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { TaskActions } from "./task-actions";
import { ITodoListItem } from "../types";

interface ITodoListItemProps extends ITodoListItem {
    onDelete: () => void;
    onFlag: () => void;
    onEdit: (title: string) => void;
}

export const Task = (props: ITodoListItemProps): ReactElement => {
    const [isEdit, setEdit] = useState<boolean>(false);
    const handleEdit = (title: string): void => {
        props.onEdit(title);
        setEdit(false);
    };
    return (
        <TaskContainer>
            <TaskTitle
                variant="h6"
                style={{
                    opacity: props.isDone ? 0.3 : 1
                }}
            >
                {props.title}
            </TaskTitle>
            <TaskActions {...props} isEdit={isEdit} onEdit={handleEdit} />
        </TaskContainer>
    );
};
