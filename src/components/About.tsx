import { m } from "framer-motion";
import image from "../images/Znoeva.jpeg";

const About = () => {
  return (
    <section id="о-враче" className="pt-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-12 md:mb-0">
            <img
              src={image}
              className="rounded-2xl shadow-xl max-w-md mx-auto"
            />
          </div>

          <div className="md:w-2/3 md:pl-16">
            <m.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Стоматолог Зноева Александра Юрьевна
            </m.h2>

            <m.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg text-gray-600 mb-8"
            >
              <p>
                Опытный врач-стоматолог с 8-летним стажем работы. Специалист в
                области терапевтической стоматологии, ДОПИСАТЬ
              </p>
              <p>
                Регулярно повышает квалификацию на международных конференциях и
                мастер-классах. Применяет современные методики лечения с
                использованием передового оборудования.
              </p>
            </m.div>

            <m.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-sky-800 mb-3">
                  Образование
                </h3>
                <ul className="space-y-2">
                  <li>Курский государственный медицинский университет</li>
                  <li>Центр ДПО "Образовательный стандарт"</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-sky-800 mb-3">
                  Опыт работы
                </h3>
                <ul className="space-y-2">
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
