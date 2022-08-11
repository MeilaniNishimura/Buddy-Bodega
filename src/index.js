import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DataProvider } from './contexts/DataProvider';
import { AuthProvider } from './contexts/AuthProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <DataProvider>
            <App />
        </DataProvider>
    </AuthProvider>
);



