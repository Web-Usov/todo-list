import { styled } from "@material-ui/core/styles";

export const HomeContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100%",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "start",
    padding: theme.spacing(5)
}));
