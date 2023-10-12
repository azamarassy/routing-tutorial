import React, { useState, useEffect, } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/Pages/HomePage';
import BlogPage from './components/Pages/BlogPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* ヘッダーコンポーネント */}

        <Routes>
          <Route path="/" element={ <HomePage /> }/> {/*ルート URL ("/") にアクセスしたときに <HomePage /> コンポーネントを表示するためのルーティング設定 */}
          <Route path="/blog" element={ <BlogPage /> }/>  {/*URL ("/blog") にアクセスしたときに <BlogPage /> コンポーネントを表示するためのルーティング設定 */}
        </Routes>
      </div>
   </Router>
  );
};


export default App;
