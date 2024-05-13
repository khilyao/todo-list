import "reset-css";
import TodoList from "../TodoList";
import InputField from "../InputField";
import Line from "../Line";
import { AppContainer } from "./App.styled";

function App() {
  return (
    <AppContainer>
      <InputField />
      <div style={{ margin: "35px 0px 80px 0px" }}>
        <Line size={900} />
      </div>
      <TodoList />
    </AppContainer>
  );
}

export default App;
