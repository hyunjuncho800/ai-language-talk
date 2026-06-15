import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll('.soft-shadow');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px)';
      });
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative nursery-gradient overflow-hidden py-stack-xxl md:py-32">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 items-center gap-stack-xl">
          <div className="z-10 text-left">
            <h1 className="font-display-lg text-display-lg md:text-display-lg text-on-surface leading-tight mb-stack-md">
              병원 가기 전 10분, 우리 아이 발달 신호등을 먼저 켜보세요.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-xl max-w-xl">
              전문 기관 방문 전, 집에서 간편하게 아이의 발달 단계를 확인하고 성향이 맞는 또래 친구들을 만나보세요. 부드럽고 친절한 스크리닝이 성장의 길잡이가 되어드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/screening" className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full soft-shadow hover:scale-105 active:scale-95 transition-all duration-300 min-h-[48px] flex items-center justify-center gap-2">
                우리 아이 발달 체크하고 짝꿍 찾기
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="mt-stack-lg flex items-center gap-stack-md text-secondary">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed border-2 border-background flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary-fixed border-2 border-background flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">favorite</span>
                </div>
              </div>
              <span className="font-label-sm text-label-sm">5,000명 이상의 부모님이 신뢰하고 있습니다</span>
            </div>
          </div>
          {/* Hero Visual */}
          <div className="relative mt-12 md:mt-0 h-[400px] md:h-[500px]">
            <div className="absolute top-0 right-0 w-[85%] h-[90%] bg-surface-container-lowest rounded-xl soft-shadow overflow-hidden p-3 rotate-2 z-0 transition-transform hover:rotate-0 duration-500">
              <img alt="아이와 함께하는 학습 시간" className="w-full h-full object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTf40cWRwh31cnMB2gF8bQmW3NBH9a2Oy6hxtnRU3BlZx2HNjE6364o_YxJZzGFXsAStGpWBdJ9wd66R52v-X88DA0ow0uHvxm_IfPoGSR07ekYA7eDnooA8YI1aEzxLbioD7RgId9Gfk3ZafOSDoWbcD7Pz_UjKPpgEoaBYHuPHAbh9ZUnqa7zcbFDVOoTS_E13FLmMhIVzpGVwyJF8fJDcf332YsIjMsPkR6xbr7xUJ7gQJNxZwBdl84nniOCJHnOyfQFB8Nv0r" />
            </div>
            <div className="absolute bottom-8 left-0 w-56 p-6 bg-surface-container-lowest rounded-xl soft-shadow z-20 -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="font-label-md text-label-md text-on-surface">언어 발달 마일스톤</span>
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
              </div>
              <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
              </div>
              <p className="mt-3 font-label-sm text-label-sm text-on-surface-variant">순조롭게 성장 중이에요!</p>
            </div>
            <div className="absolute top-10 -left-6 bg-white p-4 rounded-xl soft-shadow z-10 flex flex-col gap-3 border border-surface-variant">
              <div className="flex items-center gap-3 pr-4">
                <span className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined">check_circle</span>
                </span>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md">어휘력</span>
                  <span className="text-[10px] font-label-sm text-secondary">상위 수준</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-stack-xxl bg-background">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-stack-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-sm">왜 코코톡인가요?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">가정에서의 관찰과 전문적인 평가 사이의 가교 역할을 합니다. 우리 가족이 필요로 하는 따뜻함을 담아 설계되었습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Feature 1 */}
            <div className="md:col-span-2 bg-surface-container-low p-stack-xl rounded-xl soft-shadow border border-surface-variant/50 flex flex-col md:flex-row gap-8 items-center overflow-hidden">
              <div className="flex-1">
                <span className="bg-tertiary-container/20 text-on-tertiary-container px-3 py-1 rounded-full text-label-sm font-label-sm mb-4 inline-block">빠르고 신뢰할 수 있는</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">발달 신호등 스크리닝</h3>
                <p className="text-on-surface-variant font-body-md mb-6">10분 내외의 평가로 직관적인 비주얼을 통해 발달 단계를 확인합니다: 초록(안정), 노랑(주의), 빨강(정밀 확인).</p>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center mb-1">
                      <span className="material-symbols-outlined text-on-secondary-container">check</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant">정상 발달</span>
                  </div>
                  <div className="flex flex-col items-center opacity-40">
                    <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center mb-1">
                      <span className="material-symbols-outlined text-on-tertiary-fixed-variant">visibility</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant">관찰 요망</span>
                  </div>
                  <div className="flex flex-col items-center opacity-40">
                    <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center mb-1">
                      <span className="material-symbols-outlined text-on-error-container">priority_high</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-on-surface-variant">정밀 진단</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full h-48 md:h-full bg-surface-container-highest rounded-lg overflow-hidden relative">
                <img alt="스크리닝 도구 사용 화면" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsr5_z_bHswPGqSBJqMHpMBBP2SJd5kT6u3OukttUfvDHOnrR9zjKIIlU57-nQnWKcYY06jSh8vQmn2ZZOTFOie23oRDHLof8RL6OOCwezY3q0bLE3SsTCvl0Og5Kne_vo8WcyBOKAQUiHnQMNQTTAjDnameSbMAJLJfXKPy4y7FxuvY1iYkS53QdCr4PHqHTi6WKPAk5wMvVwBOKZ-yyz0KY1LMpLGhKl9E-WnykFEIGAs4odLkORpZgdUS-nap-1Jx2u57_xjG3f" />
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-primary text-on-primary p-stack-xl rounded-xl soft-shadow flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-[40px] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                <h3 className="font-headline-md text-headline-md mb-4">딱 맞는 또래 친구 찾기</h3>
                <p className="text-primary-fixed font-body-md">발달 단계가 비슷한 지역 친구들을 연결하여 안전하고 즐거운 놀이 시간을 만들어줍니다.</p>
              </div>
              <button className="mt-8 text-on-primary font-label-md flex items-center gap-2 hover:translate-x-2 transition-transform">
                커뮤니티 둘러보기 <span className="material-symbols-outlined">trending_flat</span>
              </button>
            </div>
            {/* Feature 3 */}
            <div className="bg-surface-container-highest p-stack-xl rounded-xl soft-shadow border border-surface-variant/50">
              <span className="material-symbols-outlined text-tertiary text-[32px] mb-4">psychology</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">전문가가 검수한 가이드</h3>
              <p className="text-on-surface-variant font-body-md">모든 추천 내용은 언어재활사의 검수를 거쳐 임상적 정확성과 부모의 마음을 동시에 담았습니다.</p>
            </div>
            {/* Feature 4 */}
            <div className="bg-secondary-fixed p-stack-xl rounded-xl soft-shadow border border-on-secondary-container/10">
              <span className="material-symbols-outlined text-on-secondary-fixed-variant text-[32px] mb-4">apartment</span>
              <h3 className="font-headline-md text-headline-md text-on-secondary-fixed-variant mb-2">발달센터 디렉토리</h3>
              <p className="text-on-secondary-fixed-variant/80 font-body-md">추가 지원이 필요하신가요? 검증된 부모님들의 리뷰와 함께 근처의 우수한 발달센터를 찾아보세요.</p>
            </div>
            {/* Feature 5 */}
            <div className="bg-surface-container-low p-stack-xl rounded-xl soft-shadow border border-surface-variant/50">
              <span className="material-symbols-outlined text-primary text-[32px] mb-4">history_edu</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">마일스톤 로그</h3>
              <p className="text-on-surface-variant font-body-md">아이의 모든 '첫걸음'을 기록하세요. 인터랙티브한 그래프로 시간의 흐름에 따른 성장을 한눈에 확인할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-stack-xxl px-margin-mobile">
        <div className="max-w-3xl mx-auto text-center bg-surface-container-highest rounded-xl p-stack-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">오늘부터 아이의 성장을 기록해보세요.</h2>
          <p className="text-on-surface-variant font-body-lg mb-8">이미 수많은 부모님들이 코코톡의 스크리닝을 통해 마음의 안정을 찾고 명확한 방향을 얻으셨습니다.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/screening" className="bg-primary text-on-primary font-label-md text-label-md px-10 py-4 rounded-full soft-shadow hover:bg-on-primary-fixed-variant transition-all">무료 스크리닝 시작하기</Link>
            <button className="bg-background border-2 border-primary text-primary font-label-md text-label-md px-10 py-4 rounded-full hover:bg-primary/5 transition-all">더 알아보기</button>
          </div>
        </div>
      </section>
    </>
  );
}
