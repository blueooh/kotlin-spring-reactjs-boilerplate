import React, { Suspense } from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import HelloWorld from '@/components/HelloWorld.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <CookiesProvider>
    <RecoilRoot>
      <Suspense>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<HelloWorld />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Suspense>
    </RecoilRoot>
  </CookiesProvider>
);
