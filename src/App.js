import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import Main from "./pages/Main";
import {Provider} from "react-redux";
import store from "./app/store";
import {theme} from "./theme";

function App() {
    const extendedTheme = extendTheme(theme);
    return (
        <Provider store={store}>
            <ChakraProvider theme={extendedTheme}>
                <Main/>
            </ChakraProvider>
        </Provider>
    );
}

export default App;
