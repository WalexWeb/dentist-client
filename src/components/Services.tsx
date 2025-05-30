import { m } from "framer-motion";

const services = [
  {
    title: "Профессиональная гигиена",
    price: "от 5500 руб.",
    description:
      "Комплексная чистка зубов с удалением налета и камня ультразвуком и AirFlow, полировка и фторирование для укрепления эмали. Рекомендуется каждые 6 месяцев.",
  },
  {
    title: "Лечение кариеса",
    price: "от 5500 руб.",
    description:
      "Безболезненное лечение с применением современных пломбировочных материалов (светоотверждаемые композиты). Сохранение естественной формы и цвета зуба.",
  },
  {
    title: "Эндодонтическое лечение",
    price: "от 8000 руб.",
    description:
      "Лечение корневых каналов под микроскопом с гарантией качества. Используем современные инструменты и методы дезинфекции.",
  },
  {
    title: "Отбеливание",
    price: "от 15000 руб.",
    description:
      "Безопасное профессиональное отбеливание Zoom 4 с защитой эмали. Результат до 8 тонов светлее. Эффект сохраняется 1-2 года.",
  },
];

const Services = () => {
  return (
    <div
      id="услуги"
      className="pt-10 pb-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-6">
        <m.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
        >
          Услуги и цены
        </m.h2>

        <m.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {services.map((service, index) => (
            <m.div
              key={index}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <span className="bg-blue-100 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </m.div>
          ))}
        </m.div>

        <m.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-sky-800 rounded-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Индивидуальный подход к каждому пациенту
          </h3>
          <p className="mb-6 mx-auto">
            Точная стоимость лечения определяется после осмотра и может
            отличаться от указанной.
          </p>
          <a
            href="#контакты"
            className="inline-block px-8 py-3 bg-white text-sky-800 font-medium rounded-full hover:bg-blue-50 transition-colors"
          >
            Записаться на консультацию
          </a>
        </m.div>
      </div>
    </div>
  );
};

export default Services;
