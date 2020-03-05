import React, { ReactElement } from "react";
import { TodoListItemStyled } from "../styles";
import { ITodoListItemProps } from "../types";
import { styled } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBoxOff from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxOn from "@material-ui/icons/CheckBox";
import theme from "entry/theme";

const Title = styled(Typography)({
    flexGrow: 1,
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginRight: 10
});
export const TodoListItem = ({
    onDelete,
    onFlag,
    title,
    id,
    isDone
}: ITodoListItemProps): ReactElement => {
    // const [isEdit, setEdit] = useState<boolean>(false);
    return (
        <TodoListItemStyled>
            <Title
                variant="h6"
                style={{
                    opacity: isDone ? 0.5 : 1
                }}
            >
                {title}
            </Title>
            <div>
                <IconButton
                    aria-label="Flag"
                    onClick={() => {
                        onFlag(id);
                    }}
                >
                    {isDone ? (
                        <CheckBoxOn
                            fontSize="small"
                            style={{
                                color: isDone
                                    ? theme.palette.success.main
                                    : theme.palette.divider
                            }}
                        />
                    ) : (
                        <CheckBoxOff fontSize="small" />
                    )}
                </IconButton>
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
