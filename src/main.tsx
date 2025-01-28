import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import "./index.css";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MyBoookPost from "./MyBookPost"
import MyTop from "./MyTop";
import MyHello from "./MyHello";
import MySearch from "./MySearch"
import MyArticle from "./MyArticle";
import MyBooks from "./MyBooks"
import App from "./App"

function CustomErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>error occurred!!!</h1>
        <p>{error.statusText || error.data}</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Unexpected Error</h1>
      <p>{(error as Error).message}</p>
    </div>
  );
}
function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/" element={<App />}>
      <Route
        index
        element={<MyTop />}
        errorElement={<CustomErrorBoundary />}
      />
      <Route
        path="hello"
        element={<MyHello />}
        errorElement={<CustomErrorBoundary />}
      />
      <Route
        path="article/:id"
        element={<MyArticle />}
        errorElement={<CustomErrorBoundary />}
      />
      <Route
        path="search/*"
        element={<MySearch />}
        errorElement={<CustomErrorBoundary />}
      />
      <Route
        path="book/:isbn" element={<MyBooks />}
        loader={
          ({ params }) => {
            return fetch(`../data/${params.isbn}.json`)
            .then(res => res.json())
          }
        }
      />
      <Route
        path="post" element={<MyBoookPost />}
        action={
          async({ request }) => {
          const errs = new Map()
          const form = await request.formData()
          const title = form.get('title')
          const price = Number(form.get('price'))
            if (typeof title !== 'string' || title.length > 20) {
              errs.set('title', '署名は２０文字以内で入力してください')
            }
            if (Number.isNaN(price) || price < 0) {
            errs.set('price', '価格は正数で入力してください')
            }
            if (errs.size > 0) {
              return errs
            }
            console.log(title, price)
            return redirect('/')
          }
        }/>
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={router} />);

