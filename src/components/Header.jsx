import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 메뉴 전환 시 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const getLinkClass = (path, isMobile = false) => {
    const isActive = location.pathname === path;
    if (isMobile) {
      return isActive
        ? "block w-full text-primary font-bold bg-primary/5 px-4 py-3 rounded-xl font-body-md text-body-md transition-all"
        : "block w-full text-on-surface-variant px-4 py-3 rounded-xl font-body-md text-body-md hover:bg-surface-container transition-all";
    }
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

        {/* 데스크톱 네비게이션 */}
        <div className="hidden md:flex items-center gap-stack-xl">
          <a href="/#about" className={getLinkClass('#about')}>서비스 소개</a>
          <a href="/#program" className={getLinkClass('#program')}>발달 프로그램</a>
          <Link to="/social-matching" className={getLinkClass('/social-matching')}>사회성 매칭</Link>
          <a href="/#clinical" className={getLinkClass('#clinical')}>임상가 전용</a>
          <Link to="/parent-dashboard" className={getLinkClass('/parent-dashboard')}>부모 전용 홈티</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/screening" className="hidden sm:inline-block bg-primary text-on-primary px-6 py-3 rounded-2xl font-label-md text-label-md hover:bg-primary-container transition-all duration-300 soft-shadow hover:scale-105 active:scale-95">
            무료 발달 스크리닝
          </Link>

          {/* 모바일 햄버거 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-surface-container transition-colors text-on-surface-variant"
            aria-label="메뉴 토글"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* 모바일 네비게이션 드롭다운 */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-outline-variant/30 px-margin-mobile py-4 shadow-inner space-y-2 animate-fade-in">
          <a href="/#about" onClick={() => setIsMenuOpen(false)} className={getLinkClass('#about', true)}>서비스 소개</a>
          <a href="/#program" onClick={() => setIsMenuOpen(false)} className={getLinkClass('#program', true)}>발달 프로그램</a>
          <Link to="/social-matching" className={getLinkClass('/social-matching', true)}>사회성 매칭</Link>
          <a href="/#clinical" onClick={() => setIsMenuOpen(false)} className={getLinkClass('#clinical', true)}>임상가 전용</a>
          <Link to="/parent-dashboard" className={getLinkClass('/parent-dashboard', true)}>부모 전용 홈티</Link>
          
          <div className="pt-4 border-t border-outline-variant/20 sm:hidden">
            <Link to="/screening" className="block w-full text-center bg-primary text-on-primary py-3.5 rounded-2xl font-label-md text-label-md hover:bg-primary-container transition-all soft-shadow">
              무료 발달 스크리닝
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
