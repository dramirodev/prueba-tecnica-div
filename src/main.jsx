import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";
import {persistQueryClient} from "@tanstack/react-query-persist-client";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
            retry: 2,
        },
    },
});

const localStoragePersister = createSyncStoragePersister({
    storage: window.localStorage,
});

persistQueryClient({
    queryClient,
    persister: localStoragePersister,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools/>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>,
)
