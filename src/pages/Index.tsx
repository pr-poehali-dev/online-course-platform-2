import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import CourseContent from "@/components/sections/CourseContent";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <CourseContent />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Готовы начать свой путь в программировании?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Присоединяйтесь к тысячам студентов, которые уже изменили свою
                жизнь с помощью нашего курса
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/subscription">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Записаться на курс
                    <Icon name="ArrowRight" className="ml-1" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors"
        aria-label="Back to top"
      >
        <Icon name="ArrowUp" className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Index;
