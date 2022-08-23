import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import HomePage from "./Components/HomePage";
import {BlogPage} from "./Components/BlogPage";
import NotFoundPage from "./Components/NotFoundPage";

import {SinglePage} from "./Components/SinglePage";
import {Layout} from "./Components/Layout";
import {CreatePost} from "./Components/CreatePost";
import {EditPost} from "./Components/EditPost";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
          <Routes>

                  {/*<Route path="/" element={<App />}/>*/}
              <Route path="/" element={<Layout />}/>
              {/*<Route index element={<HomePage />} />*/}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about-us" element={<Navigate to={"/about"} replace/>} />
              <Route path="/posts" element={<BlogPage />} />
              <Route path="/posts/:id" element={<SinglePage />} />
              <Route path="/posts/:id/edit" element={<EditPost />} />
              <Route path="/posts/new" element={<CreatePost />} />
              <Route path="*" element={<NotFoundPage />} />

          </Routes>
              </PersistGate>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
