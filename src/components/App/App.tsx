import TodoList from "../TodoList";
import InputField from "../InputField";
import { AppContainer } from "./App.styled";

function App() {
  return (
    <AppContainer>
      <InputField />
      <TodoList />
    </AppContainer>
  );
}

export default App;
