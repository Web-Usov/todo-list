import { styled, fade } from "@material-ui/core/styles";
import { Paper, Button, Typography, LinearProgress } from "@material-ui/core";

// Todo list
export const TodoListPaper = styled(Paper)(({ theme }) => ({
    // maxWidth: 400,
    // width: "100%",
    padding: theme.spacing(3),
    maxHeight: "90%",
    overflowY: "auto",
    flexGrow: 1
}));
export const TodoListContainer = styled("div")({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexGrow: 1,
    maxHeight: "100%",
    maxWidth: 500,
    width: "100%"
});

// Todo list - task
export const TaskContainer = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderBottom: "solid 2px",
    borderBottomColor: fade(theme.palette.primary.light, 0.3),
    marginBottom: 15,
    padding: "8px 10px",
    boxSizing: "border-box",
    boxShadow: theme.shadows[1]
}));

export const TaskTitle = styled(Typography)({
    flexGrow: 1,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    marginRight: 10
});

// Todo List - Linear Progress
export const LinearProgressContainer = styled("div")({
    marginBottom: "15px",
    position: "relative"
});
export const LinearProgressStyled = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: "5px",
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.main,
    borderColor: theme.palette.success.main,
    "& .MuiLinearProgress-barColorPrimary": {
        backgroundColor: theme.palette.success.dark
    }
}));
export const LinearProgressTitle = styled(Typography)({
    position: "absolute",
    top: 0,
    width: "100%"
});

// Task form adding
export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.success.light,
    "&:hover": {
        backgroundColor: theme.palette.success.dark
    },
    color: theme.palette.getContrastText(theme.palette.success.main)
}));

export const TodoListActionsStyled = styled("div")({
    padding: 10
});
