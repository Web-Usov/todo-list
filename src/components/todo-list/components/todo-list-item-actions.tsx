import React, { ReactElement } from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBoxOff from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxOn from "@material-ui/icons/CheckBox";
import theme from "entry/theme";
import { ITodoListItemActionsProps } from "../types";

export const TodoListItemActions = ({
    onDelete,
    onFlag,
    onEdit,
    isDone,
    isEdit
}: ITodoListItemActionsProps): ReactElement => {
    return (
        <div>
            <IconButton aria-label="Flag" onClick={onFlag}>
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
            <IconButton aria-label="Delete" onClick={onDelete}>
                <DeleteIcon fontSize="small" />
            </IconButton>
        </div>
    );
};
