import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-surface-container-high full-width transition-opacity duration-200 mt-stack-xxl">
      <div className="max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-stack-xl gap-stack-md">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="font-headline-md text-headline-md text-primary tracking-tight font-bold">코코톡 (CocoTalk)</span>
          <span className="text-secondary dark:text-secondary-fixed font-label-sm text-label-sm">© 2024 CocoTalk. 모든 단어에 사랑을 담아.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-stack-lg">
          <Link to="#" className="text-on-surface-variant font-label-sm text-label-sm hover:underline text-primary transition-colors">개인정보 처리방침</Link>
          <Link to="#" className="text-on-surface-variant font-label-sm text-label-sm hover:underline text-primary transition-colors">이용약관</Link>
          <Link to="#" className="text-on-surface-variant font-label-sm text-label-sm hover:underline text-primary transition-colors">고객 문의</Link>
          <Link to="#" className="text-on-surface-variant font-label-sm text-label-sm hover:underline text-primary transition-colors">지원 센터</Link>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
            <span className="material-symbols-outlined">public</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
            <span className="material-symbols-outlined">mail</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
