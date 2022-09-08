import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRout } from "./authent/PrivateRoute";

//pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { RecipesListPage } from "./pages/RecipesListPage";
import { RecipePage } from "./pages/RecipePage";
import { NotFoundPage } from "./pages/NotFoundPage";
 import { LogInPage } from "./pages/LogInPage";
import { SignUpPage } from "./pages/SignUpPage";
// import { Dashboard } from "./pages/Dashboard";

import { Footer } from "./Footer";
import { HeaderC } from "./HeaderC";
import Dashboard from "./pages/Dashboard";

export const Navigation = () => {
    return (
        <>
        <Router>
          <div className="App">
            <HeaderC />
            <div id="page-body">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/recipes-list" element={<RecipesListPage />} />
                <Route path="/recipe/:name" element={<RecipePage />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                {/* <PrivateRout path="=/dashboard" element={<Dashboard />} /> */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </Router>
        <Footer />
      </>
    );
}