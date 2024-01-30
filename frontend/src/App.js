import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import About from './pages/About';
import Landing from './pages/Landing';
import ProjectsList from './pages/projects/ProjectsList';
import Project from './pages/projects/Project';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><NavBar /><Outlet /></>,
      children: [
        {
          index: true,
          element: <Landing />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/projects',
          children: [
            {
              index: true,
              element: <ProjectsList />,
            },
            {
              path: '/projects/:projectId',
              element: <Project />
            }
          ]
        },
        {
          path: '/contact',
          element: <div>Contact</div>
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
