import "./index.css";

import SlSpinner from "@shoelace-style/shoelace/dist/react/spinner/index";

import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useParams } from "react-router";
import { ContainerNode, render } from "preact";

import App from "./app";
import { queryClient } from "./api/api.js";
import FourOFourPage from "./components/pages/404";
import { useCollectionExists } from "./api/recipeCollection";
import { initSessionAuth } from "./api/user";

function CollectionIdGuard() {
  const params = useParams();
  const collectionId = parseInt(params["id"] || "-1");
  const { data: collectionExists, isFetching } =
    useCollectionExists(collectionId);

  const absCenter = {
    alignItems: "center",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    left: 0,
    margin: "auto",
    position: "absolute",
    right: 0,
    top: 0,
  };

  return isFetching ? (
    <div style={absCenter}>
      <SlSpinner style="font-size: 350px; --track-width: 30px;"></SlSpinner>
    </div>
  ) : collectionExists ? (
    <App></App>
  ) : (
    <FourOFourPage></FourOFourPage>
  );
}

initSessionAuth();

render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route
          path="/collection/:id"
          element={<CollectionIdGuard></CollectionIdGuard>}
        ></Route>
        <Route path="*" element={<FourOFourPage></FourOFourPage>} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("app") as ContainerNode,
);
