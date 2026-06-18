import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll('.soft-shadow, .hover-card');
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
      {/* Section 2: Hero Banner */}
      <section className="relative bg-background overflow-hidden py-stack-xxl md:py-32">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="relative max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 items-center gap-stack-xl">
          <div className="z-10 text-center lg:text-left">
            <h1 className="font-display-lg text-[40px] md:text-display-lg text-on-surface leading-[1.2] mb-stack-md tracking-tight">
              아이의 언어 성장을 위한 <span className="text-primary">정밀 솔루션</span>,<br />이제 집과 치료실을 하나로 연결합니다.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              현직 임상 전문가의 체계적인 장단기/회기 프로그램부터, 우리 동네 성향 맞춤형 사회성 그룹 매칭까지 코코톡이 함께합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/screening" className="bg-primary text-on-primary font-label-md text-label-md px-8 py-5 rounded-3xl soft-shadow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
                10분 만에 우리 아이 발달 상태 체크하기
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            
            <div className="mt-stack-xl flex items-center justify-center lg:justify-start gap-stack-md text-secondary">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed border-2 border-background flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[18px] text-on-secondary-container">verified_user</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary-fixed border-2 border-background flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[18px] text-on-primary-container">favorite</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed border-2 border-background flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">psychology</span>
                </div>
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">언어재활사 500명 이상 활동 중</span>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="relative mt-12 lg:mt-0 h-[400px] md:h-[500px] flex items-center justify-center">
            <div className="absolute w-[80%] h-[90%] bg-white rounded-[32px] soft-shadow overflow-hidden z-0 rotate-2 transition-transform hover:rotate-0 duration-500 border border-surface-variant/30">
              <img alt="아이와 함께하는 따뜻한 시간" className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTf40cWRwh31cnMB2gF8bQmW3NBH9a2Oy6hxtnRU3BlZx2HNjE6364o_YxJZzGFXsAStGpWBdJ9wd66R52v-X88DA0ow0uHvxm_IfPoGSR07ekYA7eDnooA8YI1aEzxLbioD7RgId9Gfk3ZafOSDoWbcD7Pz_UjKPpgEoaBYHuPHAbh9ZUnqa7zcbFDVOoTS_E13FLmMhIVzpGVwyJF8fJDcf332YsIjMsPkR6xbr7xUJ7gQJNxZwBdl84nniOCJHnOyfQFB8Nv0r" />
            </div>
            {/* Floating UI Elements */}
            <div className="absolute bottom-10 -left-4 w-64 p-5 bg-white/90 backdrop-blur-md rounded-2xl soft-shadow z-20 -rotate-3 hover:rotate-0 transition-transform duration-300 border border-outline-variant/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-secondary-container rounded-xl text-on-secondary-container">
                  <span className="material-symbols-outlined text-[20px]">trending_up</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface">언어 발달 마일스톤</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
              </div>
              <p className="mt-2 font-label-sm text-label-sm text-secondary font-medium">안정적 발달 궤도 (85%)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 임상 기반 맞춤형 언어발달 프로그램 */}
      <section className="py-stack-xxl bg-surface-container-low" id="program">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-stack-xxl items-center">
          {/* Visual: Report Dashboard */}
          <div className="order-2 lg:order-1 relative h-full min-h-[450px]">
            <div className="absolute inset-0 bg-primary-container/20 rounded-[40px] -rotate-3"></div>
            <div className="absolute inset-0 bg-white rounded-[32px] soft-shadow border border-surface-variant/50 p-stack-lg flex flex-col gap-4">
              <div className="flex justify-between items-center pb-4 border-b border-surface-variant">
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>child_care</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md font-bold text-on-surface">김코코 (32개월)</h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">맞춤형 홈티 프로그램</p>
                  </div>
                </div>
                <span className="bg-secondary-container/50 text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-label-sm">진행중</span>
              </div>
              <div className="flex-grow space-y-4 pt-2">
                <div className="p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl">
                  <span className="text-label-sm font-bold text-primary mb-1 block">장기 목표</span>
                  <p className="font-body-md text-body-md text-on-surface">두 단어 연결하여 자발적으로 요구하기</p>
                </div>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-primary"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-label-sm font-bold text-primary mb-1 block">오늘의 홈티 미션</span>
                      <p className="font-body-md text-on-surface font-medium">"우유 줘" 실전 연습하기</p>
                    </div>
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                  </div>
                </div>
              </div>
              <div className="mt-auto grid grid-cols-2 gap-3">
                <div className="p-3 bg-surface-container-low rounded-xl text-center">
                  <span className="block font-headline-md text-primary">90%</span>
                  <span className="text-[10px] text-on-surface-variant">행정 시간 단축</span>
                </div>
                <div className="p-3 bg-surface-container-low rounded-xl text-center">
                  <span className="block font-headline-md text-secondary">+15%</span>
                  <span className="text-[10px] text-on-surface-variant">치료 효과 향상</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Description */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/20 text-on-primary-container font-label-md mb-6">
              임상 기반 맞춤형 언어발달 프로그램
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight mb-stack-md">
              매일의 작은 시도가<br />기적 같은 변화를 만듭니다.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-xl leading-relaxed">
              지어내는 AI 답변이 아닙니다. 현직 전문가의 검증된 임상 지식 DB를 바탕으로 우리 아이 수준에 딱 맞춘 <strong>'장기 및 단기 치료 목표'</strong>와 매일 집에서 자극해 줄 수 있는 <strong>'체계적인 회기별 홈티 프로그램'</strong>을 실시간으로 설계해 드립니다.
            </p>
            
            <div className="space-y-stack-md mb-stack-xl">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white rounded-xl soft-shadow text-primary">
                  <span className="material-symbols-outlined">family_home</span>
                </div>
                <div>
                  <h4 className="font-label-md font-bold text-on-surface text-lg">보호자를 위한 명확한 가이드</h4>
                  <p className="font-body-md text-on-surface-variant mt-1">집에서 어떻게 반응하고 놀아줘야 하는지 구체적이고 실천 가능한 미션을 제공합니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white rounded-xl soft-shadow text-secondary">
                  <span className="material-symbols-outlined">assignment</span>
                </div>
                <div>
                  <h4 className="font-label-md font-bold text-on-surface text-lg">임상가를 위한 행정 효율</h4>
                  <p className="font-body-md text-on-surface-variant mt-1">계획서와 일지 작성 등 서류 작업 시간을 90% 단축하여 아이에게만 온전히 집중할 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 수준·기질 기반 사회성 그룹 매칭 시스템 */}
      <section className="py-stack-xxl bg-background" id="matching">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto mb-stack-xxl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-md mb-4">
              수준·기질 기반 사회성 그룹 매칭 시스템
            </span>
            <h2 className="font-headline-lg text-[32px] md:text-[40px] text-on-surface leading-tight mb-stack-md">
              수준이 맞으면 성향이 다르고,<br />성향이 맞으면 거리가 멀었던 그룹치료.
            </h2>
            <p className="font-body-lg text-on-surface-variant">
              코코톡이 자체 알고리즘으로 동네에서 가장 시너지가 좋은 최적의 짝꿍을 자동 매칭합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
            {/* Card 1 */}
            <div className="hover-card bg-white p-stack-lg rounded-[24px] soft-shadow border border-surface-variant/30 flex flex-col h-full transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-[32px]">pin_drop</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3 text-on-surface">위치 및 시간 매칭</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                우리 동네 반경 3~5km 이내에서 동일한 시간대에 참여 가능한 가용 아동들을 1차적으로 스마트하게 필터링합니다. 이동의 부담 없이 가까운 곳에서 시작하세요.
              </p>
            </div>

            {/* Card 2 */}
            <div className="hover-card bg-white p-stack-lg rounded-[24px] soft-shadow border border-surface-variant/30 flex flex-col h-full transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-[32px]">extension</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3 text-on-surface">언어 및 인지 수준 매칭</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                비슷한 연령대라도 발달 단계는 다를 수 있습니다. 정확한 평가 데이터를 기반으로 동일한 발달 연령과 단기 치료 목표를 공유하는 아동들을 세밀하게 그룹핑합니다.
              </p>
            </div>

            {/* Card 3 */}
            <div className="hover-card bg-white p-stack-lg rounded-[24px] soft-shadow border border-surface-variant/30 flex flex-col h-full transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-[100px]">hub</span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-6 relative z-10">
                <span className="material-symbols-outlined text-[32px]">psychology_alt</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3 text-on-surface relative z-10">기질 및 행동 성향 매칭</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed relative z-10">
                사회성이 낮거나, 자존감이 부족하거나, 에너지가 넘치는 성향들을 분석합니다. 단순히 비슷한 아이들을 모으는 것이 아니라, 상호 보완을 통해 치료 시너지가 극대화되는 최적의 조합을 찾습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 제휴 센터 및 오프라인 연계 섹션 */}
      <section className="py-stack-xl bg-surface-container-low border-y border-surface-variant/40">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <div className="bg-gradient-to-r from-primary-container/30 via-secondary-container/20 to-primary-container/30 p-8 md:p-12 rounded-[32px] soft-shadow">
            <span className="material-symbols-outlined text-primary text-[40px] mb-4">handshake</span>
            <h2 className="font-headline-md text-[24px] md:text-[28px] text-on-surface leading-relaxed max-w-4xl mx-auto">
              플랫폼에서 완벽하게 조합된 소규모 그룹(2~4인)은<br className="hidden md:block"/>
              인근의 검증된 <strong>'코코톡 제휴 아동발달센터'</strong>로 즉각 연계되어<br className="hidden md:block"/>
              안전하고 전문적인 오프라인 그룹 수업으로 이어집니다.
            </h2>
          </div>
        </div>
      </section>

      {/* Section 6: 하단 CTA (Final Call) */}
      <section className="py-stack-xxl md:py-[120px] bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative max-w-4xl mx-auto px-margin-mobile text-center z-10">
          <h2 className="font-display-lg text-[36px] md:text-[48px] text-on-surface mb-6 leading-tight tracking-tight">
            느린 아이는 없습니다.<br/>
            단지 조금 다른 속도에 맞는 올바른 계획이 필요할 뿐입니다.
          </h2>
          <p className="text-on-surface-variant font-body-lg mb-12 max-w-2xl mx-auto text-lg">
            지금 코코톡에서 아이의 발달 신호등을 확인하고, 든든한 성장의 길잡이를 만나보세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/screening" className="bg-primary text-on-primary font-label-md text-lg px-10 py-5 rounded-full soft-shadow hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all duration-300">
              코코톡 시작하기
            </Link>
            <Link to="#contact" className="bg-white border-2 border-primary text-primary font-label-md text-lg px-10 py-5 rounded-full hover:bg-primary/5 transition-all duration-300">
              기관 제휴 문의
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
