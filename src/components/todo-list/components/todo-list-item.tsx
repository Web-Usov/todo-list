import React, { ReactElement, useState } from "react";
import { TodoListItemStyled } from "../styles";
import { ITodoListItemProps } from "../types";
import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { TodoListItemActions } from "./todo-list-item-actions";

const Title = styled(Typography)({
    flexGrow: 1,
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginRight: 10
});
export const TodoListItem = (props: ITodoListItemProps): ReactElement => {
    const [isEdit, setEdit] = useState<boolean>(false);
    const handleEdit = (title: string): void => {
        props.onEdit(title);
        setEdit(false);
    };
    return (
        <TodoListItemStyled>
            <Title
                variant="h6"
                style={{
                    opacity: props.isDone ? 0.3 : 1
                }}
            >
                {props.title}
            </Title>
            <TodoListItemActions
                {...props}
                isEdit={isEdit}
                onEdit={handleEdit}
            />
        </TodoListItemStyled>
    );
};
