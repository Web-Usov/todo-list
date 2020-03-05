import React, { ReactElement, useState } from "react";
import { TodoListItemStyled } from "../styles";
import { ITodoListItemProps } from "../types";
import { styled } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBoxOff from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxOn from "@material-ui/icons/CheckBox";
import theme from "entry/theme";

export const TodoListItem = ({
    onDelete,
    onFlag,
    onEdit,
    title,
    id,
    isDone
}: ITodoListItemProps): ReactElement => {
    const [isEdit, setEdit] = useState<boolean>(false);
    return (
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
    );
};
