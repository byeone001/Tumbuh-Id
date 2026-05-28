import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#F7FBF9] flex flex-col">
      <RouterProvider router={router} />
    </div>
  );
}
