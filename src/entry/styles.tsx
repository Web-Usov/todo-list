import { styled } from "@material-ui/core/styles";

export const AppContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flex: 1,
    height: "100vh",
    backgroundColor: theme.palette.primary.main
}));
