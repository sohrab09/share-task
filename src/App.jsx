import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
