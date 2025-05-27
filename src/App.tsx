import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-50 to-white font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
