import "./App.css";
import {
  Navigation,
  SignIn,
  AllDataTabs,
  SecondPage,
  PrivateRoute,
} from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/sign_in" element={<SignIn />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<AllDataTabs />} />
          <Route path="/second_page" element={<SecondPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
