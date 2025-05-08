
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary rounded-md p-1">
            <Icon name="Podcast" className="text-white h-6 w-6" />
          </div>
          <span className="font-heading font-bold text-xl text-primary">SkillMaster</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#features">Преимущества</NavLink>
          <NavLink href="#content">Содержание</NavLink>
          <NavLink href="#testimonials">Отзывы</NavLink>
          <NavLink href="#pricing">Цены</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Войти
          </Button>
          <Button>
            Купить курс
            <Icon name="ArrowRight" className="ml-1" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a 
      href={href}
      className="text-secondary/80 hover:text-primary transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  );
};

export default Header;
