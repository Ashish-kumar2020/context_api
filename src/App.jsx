import { useContext } from "react";
// import { ThemeProvider } from "./context/ThemeProvider";
import { SumContext, ThemeContext } from "./context/GenericContext";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {currUserName ,updateUserName} = useContext(SumContext)
  return (
    <>
      {theme}
      {currUserName}
      <button onClick={() => toggleTheme()}>Change Theme</button>
      <button onClick={() => updateUserName("Ashuuuu")}>Update UserName</button>
    </>
  );
};

export default App;
