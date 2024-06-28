// Importing Modules/Packages
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ResourcesPage } from './Pages/ResourcesPage.tsx';
import { TimelinePage } from './Pages/TimelinePage.tsx';
import { ServicesPage } from './Pages/ServicesPage.tsx';
import { FeedbackPage } from './Pages/FeedbackPage.tsx';
import { AboutMePage } from './Pages/AboutMePage.tsx';
import { ContactPage } from './Pages/ContactPage.tsx';
import { QuotesPage } from './Pages/QuotesPage.tsx';
import { HomePage } from './Pages/HomePage.tsx';
import ReactDOM from 'react-dom/client';
import { FAQPage } from './Pages/FAQPage.tsx';
import App from './App.tsx';

// Stylesheet
import './assets/output/main.min.css';

// Creating/Defining React Routes
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: '/Timeline',
      element: <TimelinePage />
    },
    {
      path: '/FavoriteQuotes',
      element: <QuotesPage />
    },
    {
      path: '/FAQ',
      element: <FAQPage />
    },
    {
      path: '/AboutMe',
      element: <AboutMePage />
    },
    {
      path: '/Contact',
      element: <ContactPage />
    },
    {
      path: '/Services',
      element: <ServicesPage />
    },
    {
      path: '/Resources',
      element: <ResourcesPage />
    },
    {
      path: '/Feedback',
      element: <FeedbackPage />
    },
  ]
}])

// Rendering all React Components to the root div in html.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)