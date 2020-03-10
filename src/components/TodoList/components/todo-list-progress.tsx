import React, { ReactElement } from "react";
import { styled } from "@material-ui/core/styles";
import { LinearProgress, fade, Typography } from "@material-ui/core";
interface ITodoListProgressProps {
    totalTasks: number;
    completedTask: number;
}
const LinearProgressStyled = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: "5px",
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.main,
    borderColor: theme.palette.success.main,
    "& .MuiLinearProgress-barColorPrimary": {
        backgroundColor: theme.palette.success.dark
    }
}));
const Title = styled(Typography)({
    position: "absolute",
    top: 0,
    width: "100%"
});
export const TodoListProgress = ({
    totalTasks,
    completedTask
}: ITodoListProgressProps): ReactElement => {
    const getValue = (): number => {
        if (!totalTasks || !completedTask) return 0;
        if (totalTasks < completedTask) return 0;

        return (completedTask / totalTasks) * 100;
    };
    return (
        <div
            style={{
                marginBottom: "15px",
                position: "relative"
            }}
        >
            <LinearProgressStyled variant="determinate" value={getValue()} />
            <Title align="center">{`${completedTask} / ${totalTasks}`}</Title>
        </div>
    );
};
