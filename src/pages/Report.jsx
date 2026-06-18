import { Link } from 'react-router-dom';

export default function Report() {
  return (
    <main className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl space-y-stack-xxl bg-background min-h-screen">
      
      {/* 1. 상단: 샘플 아동 프로필 카드 */}
      <section className="bg-white p-stack-xl rounded-[24px] soft-shadow border border-surface-variant/40">
        <div className="flex flex-col md:flex-row gap-stack-lg items-start md:items-center">
          <div className="w-24 h-24 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
            <span className="text-[40px]">👦</span>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="font-headline-lg text-2xl md:text-[28px] text-on-surface font-bold">박민우</h2>
              <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-sm font-bold">가명 / 남, 3세 2개월</span>
            </div>
            <p className="text-on-surface-variant font-body-md pt-2">
              <strong>발달 스크리닝 요약:</strong>
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <li className="flex items-start gap-2 bg-surface-container-low p-3 rounded-2xl">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">hearing</span>
                <div className="flex flex-col">
                  <span className="text-label-sm font-bold text-on-surface">수용언어 수준</span>
                  <span className="text-body-sm text-on-surface-variant leading-snug">2세 4개월 (지연 부근)</span>
                </div>
              </li>
              <li className="flex items-start gap-2 bg-error-container/30 p-3 rounded-2xl">
                <span className="material-symbols-outlined text-error text-[20px] mt-0.5">record_voice_over</span>
                <div className="flex flex-col">
                  <span className="text-label-sm font-bold text-error">표현언어 수준</span>
                  <span className="text-body-sm text-on-surface-variant leading-snug">1세 2개월 (심한 지연, "이거/저거" 대용어 산출 중심)</span>
                </div>
              </li>
              <li className="flex items-start gap-2 bg-surface-container-low p-3 rounded-2xl">
                <span className="material-symbols-outlined text-tertiary text-[20px] mt-0.5">toys</span>
                <div className="flex flex-col">
                  <span className="text-label-sm font-bold text-on-surface">상호작용 및 놀이</span>
                  <span className="text-body-sm text-on-surface-variant leading-snug">상호작용 시도가 약함, 단순 놀이 위주로 가능</span>
                </div>
              </li>
              <li className="flex items-start gap-2 bg-surface-container-low p-3 rounded-2xl">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">groups</span>
                <div className="flex flex-col">
                  <span className="text-label-sm font-bold text-on-surface">또래 관계</span>
                  <span className="text-body-sm text-on-surface-variant leading-snug">어린이집에서 또래 관계에 소극적이나 조금씩 참여는 가능한 수준</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. 중앙: 임상 전문가 기반 AI 장단기 및 회기 계획서 리포트 */}
      <section className="bg-white p-stack-xl rounded-[32px] soft-shadow border border-surface-variant/40 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary-container via-secondary-container to-primary-container"></div>
        <div className="flex items-center gap-3 mb-8 pt-2">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
          </div>
          <div>
            <h3 className="font-headline-md text-xl md:text-2xl text-on-surface font-bold">임상 전문가 기반 AI 치료 계획서</h3>
            <p className="text-label-sm text-on-surface-variant">현직 언어재활사의 임상 노하우가 담긴 맞춤형 목표</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* 장기 목표 */}
          <div className="bg-primary/5 p-6 rounded-3xl border border-primary/20 relative">
            <div className="absolute -top-3 left-6 bg-primary text-on-primary px-4 py-1 rounded-full text-label-sm font-bold shadow-sm">
              장기 목표
            </div>
            <div className="flex items-start gap-3 mt-2">
              <span className="material-symbols-outlined text-primary mt-1">flag</span>
              <p className="font-body-md text-on-surface leading-relaxed text-lg">
                아동은 일상생활 속 구조화된 놀이 상황에서 대용어(이거, 저거) 대신 <strong>명사를 사용하여 자발적으로 요구사항을 표현</strong>한다.
              </p>
            </div>
          </div>

          {/* 단기 목표 */}
          <div className="bg-secondary/5 p-6 rounded-3xl border border-secondary/20 relative mt-8">
            <div className="absolute -top-3 left-6 bg-secondary text-on-secondary px-4 py-1 rounded-full text-label-sm font-bold shadow-sm">
              단기 목표
            </div>
            <ul className="space-y-4 mt-2">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary-container text-secondary font-bold text-sm shrink-0 mt-0.5">1</span>
                <p className="font-body-md text-on-surface leading-relaxed">
                  친숙한 사물/장난감 5종의 이름을 듣고 정확히 포인팅하거나 시선을 맞춘다.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary-container text-secondary font-bold text-sm shrink-0 mt-0.5">2</span>
                <p className="font-body-md text-on-surface leading-relaxed">
                  원하는 물건을 요구할 때 대용어 대신 사물 명사(e.g., "차", "물")로 자발화하여 표현한다.
                </p>
              </li>
            </ul>
          </div>

          {/* 3회기 맞춤형 홈티 프로그램 */}
          <div className="pt-6">
            <h4 className="font-headline-md text-lg text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">family_home</span>
              3회기 맞춤형 홈티 프로그램
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-container-lowest p-5 rounded-3xl border border-outline-variant/30 hover:border-primary/50 transition-colors soft-shadow flex flex-col h-full">
                <span className="inline-block bg-surface-container px-3 py-1 rounded-full text-label-sm text-on-surface-variant w-fit mb-3">1회기</span>
                <h5 className="font-label-md font-bold text-primary mb-2">[무엇이 있을까? 비밀 상자 놀이]</h5>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  상자 안에 친숙한 장난감(자동차, 뽀로로 등)을 숨겨두고, 꺼낼 때마다 "이거" 대신 "자동차!", "공!" 등 사물 명사 자발화 유도 및 청각적 주의집중 훈련.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-3xl border border-outline-variant/30 hover:border-primary/50 transition-colors soft-shadow flex flex-col h-full">
                <span className="inline-block bg-surface-container px-3 py-1 rounded-full text-label-sm text-on-surface-variant w-fit mb-3">2회기</span>
                <h5 className="font-label-md font-bold text-primary mb-2">[주세요/받으세요 기차 놀이]</h5>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  기차 블록을 마주 앉아 굴리며 아동이 좋아하는 장난감을 요구할 때, 손가락질 대신 정확한 의사소통 의도를 담아 명사 단어 단독 산출 유도.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-3xl border border-outline-variant/30 hover:border-primary/50 transition-colors soft-shadow flex flex-col h-full">
                <span className="inline-block bg-surface-container px-3 py-1 rounded-full text-label-sm text-on-surface-variant w-fit mb-3">3회기</span>
                <h5 className="font-label-md font-bold text-primary mb-2">[어린이집 또래 놀이 시뮬레이션]</h5>
                <p className="text-body-sm text-on-surface-variant leading-relaxed">
                  역할 놀이 교구를 활용해 "친구에게 블록 줄까?" 상황을 연출하고, 또래 관계 참여를 독려하기 위한 상호작용 및 기초적인 화용적 소통 촉구.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 하단: 실시간 우리 동네 사회성 그룹 매칭 대시보드 (Map UI Component) */}
      <section className="bg-white p-stack-xl rounded-[32px] soft-shadow border border-surface-variant/40">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h3 className="font-headline-md text-xl md:text-2xl text-on-surface font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">map</span>
              실시간 우리 동네 사회성 그룹 매칭
            </h3>
            <p className="text-label-sm text-on-surface-variant mt-1">민우와 성향 및 발달 단계가 유사한 또래 친구들을 확인하세요.</p>
          </div>
          <span className="bg-error-container text-on-error-container px-4 py-2 rounded-full text-label-sm font-bold animate-pulse flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-error"></span>
            LIVE 매칭 중
          </span>
        </div>

        {/* Mock Map Area */}
        <div className="relative w-full h-[400px] bg-[#eef1f5] rounded-3xl overflow-hidden border border-surface-variant/50">
          {/* Map Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#075fab 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
          
          {/* Decorative Map Elements (Roads/Zones) */}
          <div className="absolute top-[20%] left-[10%] w-[80%] h-8 bg-white/40 rotate-12 rounded-full blur-sm"></div>
          <div className="absolute top-[40%] right-[10%] w-[60%] h-12 bg-white/50 -rotate-6 rounded-full blur-sm"></div>
          <div className="absolute bottom-[30%] left-[20%] w-[50%] h-10 bg-secondary-container/20 rounded-full blur-md"></div>

          {/* Emoji Pins */}
          <div className="absolute top-[30%] left-[45%] text-[28px] animate-bounce" style={{ animationDelay: '0ms' }}>👦</div>
          <div className="absolute top-[40%] left-[55%] text-[24px] animate-bounce" style={{ animationDelay: '200ms' }}>👧</div>
          <div className="absolute top-[35%] left-[50%] text-[26px] animate-bounce" style={{ animationDelay: '400ms' }}>👦</div>
          <div className="absolute top-[25%] left-[60%] text-[24px] animate-bounce" style={{ animationDelay: '600ms' }}>👧</div>
          <div className="absolute top-[45%] left-[40%] text-[28px] animate-bounce" style={{ animationDelay: '100ms' }}>👦</div>

          {/* Tooltip Popup */}
          <div className="absolute top-[10%] md:top-[15%] left-1/2 -translate-x-1/2 w-[90%] md:w-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-primary/20 z-10">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📌</span>
              <div>
                <h4 className="font-label-md font-bold text-on-surface">부산 정관읍</h4>
                <p className="text-body-sm text-on-surface-variant mt-1">
                  현재 표현언어 1~2세 수준,<br/>
                  사회성 향상 대기 아동 <strong className="text-primary text-lg">10명</strong> 대기 중!
                </p>
              </div>
            </div>
            {/* Tooltip Pointer */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 border-b border-r border-primary/20 rotate-45"></div>
          </div>

          {/* CTA Button overlay */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full px-4 md:w-auto flex justify-center">
            <Link to="#" className="w-full md:w-auto bg-primary text-on-primary font-label-md text-md px-8 py-4 rounded-full soft-shadow hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 flex items-center justify-center gap-2 animate-pulse hover:animate-none">
              <span className="material-symbols-outlined">group_add</span>
              내 아이와 성향이 맞는 짝꿍 그룹 개설하기 (매칭 신청)
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
