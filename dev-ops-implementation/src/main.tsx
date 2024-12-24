import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DevOpsImplementationDashboard from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Root element not found. Please check your HTML.");
}

createRoot(rootElement).render(
    <StrictMode>
        <DevOpsImplementationDashboard />
    </StrictMode>,
);
