import { Routes, Route, useLocation } from "react-router-dom";
import LayoutPeahoki from "./layout/peahoki";
import routes from "./routes";
import 'antd/dist/antd.css';
import { useLayoutEffect } from "react";


function App() {
  
  return (
    <Routes>
      <Route path='/' element={ <LayoutPeahoki/>}>
        {routes.map((route) => (
          <Route
            key={route.key}
            index={route.key === "HOME" ? true : false}
            path={route.path}
            element={route.component}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
