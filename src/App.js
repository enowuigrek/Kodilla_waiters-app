import { Routes, Route } from 'react-router-dom';
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import Home from './components/pages/Home/Home';
import Table from './components/pages/Table/Table';
import NotFound from './components/pages/NotFound/NotFound';
import { Container } from "react-bootstrap";import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesRedux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => fetchTables(dispatch), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<Table />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
