
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQSection = () => {
  const faqs: FAQItem[] = [
    {
      question: "Нужен ли мне опыт программирования для прохождения курса?",
      answer: "Нет, наш курс подходит как для начинающих, так и для тех, кто хочет улучшить свои навыки. Мы начинаем с основ и постепенно переходим к более сложным темам. В курсе предусмотрены дополнительные материалы для новичков."
    },
    {
      question: "Как долго я буду иметь доступ к материалам курса?",
      answer: "После покупки курса вы получаете пожизненный доступ ко всем материалам, включая будущие обновления. Вы можете изучать материалы в своем темпе и возвращаться к ним в любое время."
    },
    {
      question: "Будет ли обратная связь по моим проектам?",
      answer: "Да, в тарифах «Продвинутый» и «Корпоративный» предусмотрена персональная обратная связь от менторов по вашим проектам. Вы сможете получать комментарии, рекомендации и советы по улучшению своего кода."
    },
    {
      question: "Могу ли я сменить тариф в процессе обучения?",
      answer: "Конечно! Вы можете обновить свой тариф в любой момент, доплатив разницу в стоимости. Просто свяжитесь с нашей службой поддержки, и мы поможем вам с переходом на другой тариф."
    },
    {
      question: "Поможет ли курс мне найти работу?",
      answer: "В рамках тарифов «Продвинутый» и «Корпоративный» мы предоставляем помощь с трудоустройством. Это включает в себя рекомендации по составлению резюме, подготовку к техническим интервью и доступ к нашей базе партнеров-работодателей."
    },
    {
      question: "Могу ли я получить возврат средств, если курс мне не подойдет?",
      answer: "Да, у нас есть политика возврата средств в течение 14 дней с момента покупки. Если вы попробовали курс и решили, что он вам не подходит, мы вернем вам полную стоимость без дополнительных вопросов."
    },
    {
      question: "Сколько времени нужно уделять курсу еженедельно?",
      answer: "Для достижения оптимальных результатов мы рекомендуем уделять обучению 8-10 часов в неделю. Однако вы можете адаптировать график под свои возможности, так как доступ к материалам не ограничен по времени."
    },
    {
      question: "Какие технологии и языки программирования изучаются в курсе?",
      answer: "В курсе изучаются современные технологии веб-разработки, включая HTML, CSS, JavaScript, React, Node.js, а также основы баз данных и алгоритмов. Программа регулярно обновляется, чтобы соответствовать текущим требованиям рынка."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full font-medium text-sm mb-4">
            Часто задаваемые вопросы
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Ответы на популярные вопросы
          </h2>
          <p className="text-lg text-secondary/70">
            Если вы не нашли ответ на свой вопрос, свяжитесь с нами через форму обратной связи
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-gray-200 last:border-0"
              >
                <AccordionTrigger className="text-left font-heading font-medium text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary/80 text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-secondary/70 mb-4">Остались вопросы? Мы с радостью на них ответим!</p>
          <a 
            href="mailto:info@skillmaster.ru" 
            className="text-primary hover:underline font-medium"
          >
            info@skillmaster.ru
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
