
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type PlanFeature = {
  title: string;
  included: boolean;
};

type PricingPlanProps = {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  ctaText: string;
};

const PricingPlan: React.FC<PricingPlanProps & { billingCycle: 'monthly' | 'yearly' }> = ({
  name,
  price,
  description,
  features,
  isPopular,
  ctaText,
  billingCycle
}) => {
  return (
    <Card className={`border h-full ${isPopular ? 'border-primary shadow-md relative' : 'shadow-sm'}`}>
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
          Популярный выбор
        </Badge>
      )}
      
      <CardHeader className="pt-8 px-6">
        <h3 className="text-xl font-heading font-bold">{name}</h3>
        <div className="mt-4">
          <span className="text-3xl font-bold">₽{price[billingCycle].toLocaleString()}</span>
          {billingCycle === 'monthly' ? (
            <span className="text-secondary/70 text-sm ml-1">/ месяц</span>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-secondary/70 text-sm">/ год</span>
              <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                Экономия 30%
              </Badge>
            </div>
          )}
        </div>
        <p className="text-secondary/70 mt-2">{description}</p>
      </CardHeader>
      
      <CardContent className="px-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`mt-1 mr-3 ${feature.included ? 'text-green-500' : 'text-gray-300'}`}>
                <Icon name={feature.included ? 'CheckCircle' : 'XCircle'} className="w-5 h-5" />
              </div>
              <span className={feature.included ? 'text-secondary' : 'text-secondary/50 line-through'}>
                {feature.title}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="px-6 pb-8">
        <Button 
          className={`w-full ${isPopular ? '' : 'bg-secondary hover:bg-secondary/90'}`}
          size="lg"
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const PricingSection = () => {
  const pricingPlans: PricingPlanProps[] = [
    {
      name: "Базовый",
      price: {
        monthly: 1990,
        yearly: 16990
      },
      description: "Идеально для начинающих, кто хочет попробовать программирование",
      features: [
        { title: "Доступ к 20+ видеоурокам", included: true },
        { title: "Базовые проекты для портфолио", included: true },
        { title: "Тесты для закрепления материала", included: true },
        { title: "Доступ к сообществу студентов", included: true },
        { title: "Обратная связь от менторов", included: false },
        { title: "Сертификат об окончании", included: false },
        { title: "Помощь с трудоустройством", included: false },
      ],
      ctaText: "Начать обучение",
    },
    {
      name: "Продвинутый",
      price: {
        monthly: 3990,
        yearly: 33990
      },
      description: "Наиболее полный курс для серьезного обучения программированию",
      features: [
        { title: "Доступ ко всем 50+ видеоурокам", included: true },
        { title: "6 реальных проектов для портфолио", included: true },
        { title: "Тесты для закрепления материала", included: true },
        { title: "Доступ к закрытому сообществу", included: true },
        { title: "Еженедельная обратная связь от менторов", included: true },
        { title: "Сертификат об окончании курса", included: true },
        { title: "Помощь с трудоустройством", included: true },
      ],
      isPopular: true,
      ctaText: "Выбрать тариф",
    },
    {
      name: "Корпоративный",
      price: {
        monthly: 15990,
        yearly: 159990
      },
      description: "Для компаний, которые хотят обучить своих сотрудников",
      features: [
        { title: "Доступ ко всем материалам курса", included: true },
        { title: "Неограниченное количество проектов", included: true },
        { title: "Индивидуальная программа обучения", included: true },
        { title: "Корпоративное сообщество", included: true },
        { title: "Персональный ментор для команды", included: true },
        { title: "Корпоративные сертификаты", included: true },
        { title: "Аналитика обучения сотрудников", included: true },
      ],
      ctaText: "Связаться с нами",
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full font-medium text-sm mb-4">
            Тарифы курса
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Инвестируйте в свои знания
          </h2>
          <p className="text-lg text-secondary/70">
            Выберите тариф, который подходит именно вам. Все тарифы включают пожизненный доступ к материалам
          </p>
        </div>
        
        <Tabs defaultValue="monthly" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="monthly">Помесячно</TabsTrigger>
              <TabsTrigger value="yearly">Годовой доступ</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="monthly" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingPlan 
                  key={index} 
                  {...plan} 
                  billingCycle="monthly" 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="yearly" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingPlan 
                  key={index} 
                  {...plan} 
                  billingCycle="yearly" 
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h3 className="text-xl font-heading font-semibold mb-3">Нужна дополнительная информация?</h3>
            <p className="text-secondary/70 mb-5">
              Если у вас есть вопросы о курсе или вы хотите узнать больше о корпоративных тарифах, свяжитесь с нашей командой.
            </p>
            <Button variant="outline" className="gap-2">
              <Icon name="Phone" className="w-4 h-4" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
