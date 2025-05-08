import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full font-medium text-sm">
            Онлайн-курс 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-secondary">
            Освой <span className="text-primary">продвинутую разработку</span>{" "}
            за 8 недель
          </h1>
          <p className="text-lg text-secondary/80 md:text-xl max-w-lg">
            Самый эффективный курс по программированию с реальными проектами и
            менторством от опытных разработчиков
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/subscription">
              <Button size="lg" className="group">
                Начать обучение
                <Icon
                  name="ArrowRight"
                  className="ml-1 transition-transform group-hover:translate-x-1"
                />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="PlayCircle" />
              Смотреть демо
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((id) => (
                <img
                  key={id}
                  src={`https://randomuser.me/api/portraits/men/${id + 30}.jpg`}
                  alt="Student"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-medium border-2 border-white">
                +2K
              </div>
            </div>
            <div className="text-sm text-secondary/70">
              <span className="text-secondary font-semibold">2.5k+</span>{" "}
              учеников уже с нами
            </div>
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-accent-light rounded-lg -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary-100 rounded-lg -z-10"></div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Developer coding"
              className="w-full h-[300px] object-cover"
            />
            <div className="p-6 pb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                  Профессия
                </span>
                <div className="flex items-center text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon
                      key={star}
                      name="Star"
                      className="w-4 h-4 fill-current"
                    />
                  ))}
                  <span className="ml-1 text-xs font-medium text-secondary">
                    4.9
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading mb-2">
                Полный курс по программированию
              </h3>
              <p className="text-secondary/70 text-sm mb-4">
                Освойте навыки, которые сделают вас востребованным разработчиком
                на рынке труда
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Instructor"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium">Алексей Петров</span>
                </div>
                <div className="text-primary-700 font-bold">₽15,990</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
