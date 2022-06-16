import { Routes, Route } from 'react-router-dom';
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import HomePage from './components/pages/HomePage/HomePage';
import TablePage from './components/pages/TablePage/TablePage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import EditTablePage from './components/pages/EditTablePage/EditTablePage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesRedux';

function App() {
  const dispatch = useDispatch();

  useEffect( () => dispatch(fetchTables()),
    [dispatch]
);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table/:id" element={<TablePage />} />
        <Route path='/table/edit/:id' element={<EditTablePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
