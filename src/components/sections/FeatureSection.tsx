
import React from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  iconColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, iconColor = "text-primary" }) => {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow duration-300 h-full">
      <CardContent className="p-6 space-y-4">
        <div className={`w-12 h-12 rounded-md ${iconColor} bg-primary-50 flex items-center justify-center`}>
          <Icon name={icon} className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-heading font-bold">{title}</h3>
        <p className="text-secondary/70">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeatureSection = () => {
  const features: FeatureCardProps[] = [
    {
      icon: "VideoIcon",
      title: "Видеоуроки HD качества",
      description: "50+ часов профессионально записанных видеоуроков с практическими примерами",
      iconColor: "text-accent"
    },
    {
      icon: "Users",
      title: "Менторская поддержка",
      description: "Консультации с опытными разработчиками и персональные рекомендации",
    },
    {
      icon: "Code2",
      title: "Практические проекты",
      description: "Создайте 6 реальных проектов для вашего профессионального портфолио",
      iconColor: "text-blue-500"
    },
    {
      icon: "Certificate",
      title: "Сертификат об окончании",
      description: "Подтвердите свои навыки официальным сертификатом, признаваемым работодателями",
      iconColor: "text-green-600"
    },
    {
      icon: "FileText",
      title: "Дополнительные материалы",
      description: "Рабочие тетради, шпаргалки и библиотека полезных ресурсов",
      iconColor: "text-indigo-600"
    },
    {
      icon: "GraduationCap",
      title: "Помощь с трудоустройством",
      description: "Советы по составлению резюме и подготовке к интервью с потенциальными работодателями",
      iconColor: "text-rose-600"
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full font-medium text-sm mb-4">
            Почему наш курс
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Все необходимое для успешного обучения
          </h2>
          <p className="text-lg text-secondary/70">
            Мы разработали комплексную программу, которая поможет вам быстро освоить навыки и начать применять их на практике
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
