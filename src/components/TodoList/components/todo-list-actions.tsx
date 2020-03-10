import React, { ReactElement } from "react";
import { Button } from "@material-ui/core";
import { TodoListActionsStyled } from "../styles";
import { styled } from "@material-ui/core/styles";
import { ITodoListItemCreate } from "../types";

interface ITodoListActionsProps {
    onAdd: (task: ITodoListItemCreate) => void;
}
const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.success.light,
    "&:hover": {
        backgroundColor: theme.palette.success.dark
    },
    color: theme.palette.getContrastText(theme.palette.success.main)
}));

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
