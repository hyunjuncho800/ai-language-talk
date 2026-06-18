import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? "text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary font-body-md text-body-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors"
      : "text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors";
  };

  return (
    <header className={`bg-background dark:bg-background ${isScrolled ? 'shadow-md' : 'shadow-sm'} docked full-width top-0 sticky z-50 transition-all duration-300 ease-in-out`}>
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-max-width mx-auto">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim tracking-tight">
            코코톡 (CocoTalk)
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-stack-xl">
          <a href="/#about" className={getLinkClass('#about')}>서비스 소개</a>
          <a href="/#program" className={getLinkClass('#program')}>발달 프로그램</a>
          <a href="/#matching" className={getLinkClass('#matching')}>사회성 매칭</a>
          <a href="/#clinical" className={getLinkClass('#clinical')}>임상가 전용</a>
          <Link to="/parent-dashboard" className={getLinkClass('/parent-dashboard')}>부모 전용 홈티</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/screening" className="bg-primary text-on-primary px-6 py-3 rounded-2xl font-label-md text-label-md hover:bg-primary-container transition-all duration-300 soft-shadow hover:scale-105 active:scale-95">
            무료 발달 스크리닝
          </Link>
        </div>
      </nav>
    </header>
  );
}
