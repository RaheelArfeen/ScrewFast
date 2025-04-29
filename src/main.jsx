import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router'; // <-- should be 'react-router-dom'
import { router } from './Routes/Routes';
import { DarkModeProvider } from './Compoenet/DarkModeContext/DarkModeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <div className="dark:bg-[#262626] bg-[#e5e5e5] z-0 min-h-screen">
        <RouterProvider router={router} />
      </div>
    </DarkModeProvider>
  </StrictMode>
);
