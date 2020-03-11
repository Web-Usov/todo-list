import React, { ReactElement } from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBoxOff from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxOn from "@material-ui/icons/CheckBox";
import theme from "entry/theme";

interface ITodoListItemActionsProps {
    onFlag: () => void;
    onDelete: () => void;
    onEdit: (title: string) => void;
    isEdit: boolean;
    isDone: boolean;
}
export const TaskActions = ({
    onDelete,
    onFlag,
    onEdit,
    isDone,
    isEdit
}: ITodoListItemActionsProps): ReactElement => {
    return (
        <div style={{ flexShrink: 0 }}>
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
