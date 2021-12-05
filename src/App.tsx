import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

const SampleComponent = lazy(() => import("./components/Sample"));

const App = () => {
  return (
    <BrowserRouter>
      <h3>
        The custom vendor splitting config splits the vendor into multiple
        bundles, 1 bundle for the global deps (react, react-dom and router) and
        rest for each dependency and it only loads the vendor for the package
        used in the lazy loaded component/route.
      </h3>

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={
              <Link to="/sample">Go to the lazy sample component/route.</Link>
            }
          />
          <Route
            path="sample"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SampleComponent />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
