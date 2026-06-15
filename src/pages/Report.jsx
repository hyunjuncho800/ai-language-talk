import { useEffect } from 'react';

export default function Report() {
  useEffect(() => {
    const cards = document.querySelectorAll('.soft-shadow');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.transition = 'transform 0.3s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  }, []);

  return (
    <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl space-y-stack-xxl">
      {/* Section A: The Traffic Light & Summary */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-stack-md text-center bg-surface-container-low p-stack-xl rounded-xl soft-shadow border border-surface-variant">
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Progress Ring */}
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-highest" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="12"></circle>
              <circle className="text-secondary" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="110" strokeWidth="12"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="font-headline-md text-secondary">안정</span>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-1 px-stack-md py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md">
              <span className="material-symbols-outlined text-sm">traffic</span>
              발달 신호등
            </span>
          </div>
        </div>
        <div className="lg:col-span-8 bg-surface-container-lowest p-stack-xl rounded-xl soft-shadow border border-surface-variant space-y-stack-md">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">언어 발달 마일스톤 리포트</h2>
          <p className="text-on-surface-variant body-md leading-relaxed">
            초기 선별 검사 결과, 현재 비언어적 소통과 상호작용 참여도가 높게 나타납니다. 현재 <strong>"안정적 발달"</strong> 구역에 위치해 있습니다. 표현 어휘 형성이 또래보다 조금 늦게 나타나고 있으나, 수용 언어 능력이 탄탄하여 사회적 상호작용 목표에 집중한 성장이 기대됩니다.
          </p>
          <div className="flex flex-wrap gap-stack-sm pt-stack-sm">
            <div className="flex items-center gap-2 px-stack-md py-2 bg-surface-container rounded-lg border border-outline-variant">
              <span className="material-symbols-outlined text-primary">child_care</span>
              <span className="text-label-md">연령: 28개월</span>
            </div>
            <div className="flex items-center gap-2 px-stack-md py-2 bg-surface-container rounded-lg border border-outline-variant">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              <span className="text-label-md">검사일: 2023년 10월 24일</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: IEP/Therapy Goals */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Long-term Goal */}
        <div className="bg-primary-container/10 border-2 border-primary/20 p-stack-xl rounded-xl soft-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          <div className="flex items-center gap-stack-md mb-stack-lg">
            <div className="p-3 bg-primary text-on-primary rounded-lg">
              <span className="material-symbols-outlined">flag</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary">장단기 치료 목표</h3>
          </div>
          <div className="space-y-stack-md">
            <div className="space-y-2">
              <span className="text-label-sm text-primary font-bold">장기 목표</span>
              <p className="text-body-lg font-body-lg text-on-surface">
                구조화된 놀이 상황에서 또래와 3회 이상의 대화 주고받기를 수행합니다 (6개월 내).
              </p>
            </div>
            <div className="w-full bg-surface-container h-2 rounded-full mt-stack-md">
              <div className="bg-primary h-full rounded-full w-1/4"></div>
            </div>
            <p className="text-label-sm text-on-surface-variant italic">목표 달성도 25%</p>
          </div>
        </div>
        {/* Short-term Goals */}
        <div className="bg-surface-container-lowest p-stack-xl rounded-xl soft-shadow border border-surface-variant">
          <div className="flex items-center gap-stack-md mb-stack-lg">
            <div className="p-3 bg-secondary text-on-secondary rounded-lg">
              <span className="material-symbols-outlined">playlist_add_check</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-secondary">단기 목표</h3>
          </div>
          <ul className="space-y-stack-md">
            <li className="flex items-start gap-stack-md p-stack-md bg-background rounded-lg border border-surface-variant">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="text-on-surface-variant">사물 요청 시 3가지 이상의 기능적 수동 신호나 단어를 사용합니다.</span>
            </li>
            <li className="flex items-start gap-stack-md p-stack-md bg-background rounded-lg border border-surface-variant">
              <span className="material-symbols-outlined text-secondary">circle</span>
              <span className="text-on-surface-variant">까꿍 놀이 시 2초 이상 눈맞춤을 유지합니다.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section C: Smart Peer Matching */}
      <section className="space-y-gutter">
        <div className="bg-gradient-to-r from-primary via-primary-container to-secondary p-1 rounded-xl">
          <div className="bg-surface-container-lowest p-stack-xl rounded-[20px] text-center space-y-stack-md">
            <div className="inline-block p-4 bg-secondary-container text-on-secondary-container rounded-full mb-stack-sm">
              <span className="material-symbols-outlined text-4xl animate-bounce">handshake</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">현재 거주지 근처에 발달 수준과 성향 매칭률 92%인 최적의 짝꿍 아동들이 있습니다!</h2>
            <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">
              자체 알고리즘을 통해 서로 보완적인 놀이 스타일과 발달 목표를 가진 아동을 매칭하여, 자연스럽고 스트레스 없는 사회적 학습을 돕습니다.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Peer 1 */}
          <div className="bg-surface-container-lowest p-stack-lg rounded-xl soft-shadow border border-surface-variant hover:border-primary transition-all group">
            <div className="w-20 h-20 mx-auto rounded-full bg-surface-container-high flex items-center justify-center mb-stack-md overflow-hidden border-4 border-white">
              <img alt="짝꿍 A 프로필" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA08UXPuycmmVX95AhZCAHTG0fX-kugW2Llf_3YIViNM8Io6Cotl2YP13G1XHMFTcrtcARGA14H8yBL1CKXzrjC4H1AXF-vZXBkLkD88gocaKoyqZlVGaEPdPUDvhsCeY3qBqLRtS9WcwKQET51jcSoeIfA-F9X4TzhG9j8BBY7BY3-ycmSGCMMRviPXn5L-hfFOCcvTcDURg-oI98Dbeh9V1O4rvCoKewhhfccj7uHFSFbiQ-5mamf1MHTQMZyPr5eQx3ZSLLYUmhq" />
            </div>
            <h4 className="font-headline-md text-center text-on-surface mb-stack-xs">짝꿍 "A"</h4>
            <p className="text-label-sm text-center text-on-surface-variant mb-stack-md">0.8km 이내</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-label-sm bg-surface-container p-2 rounded">
                <span className="material-symbols-outlined text-sm">psychology</span>
                <span>시각적 탐색 중심 놀이</span>
              </div>
              <div className="flex items-center gap-2 text-label-sm bg-surface-container p-2 rounded">
                <span className="material-symbols-outlined text-sm">groups</span>
                <span>사회성 목표 #3 일치</span>
              </div>
            </div>
          </div>
          {/* Peer 2 */}
          <div className="bg-surface-container-lowest p-stack-lg rounded-xl soft-shadow border border-surface-variant hover:border-primary transition-all group">
            <div className="w-20 h-20 mx-auto rounded-full bg-surface-container-high flex items-center justify-center mb-stack-md overflow-hidden border-4 border-white">
              <img alt="짝꿍 L 프로필" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABvz4_Kvz3r3YC9awEGziV9MpPXWO_yry_f3BrS2pvS6fgqqm3zrNiJIXeH6Fc97tVY5f2j1lJY2Yt2NkHKa0M3SiY2G-gnSTIMbMqkTkXfhxMd8PhpEzLpUtz2nVV2-mgjcYtdbqa5ZITw9FVghs3scTLifTL8qp_nXEvZFk1t1T-UsQrMk8aZTfgjz1lKXR9lHcqkBBCdsSoQTTRmbn3zxg0hIDl7Fb2GJGxtXPf0f37cvjiZxYkTLCHmnaV6_nA-wLEtbll-kQa" />
            </div>
            <h4 className="font-headline-md text-center text-on-surface mb-stack-xs">짝꿍 "L"</h4>
            <p className="text-label-sm text-center text-on-surface-variant mb-stack-md">1.2km 이내</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-label-sm bg-surface-container p-2 rounded">
                <span className="material-symbols-outlined text-sm">music_note</span>
                <span>청각적/리드미컬 학습자</span>
              </div>
              <div className="flex items-center gap-2 text-label-sm bg-surface-container p-2 rounded">
                <span className="material-symbols-outlined text-sm">sentiment_satisfied</span>
                <span>상호보완적 기질</span>
              </div>
            </div>
          </div>
          {/* Peer 3 */}
          <div className="bg-surface-container-lowest p-stack-lg rounded-xl soft-shadow border border-surface-variant hover:border-primary transition-all group">
            <div className="w-20 h-20 mx-auto rounded-full bg-surface-container-high flex items-center justify-center mb-stack-md overflow-hidden border-4 border-white">
              <img alt="짝꿍 K 프로필" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfjkUfs1iQ6Z56XW1C2xOCI0cSdV1iP4WbRdZOGlTYGkRoBrcTf4fAv-QPcgX8pJueTpWHHYj4PmJ2iD6TGdbqq4Jmnz2ypyQJeQ6fjQ3phHfwh2uKnUIVwTSGCWsvcPY13aPkHsPhE_Htw9ZG1KBVHNakZKmVvMQ_0yAdCySnZpEuqs3uvIOnO_ZU2q1aAuyCzw3jLKBaKY1k_l5AG10RpvZz4TIzBoyFDxuLqiKI07QNZg7K11D_p89f0UFfCMcZyVGlGM3BeTch" />
            </div>
            <h4 className="font-headline-md text-center text-on-surface mb-stack-xs">짝꿍 "K"</h4>
            <p className="text-label-sm text-center text-on-surface-variant mb-stack-md">0.5km 이내</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-label-sm bg-surface-container p-2 rounded">
                <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                <span>활동적/신체 놀이 스타일</span>
              </div>
              <div className="flex items-center gap-2 text-label-sm bg-surface-container p-2 rounded">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>발달 단계 유사</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-stack-lg justify-center items-center pt-stack-xl">
          <button className="w-full md:w-auto bg-primary text-on-primary px-stack-xxl py-stack-lg rounded-full font-headline-md soft-shadow hover:scale-105 transition-transform">
            우리 동네 짝꿍 그룹 수업 신청하기 (29,000원)
          </button>
          <button className="w-full md:w-auto border-2 border-outline-variant text-on-surface-variant px-stack-xxl py-stack-lg rounded-full font-label-md hover:bg-surface-container transition-colors">
            B2B: 센터/치료사용 계획서 자동화 문의
          </button>
        </div>
      </section>
    </main>
  );
}
