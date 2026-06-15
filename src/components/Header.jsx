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
          <Link to="/" className={getLinkClass('/')}>홈</Link>
          <Link to="/screening" className={getLinkClass('/screening')}>발달 스크리닝</Link>
          <Link to="#" className={getLinkClass('/centers')}>발달센터 찾기</Link>
          <Link to="#" className={getLinkClass('/about')}>서비스 소개</Link>
        </div>
        <Link to="/screening" className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md hover:bg-primary-container transition-all duration-300">
          시작하기
        </Link>
      </nav>
    </header>
  );
}
