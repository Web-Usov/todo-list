import React, { ReactElement } from "react";
import {
    LinearProgressContainer,
    LinearProgressStyled,
    LinearProgressTitle
} from "../styles";
interface ITodoListProgressProps {
    totalTasks: number;
    completedTask: number;
}
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
        <LinearProgressContainer>
            <LinearProgressStyled variant="determinate" value={getValue()} />
            <LinearProgressTitle align="center">{`${completedTask} / ${totalTasks}`}</LinearProgressTitle>
        </LinearProgressContainer>
    );
};
