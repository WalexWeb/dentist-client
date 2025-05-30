import { motion } from "framer-motion";
import logo from "../images/image.png";

const Hero = () => {
  return (
    <section id="главная" className="relative overflow-hidden py-20 md:py-32">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Профессиональный{" "}
            <span className="text-sky-800">стоматологический уход</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600"
          >
            Стоматолог Зноева Александра с 8-летним опытом работы предлагает
            качественное лечение и индивидуальный подход к каждому пациенту.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4"
          >
            <a
              href="#услуги"
              className="px-8 py-3 z-10 bg-sky-800 text-white font-medium rounded-full hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Услуги
            </a>
            <a
              href="#контакты"
              className="px-8 py-3 border-2 border-sky-800 text-sky-800 font-medium rounded-full hover:bg-blue-50 transition-colors"
            >
              Контакты
            </a>
          </motion.div>
        </div>

        <div className="md:w-1/2">
          <motion.img
            src={logo}
            alt="Стоматолог Зноева Александра Юрьевна"
            className="max-w-2xl mx-auto"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
};

export default Hero;
