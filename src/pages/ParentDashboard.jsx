import { useState } from 'react';

export default function ParentDashboard() {
  const [missionStatus, setMissionStatus] = useState(null); // null, 'red', 'yellow', 'green'
  const [showNextSessionUnlock, setShowNextSessionUnlock] = useState(false);

  const handleStatusSelect = (status) => {
    setMissionStatus(status);
    if (status === 'green') {
      setShowNextSessionUnlock(true);
    } else {
      setShowNextSessionUnlock(false);
    }
  };

  const getStatusColor = () => {
    switch(missionStatus) {
      case 'red': return 'border-error bg-error/5 text-error';
      case 'yellow': return 'border-warning bg-warning/5 text-warning';
      case 'green': return 'border-secondary bg-secondary/5 text-secondary';
      default: return 'border-surface-variant bg-surface-container-lowest text-on-surface-variant';
    }
  };

  return (
    <main className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-xl space-y-stack-xl bg-background min-h-screen pb-32">
      
      {/* Title */}
      <div className="pt-4 pb-2">
        <h1 className="font-headline-lg text-[28px] text-on-surface font-bold">부모 전용 일일 대시보드</h1>
        <p className="text-on-surface-variant mt-2 font-body-md">매일의 작은 기록이 우리 아이의 큰 성장을 만듭니다.</p>
      </div>

      {/* Component A: 우리 아이 현행 수준 가이드 카드 */}
      <section className="bg-white p-stack-lg rounded-[24px] soft-shadow border border-surface-variant/40">
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-surface-variant">
          <div className="w-14 h-14 rounded-full bg-primary-container/20 flex items-center justify-center text-[28px]">
            👦
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-headline-md text-xl text-on-surface font-bold">박민우</h2>
              <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full text-label-sm font-medium">남, 3세 2개월</span>
            </div>
            <p className="text-body-sm text-on-surface-variant mt-1">
              수용언어 2세 4개월 / 표현언어 1세 2개월
            </p>
          </div>
        </div>
        <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
          <span className="inline-block bg-primary text-on-primary px-3 py-1 rounded-full text-[12px] font-bold mb-2">이번 주 핵심 과제</span>
          <p className="font-body-md text-on-surface text-lg leading-relaxed font-medium">
            대용어("이거/저거") 손가락질 대신 명사 단어(자동차, 물 등) 직접 말하기!
          </p>
        </div>
      </section>

      {/* Component B: 3회기 홈티 일일 미션 체크리스트 (Daily Tracker UI) */}
      <section className={`transition-colors duration-500 bg-white p-stack-lg md:p-stack-xl rounded-[32px] soft-shadow border-2 ${missionStatus ? getStatusColor().split(' ')[0] : 'border-primary/20'}`}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="inline-flex items-center gap-1 bg-error-container text-on-error-container px-3 py-1 rounded-full text-label-sm font-bold mb-3 animate-pulse">
              <span className="text-[14px]">🔥</span> 진행 중
            </span>
            <h3 className="font-headline-md text-2xl text-on-surface font-bold">1회기: 비밀 상자 놀이</h3>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 mb-8">
          <h4 className="font-label-md font-bold text-primary mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">lightbulb</span>
            오늘의 홈티 가이드
          </h4>
          <p className="font-body-md text-on-surface-variant leading-relaxed text-[16px]">
            상자에서 장난감을 꺼낼 때 "이거"라고 하면 "자동차!"라고 명사를 정확히 들려주며 모방을 유도하세요.
          </p>
        </div>

        <div>
          <h4 className="font-label-md text-on-surface font-bold mb-4">오늘 우리 아이의 수행력은 어땠나요?</h4>
          <div className="space-y-3">
            {/* Red Option */}
            <label className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${missionStatus === 'red' ? 'bg-error/10 border-error' : 'bg-surface-container-lowest border-transparent hover:bg-surface-container-low'}`}>
              <input type="radio" name="performance" className="w-6 h-6 accent-error" checked={missionStatus === 'red'} onChange={() => handleStatusSelect('red')} />
              <span className="text-[24px]">🔴</span>
              <span className="font-body-md text-on-surface font-medium text-lg">미수행 / 거부함</span>
            </label>

            {/* Yellow Option */}
            <label className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${missionStatus === 'yellow' ? 'bg-warning/10 border-warning' : 'bg-surface-container-lowest border-transparent hover:bg-surface-container-low'}`}>
              <input type="radio" name="performance" className="w-6 h-6 accent-warning" checked={missionStatus === 'yellow'} onChange={() => handleStatusSelect('yellow')} />
              <span className="text-[24px]">🟡</span>
              <span className="font-body-md text-on-surface font-medium text-lg">"이.." 정도로 불완전하게 모방함</span>
            </label>

            {/* Green Option */}
            <label className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${missionStatus === 'green' ? 'bg-secondary/10 border-secondary' : 'bg-surface-container-lowest border-transparent hover:bg-surface-container-low'}`}>
              <input type="radio" name="performance" className="w-6 h-6 accent-secondary" checked={missionStatus === 'green'} onChange={() => handleStatusSelect('green')} />
              <span className="text-[24px]">🟢</span>
              <span className="font-body-md text-on-surface font-medium text-lg">"자동차!"라고 명확히 자발화함</span>
            </label>
          </div>
        </div>

        {/* Success Popup Message */}
        <div className={`mt-8 overflow-hidden transition-all duration-500 ease-in-out ${showNextSessionUnlock ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-secondary-container/50 border border-secondary/30 p-5 rounded-2xl flex items-start gap-3">
            <span className="text-[24px] animate-bounce">🎉</span>
            <div>
              <h4 className="font-label-md font-bold text-on-secondary-container mb-1">다음 회기 잠금 해제!</h4>
              <p className="text-body-sm text-on-surface-variant">
                수행력 [🟢 명확히 자발화함]을 달성했습니다. 내일 자동으로 <strong>[2회기: 주세요 기차 놀이]</strong> 미션이 열리며 알림이 발송됩니다.
              </p>
            </div>
          </div>
        </div>
        
        {/* Save Button */}
        <button className={`w-full mt-8 py-4 rounded-2xl font-label-md text-lg text-white soft-shadow transition-all duration-300 ${missionStatus ? 'bg-primary hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]' : 'bg-surface-variant cursor-not-allowed opacity-50'}`} disabled={!missionStatus}>
          오늘 기록 저장하기
        </button>
      </section>

      {/* Component C: 지난 회기 기록 및 피드백 타임라인 */}
      <section>
        <h3 className="font-headline-md text-xl text-on-surface font-bold mb-6 pl-2">지난 회기 기록</h3>
        <div className="relative pl-6 space-y-8 border-l-2 border-surface-variant/50 ml-4">
          
          {/* Day 2 */}
          <div className="relative">
            <div className="absolute w-5 h-5 bg-secondary rounded-full -left-[27px] top-1 border-4 border-background flex items-center justify-center shadow-sm"></div>
            <div className="bg-white p-5 rounded-2xl soft-shadow border border-surface-variant/30">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-sm text-secondary font-bold">2일 차</span>
                <span className="text-[12px] text-on-surface-variant bg-surface-container px-2 py-1 rounded-full">어제</span>
              </div>
              <h4 className="font-label-md text-on-surface font-bold mb-2">비밀 상자 놀이 재시도</h4>
              <p className="text-body-sm text-on-surface-variant mb-3 leading-relaxed">
                좋아하는 공을 꺼낼 때 부모 촉구 후 "고!"라고 첫음절 산출 성공!
              </p>
              <div className="flex items-center gap-2 bg-secondary/5 px-3 py-2 rounded-xl w-fit">
                <span className="text-[16px]">🟢</span>
                <span className="text-label-sm text-secondary font-medium">수행 완료 ➡️ 다음 회기 추천 알고리즘 가동</span>
              </div>
            </div>
          </div>

          {/* Day 1 */}
          <div className="relative">
            <div className="absolute w-5 h-5 bg-warning rounded-full -left-[27px] top-1 border-4 border-background flex items-center justify-center shadow-sm"></div>
            <div className="bg-white p-5 rounded-2xl soft-shadow border border-surface-variant/30">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-sm text-warning font-bold">1일 차</span>
                <span className="text-[12px] text-on-surface-variant bg-surface-container px-2 py-1 rounded-full">2일 전</span>
              </div>
              <h4 className="font-label-md text-on-surface font-bold mb-2">비밀 상자 놀이</h4>
              <p className="text-body-sm text-on-surface-variant mb-3 leading-relaxed">
                아이가 "이거"만 10번 반복함. 명사 모델링 집중 제공함.
              </p>
              <div className="flex items-center gap-2 bg-warning/5 px-3 py-2 rounded-xl w-fit">
                <span className="text-[16px]">🟡</span>
                <span className="text-label-sm text-warning font-medium">불완전 모방</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
