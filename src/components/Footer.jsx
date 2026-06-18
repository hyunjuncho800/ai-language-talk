import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-surface-container-high full-width transition-opacity duration-200 mt-stack-xxl border-t border-surface-variant">
      <div className="max-w-max-width mx-auto flex flex-col w-full px-margin-mobile md:px-margin-desktop py-stack-xl gap-stack-lg">
        {/* Disclaimer Area */}
        <div className="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/30 text-center md:text-left">
          <p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
            <strong>전문가 면책 조항 (Disclaimer):</strong> 본 서비스에서 제공하는 발달 스크리닝, 프로그램 추천 및 매칭 정보는 부모님의 관찰을 돕기 위한 참고용 보조 지표입니다. 이는 의학적 진단이나 전문적인 의료 상담, 치료를 대신할 수 없으며, 정확한 진단은 반드시 전문의나 공인된 임상 전문가와 상담하시기 바랍니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-stack-md pt-4">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="font-headline-md text-headline-md text-primary tracking-tight font-bold">코코톡 (CocoTalk)</span>
            <span className="text-secondary dark:text-secondary-fixed font-label-sm text-label-sm">© 2026 CocoTalk. 모든 단어에 사랑을 담아.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-stack-lg">
            <Link to="#" className="text-on-surface-variant font-label-sm text-label-sm hover:underline text-primary transition-colors">개인정보 처리방침</Link>
            <Link to="#" className="text-on-surface-variant font-label-sm text-label-sm hover:underline text-primary transition-colors">이용약관</Link>
            <Link to="#" className="text-on-surface-variant font-label-sm text-label-sm hover:underline text-primary transition-colors">기관 제휴 문의</Link>
            <Link to="#" className="text-on-surface-variant font-label-sm text-label-sm hover:underline text-primary transition-colors">고객 지원</Link>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-2xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
              <span className="material-symbols-outlined">public</span>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
