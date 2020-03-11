import React, { ReactElement } from "react";
import { Button } from "@material-ui/core";
import { TodoListActionsStyled, StyledButton } from "../styles";
import { styled } from "@material-ui/core/styles";
import { ITodoListItemCreate } from "../types";

interface ITodoListActionsProps {
    onAdd: (task: ITodoListItemCreate) => void;
}

const TodoListActions = ({ onAdd }: ITodoListActionsProps): ReactElement => {
    return (
        <TodoListActionsStyled>
            <StyledButton
                variant="contained"
                onClick={() =>
                    onAdd({
                        title: "loren ren loren "
                    })
                }
            >
                Add
            </StyledButton>
        </TodoListActionsStyled>
    );
};

export default TodoListActions;
