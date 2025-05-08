
import React from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary rounded-md p-1">
                <Icon name="Podcast" className="text-white h-5 w-5" />
              </div>
              <span className="font-heading font-bold text-xl">SkillMaster</span>
            </div>
            <p className="text-white/70 mb-6">
              Современное онлайн-образование для тех, кто хочет развиваться и достигать новых высот
            </p>
            <div className="flex gap-4">
              <SocialIcon name="Facebook" />
              <SocialIcon name="Instagram" />
              <SocialIcon name="Youtube" />
              <SocialIcon name="Twitter" />
              <SocialIcon name="Linkedin" />
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Меню</h4>
            <ul className="space-y-3">
              <FooterLink href="#features">Преимущества</FooterLink>
              <FooterLink href="#content">Содержание</FooterLink>
              <FooterLink href="#testimonials">Отзывы</FooterLink>
              <FooterLink href="#pricing">Цены</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Информация</h4>
            <ul className="space-y-3">
              <FooterLink href="#">О нас</FooterLink>
              <FooterLink href="#">Блог</FooterLink>
              <FooterLink href="#">Политика конфиденциальности</FooterLink>
              <FooterLink href="#">Условия использования</FooterLink>
              <FooterLink href="#">Контакты</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Подпишитесь</h4>
            <p className="text-white/70 mb-4">
              Получайте новости и специальные предложения на вашу почту
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Ваш email" 
                className="bg-white/10 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary"
              />
              <Button>
                <Icon name="Send" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-white/60 text-sm">
          <p>© {currentYear} SkillMaster. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ name }: { name: string }) => {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
      aria-label={name}
    >
      <Icon name={name} className="h-5 w-5" />
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-white/70 hover:text-white transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
