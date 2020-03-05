import React from "react";

import { AppContainer } from "./styles";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Entry from "./Entry";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <Entry />
            </AppContainer>
        </ThemeProvider>
    );
};

export default App;
