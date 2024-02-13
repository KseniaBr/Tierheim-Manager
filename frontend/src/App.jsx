import "./App.scss";
import { Routes, Route } from "react-router-dom";
import routes from "./components/navigation/routes";
import Layout from "./components/ui/Layout";
import UserProvider from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} {...route} />
          ))}
        </Routes>
      </Layout>
    </UserProvider>
  );
}

export default App;
