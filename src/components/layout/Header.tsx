import { m } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-100 w-screen flex items-center justify-between bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <m.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <img
            // src={logo}
            className="h-12 w-12 object-contain"
          />
          <span className="text-2xl font-bold text-blue-600">Znoeva</span>
        </m.div>

        <nav className="md:flex space-x-8">
          {["Главная", "О враче", "Услуги", "Контакты"].map((item, index) => (
            <m.a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item}
            </m.a>
          ))}
        </nav>

        <m.div whileHover={{ scale: 1.05 }} className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </m.div>
      </div>
    </header>
  );
};

export default Header;
