import React, { ReactElement } from "react";
import { TodoListItemStyled } from "../styles";
import { ITodoListItemProps } from "../types";
import { styled } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const Title = styled(Typography)({
    flexGrow: 1
});
export const TodoListItem = ({
    onDelete,
    title,
    id
}: ITodoListItemProps): ReactElement => {
    return (
        <TodoListItemStyled>
            <Title variant="h6">{title}</Title>
            <div>
                <IconButton
                    aria-label="Delete"
                    onClick={() => {
                        onDelete(id);
                    }}
                >
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </div>
        </TodoListItemStyled>
    );
};
