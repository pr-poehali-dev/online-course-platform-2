
import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

type ModuleType = {
  id: string;
  title: string;
  duration: string;
  lessons: {
    id: string;
    title: string;
    duration: string;
    isPreview?: boolean;
  }[];
};

const CourseContent = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>("module-1");

  const modules: ModuleType[] = [
    {
      id: "module-1",
      title: "Знакомство с программированием",
      duration: "6 часов",
      lessons: [
        { id: "lesson-1-1", title: "Введение в курс", duration: "15 мин", isPreview: true },
        { id: "lesson-1-2", title: "Установка необходимого ПО", duration: "35 мин" },
        { id: "lesson-1-3", title: "Основы программирования", duration: "1 ч 10 мин" },
        { id: "lesson-1-4", title: "Переменные и типы данных", duration: "55 мин" },
        { id: "lesson-1-5", title: "Практическое задание №1", duration: "45 мин" },
      ]
    },
    {
      id: "module-2",
      title: "Алгоритмы и структуры данных",
      duration: "8 часов",
      lessons: [
        { id: "lesson-2-1", title: "Массивы и объекты", duration: "1 ч 05 мин" },
        { id: "lesson-2-2", title: "Базовые алгоритмы", duration: "1 ч 30 мин", isPreview: true },
        { id: "lesson-2-3", title: "Функции и методы", duration: "50 мин" },
        { id: "lesson-2-4", title: "Проект: разработка калькулятора", duration: "2 ч" },
      ]
    },
    {
      id: "module-3",
      title: "Основы веб-разработки",
      duration: "10 часов",
      lessons: [
        { id: "lesson-3-1", title: "HTML и семантическая верстка", duration: "1 ч 15 мин" },
        { id: "lesson-3-2", title: "CSS стилизация", duration: "1 ч 45 мин" },
        { id: "lesson-3-3", title: "JavaScript для веб-страниц", duration: "2 ч" },
        { id: "lesson-3-4", title: "Проект: личный блог", duration: "2 ч 30 мин" },
      ]
    },
    {
      id: "module-4",
      title: "Продвинутая разработка",
      duration: "12 часов",
      lessons: [
        { id: "lesson-4-1", title: "Фреймворки и библиотеки", duration: "1 ч 30 мин" },
        { id: "lesson-4-2", title: "Работа с API", duration: "1 ч 45 мин" },
        { id: "lesson-4-3", title: "Базы данных", duration: "2 ч 20 мин" },
        { id: "lesson-4-4", title: "Финальный проект", duration: "3 ч" },
      ]
    },
  ];

  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0);
  
  return (
    <section id="content" className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full font-medium text-sm mb-4">
            Содержание курса
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Подробная программа обучения
          </h2>
          <p className="text-lg text-secondary/70">
            Курс состоит из 4 модулей и {totalLessons} уроков. Каждый модуль включает теоретические материалы и практические задания
          </p>
          
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-sm text-secondary/70">
              <span>Прогресс курса</span>
              <span>36 часов контента</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto border rounded-xl overflow-hidden shadow-sm">
          <Accordion
            type="single"
            collapsible
            value={expandedModule}
            onValueChange={setExpandedModule}
            className="w-full"
          >
            {modules.map((module, index) => (
              <AccordionItem 
                key={module.id} 
                value={module.id}
                className="border-b last:border-0"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline">
                  <div className="flex items-center text-left">
                    <div className="bg-primary-100 text-primary w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold">{module.title}</h3>
                      <p className="text-sm text-secondary/70">{module.lessons.length} уроков • {module.duration}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-0">
                  <div className="space-y-1 pl-20 pr-6 pb-6">
                    {module.lessons.map((lesson) => (
                      <div key={lesson.id} className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <Icon name="PlayCircle" className="text-primary w-5 h-5" />
                          <span className="font-medium">{lesson.title}</span>
                          {lesson.isPreview && (
                            <Badge variant="outline" className="ml-2 text-xs bg-green-50 text-green-700 hover:bg-green-50">
                              Бесплатно
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-secondary/70">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
