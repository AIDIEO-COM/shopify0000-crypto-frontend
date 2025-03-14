import Web from "../routes/web";
import "./App.css";
import ToastProvider from "./utils/Toaster";

function App() {
  return (
    <>
      <ToastProvider/>
      <Web />
    </>
  );
}

export default App;
