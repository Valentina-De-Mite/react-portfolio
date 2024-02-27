import style from "./App.module.css";
import { About } from "./components/About/About.jsx";
import { Avatar } from "./components/Avatar/Avatar.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Skill } from "./components/Skill/Skill.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contacts } from "./components/Contacts/Contacts.jsx";
import { SingleProject } from "./components/SingleProject/Project.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/project",
      element: <SingleProject />,
    },
  ]);

  return (
    <div className={style.App}>
      <Navbar></Navbar>
      <Avatar></Avatar>
      <About></About>
      <Skill></Skill>
      <Experience></Experience>
      <Projects></Projects>
      <Contacts></Contacts>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
