import { styled, fade } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

export const TodoListPaper = styled(Paper)(({ theme }) => ({
    width: 300,
    padding: theme.spacing(3),
    maxHeight: "80%",
    overflowY: "auto"
}));

export const TodoListItemStyled = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderRadius: 6,
    border: "solid 2px",
    borderColor: fade(theme.palette.primary.light, 0.3),
    marginBottom: 10,
    padding: "5px 8px",
    boxSizing: "border-box"
}));
