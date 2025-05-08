
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type TestimonialProps = {
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, rating }) => {
  return (
    <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img 
              src={author.avatar} 
              alt={author.name} 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-secondary">{author.name}</h4>
              <p className="text-sm text-secondary/70">{author.role}</p>
            </div>
          </div>
          <div className="flex text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon 
                key={i} 
                name="Star" 
                className={`w-4 h-4 ${i < rating ? 'fill-yellow-500' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>
        
        <p className="text-secondary/80 flex-grow">{content}</p>
        
        <div className="mt-6 text-primary">
          <Icon name="Quote" className="w-8 h-8 opacity-20" />
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials: TestimonialProps[] = [
    {
      content: "Этот курс полностью изменил мое представление о программировании. За 8 недель я научился создавать полноценные веб-приложения и получил работу в IT-компании.",
      author: {
        name: "Андрей Смирнов",
        role: "Frontend Developer",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      rating: 5
    },
    {
      content: "Великолепная структура материала и постоянная поддержка ментора помогли мне быстро освоить новые технологии. Рекомендую всем, кто хочет быстро войти в IT.",
      author: {
        name: "Елена Васильева",
        role: "UX/UI Designer",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      rating: 5
    },
    {
      content: "Практические проекты в курсе действительно приближены к реальной работе. Благодаря этому я смог сразу применить знания на практике в своей компании.",
      author: {
        name: "Дмитрий Козлов",
        role: "Project Manager",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      rating: 4
    },
    {
      content: "Я пробовала разные курсы, но именно здесь нашла идеальный баланс теории и практики. Менторы всегда на связи и готовы помочь с любым вопросом.",
      author: {
        name: "Марина Иванова",
        role: "Junior Developer",
        avatar: "https://randomuser.me/api/portraits/women/56.jpg"
      },
      rating: 5
    },
    {
      content: "Курс отлично структурирован, объяснения понятны даже новичку. После завершения смог самостоятельно разработать сайт для своего бизнеса.",
      author: {
        name: "Игорь Петров",
        role: "Entrepreneur",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg"
      },
      rating: 4
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full font-medium text-sm mb-4">
            Отзывы студентов
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Что говорят наши выпускники
          </h2>
          <p className="text-lg text-secondary/70">
            Более 2000 студентов уже прошли наш курс и поделились своими впечатлениями
          </p>
        </div>
        
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index}
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
        
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Посмотреть все отзывы
            <Icon name="ArrowRight" className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
