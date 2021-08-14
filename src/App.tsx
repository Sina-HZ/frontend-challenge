import { CssBaseline, ThemeProvider } from "@material-ui/core";
import RTL from "./components/RTL";
import Scaffold from "./routes";
import appTheme from "./theme";

const App = () => {
  return (
    <RTL>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <div className="App">
          <Scaffold />
        </div>
      </ThemeProvider>
    </RTL>
  );
}

export default App;
