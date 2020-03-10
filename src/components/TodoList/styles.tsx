import { styled, fade } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

export const TodoListPaper = styled(Paper)(({ theme }) => ({
    width: 400,
    padding: theme.spacing(3),
    maxHeight: "90%",
    overflowY: "auto",
    flexGrow: 1
}));
export const TodoListContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    flexGrow: 1,
    maxHeight: "100%"
}));

export const TodoListItemStyled = styled("div")(({ theme }) => ({
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

export const TodoListActionsStyled = styled("div")(({ theme }) => ({
    padding: 10
}));
