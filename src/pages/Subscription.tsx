
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const Subscription = () => {
  const [plan, setPlan] = useState('advanced');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [formStep, setFormStep] = useState(0);

  const plans = {
    basic: {
      name: "Базовый",
      price: 1990,
      description: "Доступ к базовым материалам курса"
    },
    advanced: {
      name: "Продвинутый",
      price: 3990,
      description: "Полный доступ к курсу с обратной связью"
    },
    corporate: {
      name: "Корпоративный",
      price: 15990,
      description: "Для команд с персональным ментором"
    }
  };

  const nextStep = () => {
    if (formStep === 0 && email && name && agreed) {
      setFormStep(1);
    } else if (formStep === 1) {
      setFormStep(2);
    }
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 md:py-20 bg-gray-50">
        <div className="container max-w-3xl">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Подписка на курс
            </h1>
            <p className="text-lg text-secondary/70">
              Всего несколько шагов отделяют вас от получения доступа к курсу
            </p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {['Личные данные', 'Выбор плана', 'Завершение'].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    formStep >= index ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {formStep > index ? (
                      <Icon name="Check" className="h-5 w-5" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    formStep >= index ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute h-1 bg-gray-200 w-full rounded"></div>
              <div 
                className="absolute h-1 bg-primary rounded transition-all duration-300" 
                style={{ width: `${formStep * 50}%` }}
              ></div>
            </div>
          </div>
          
          <Card className="shadow-md">
            {formStep === 0 && (
              <>
                <CardHeader>
                  <CardTitle>Личные данные</CardTitle>
                  <CardDescription>Пожалуйста, заполните информацию о себе</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input 
                      id="name" 
                      placeholder="Введите ваше полное имя" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@email.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox 
                      id="terms" 
                      checked={agreed}
                      onCheckedChange={() => setAgreed(!agreed)}
                    />
                    <Label 
                      htmlFor="terms" 
                      className="text-sm leading-tight cursor-pointer"
                    >
                      Я согласен с <a href="#" className="text-primary hover:underline">условиями использования</a> и <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a>
                    </Label>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link to="/">
                    <Button variant="outline">Назад</Button>
                  </Link>
                  <Button 
                    onClick={nextStep}
                    disabled={!name || !email || !agreed}
                  >
                    Далее
                    <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </>
            )}
            
            {formStep === 1 && (
              <>
                <CardHeader>
                  <CardTitle>Выберите план</CardTitle>
                  <CardDescription>Выберите подходящий вам тарифный план</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={plan} 
                    onValueChange={setPlan}
                    className="space-y-4"
                  >
                    {Object.entries(plans).map(([key, planData]) => (
                      <div 
                        key={key} 
                        className={`flex items-center justify-between p-4 rounded-lg border ${
                          plan === key ? 'border-primary bg-primary/5' : 'border-gray-200'
                        } transition-colors`}
                      >
                        <div className="flex items-start gap-3">
                          <RadioGroupItem 
                            value={key} 
                            id={`plan-${key}`} 
                            className="mt-1"
                          />
                          <div>
                            <Label 
                              htmlFor={`plan-${key}`} 
                              className="text-lg font-medium cursor-pointer"
                            >
                              {planData.name}
                            </Label>
                            <p className="text-sm text-secondary/70">
                              {planData.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-lg font-bold">
                          ₽{planData.price.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                  >
                    Назад
                  </Button>
                  <Button onClick={nextStep}>
                    Далее
                    <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </>
            )}
            
            {formStep === 2 && (
              <>
                <CardHeader>
                  <CardTitle>Подтверждение заказа</CardTitle>
                  <CardDescription>Проверьте детали вашего заказа</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-secondary/70">Имя:</span>
                      <span className="font-medium">{name}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-secondary/70">Email:</span>
                      <span className="font-medium">{email}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-secondary/70">План:</span>
                      <span className="font-medium">{plans[plan].name}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t mt-2">
                      <span className="text-secondary/70">Итого:</span>
                      <span className="font-bold text-lg">₽{plans[plan].price.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg flex gap-2">
                    <Icon name="Info" className="h-5 w-5 shrink-0 mt-0.5" />
                    <p className="text-sm">
                      После нажатия кнопки "Оплатить" вы будете перенаправлены на безопасную страницу оплаты.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                  >
                    Назад
                  </Button>
                  <Button className="gap-2">
                    <Icon name="CreditCard" className="h-4 w-4" />
                    Оплатить
                  </Button>
                </CardFooter>
              </>
            )}
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Subscription;
</current-code>

<pp-write filepath="src/App.tsx" partial>
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="/" element={<Index />} />
  <Route path="/subscription" element={<Subscription />} />
  <Route path="*" element={<NotFound />} />
