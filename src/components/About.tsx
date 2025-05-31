import { m } from "framer-motion";
import image from "../images/Znoeva.jpeg";

const About = () => {
  return (
    <section id="о-враче" className="pt-12 md:pt-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/3 mb-8 md:mb-12 lg:mb-0">
            <img
              src={image}
              alt="Зноева Александра Юрьевна"
              className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
            />
          </div>

          <div className="w-full lg:w-2/3 lg:pl-8 xl:pl-16">
            <m.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6"
            >
              Стоматолог Зноева Александра Юрьевна
            </m.h2>

            <m.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-sm sm:prose-base md:prose-lg text-gray-600 mb-6 md:mb-8"
            >
              <p>
                Опытный врач-стоматолог с 8-летним стажем работы. Специалист в
                области терапевтической стоматологии, обладает развитым
                клиническим мышлением и точно вычленяет суть проблемы, не
                перегружая пациента лишними процедурами. Пациенты чувствуют себя
                спокойно на приёме — благодаря мягкому подходу и умению найти
                контакт с любым человеком. Легко адаптируется под запросы и
                состояние каждого, будь то сложный случай или обычная
                профилактика.
                <br />
                <br />
                Регулярно повышает квалификацию на международных конференциях и
                мастер-классах. Применяет современные методики лечения с
                использованием передового оборудования.
              </p>
            </m.div>

            <m.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            >
              <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-sky-800 mb-2 sm:mb-3">
                  Образование
                </h3>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Курский государственный медицинский университет</li>
                  <li>Центр ДПО "Образовательный стандарт"</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-sky-800 mb-2 sm:mb-3">
                  Опыт работы
                </h3>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Стоматология «Еврокаппа» (2023-н.в.)</li>
                  <li>ЛДЦ Кутузовский (2022-2023)</li>
                  <li>Сеть стоматологических клиник «ДентаЭль» (2020-2023)</li>
                </ul>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
