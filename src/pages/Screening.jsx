import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Screening() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const totalSteps = 3;

  const steps = [
    { id: 'step-1', title: '기본 정보' },
    { id: 'step-2', title: '언어 발달 체크포인트' },
    { id: 'step-3', title: '놀이 기질 및 성향' }
  ];

  const updateStep = (direction) => {
    setCurrentStep((prev) => Math.min(Math.max(prev + direction, 1), totalSteps));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('분석 중입니다... 망미동 지역의 가장 잘 맞는 친구를 찾고 있습니다.');
    navigate('/report');
  };

  return (
    <main className="flex-grow w-full max-w-3xl mx-auto px-margin-mobile md:px-0 py-stack-xl">
      {/* Progress Indicator */}
      <div className="mb-stack-xl">
        <div className="flex justify-between items-center mb-stack-sm px-2">
          <span className="font-label-md text-label-md text-primary uppercase tracking-wider">
            {currentStep}단계 / {totalSteps}단계
          </span>
          <span className="font-label-md text-label-md text-on-surface-variant">
            {steps[currentStep - 1].title}
          </span>
        </div>
        <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out" 
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Container */}
      <form className="space-y-stack-xl" onSubmit={handleSubmit}>
        {/* Step 1: Basic Info */}
        <div className={`step-transition ${currentStep === 1 ? 'block' : 'hidden'}`}>
          <div className="space-y-stack-lg">
            <div className="text-center md:text-left">
              <h1 className="font-headline-lg text-headline-lg mb-2">우리 아이에 대해 알려주세요</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">정확한 발달 단계 확인을 위해 꼭 필요한 정보입니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
              <div className="space-y-stack-xs">
                <label className="font-label-md text-label-md text-on-surface block ml-1">생년월일</label>
                <input className="w-full h-14 px-4 rounded-xl border-outline-variant bg-surface-container-low focus:bg-white transition-all text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed" required type="date" />
              </div>
              <div className="space-y-stack-xs">
                <label className="font-label-md text-label-md text-on-surface block ml-1">개월 수</label>
                <input className="w-full h-14 px-4 rounded-xl border-outline-variant bg-surface-container-low focus:bg-white transition-all text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed" placeholder="예: 24" required type="number" />
              </div>
              <div className="md:col-span-2 space-y-stack-xs">
                <label className="font-label-md text-label-md text-on-surface block ml-1">거주 지역</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">location_on</span>
                  <input className="w-full h-14 pl-12 pr-4 rounded-xl border-outline-variant bg-surface-container-low focus:bg-white transition-all text-body-md focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed" placeholder="예: 부산시 수영구 망미동" required type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Language Level */}
        <div className={`step-transition ${currentStep === 2 ? 'block' : 'hidden'}`}>
          <div className="space-y-stack-lg">
            <div className="text-center md:text-left">
              <h1 className="font-headline-lg text-headline-lg mb-2">언어 발달 체크포인트</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">아이의 현재 언어 능력을 가장 잘 나타내는 항목을 골라주세요.</p>
            </div>
            <div className="space-y-stack-xl">
              <div className="space-y-stack-sm">
                <label className="font-label-md text-label-md text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>record_voice_over</span>
                  표현언어 수준 (말하기)
                </label>
                <select className="w-full h-14 px-4 rounded-xl border-outline-variant bg-surface-container-low focus:bg-white transition-all text-body-md appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed">
                  <option value="pre-verbal">단어 발화 이전 (옹알이, 제스처, 포인팅 위주)</option>
                  <option value="word-level">단어 수준 (단일 단어 사용 예: "엄마", "물")</option>
                  <option value="2-word">두 단어 조합 가능 (예: "우유 줘", "차 가")</option>
                  <option value="sentences">세 단어 이상 문장 구사 (조사 사용 및 문법적 발화)</option>
                </select>
              </div>
              <div className="space-y-stack-sm">
                <label className="font-label-md text-label-md text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>hearing</span>
                  수용언어 수준 (이해하기)
                </label>
                <select className="w-full h-14 px-4 rounded-xl border-outline-variant bg-surface-container-low focus:bg-white transition-all text-body-md appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-fixed">
                  <option value="level-1">제스처를 동반한 간단한 1단계 지시 수행</option>
                  <option value="level-2">제스처 없이 말로만 하는 1단계 지시 수행</option>
                  <option value="level-3">이름을 말하면 친숙한 사물이나 사진을 가리킴</option>
                  <option value="level-4">복잡한 문장이나 "누가/어디서" 질문을 이해함</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Play Personality */}
        <div className={`step-transition ${currentStep === 3 ? 'block' : 'hidden'}`}>
          <div className="space-y-stack-lg">
            <div className="text-center md:text-left">
              <h1 className="font-headline-lg text-headline-lg mb-2">놀이 기질 및 성향 선택</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">아이가 또래와 있을 때 어떤 모습인가요?</p>
            </div>
            <div className="grid grid-cols-1 gap-stack-md">
              <label className="relative flex cursor-pointer group">
                <input className="peer sr-only" name="play_style" type="radio" value="A" />
                <div className="w-full p-stack-lg rounded-xl bg-white border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary-fixed soft-shadow transition-all group-hover:scale-[1.01] min-h-[100px] flex items-center">
                  <div className="flex items-start gap-4 w-full">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined">person_search</span>
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md mb-1">A형: 겉도는 성향</h3>
                      <p className="text-on-surface-variant text-body-md leading-snug">또래에게 관심은 보이지만 주로 혼자 놀며 사회적 상호작용 방법이 미숙한 경우입니다.</p>
                    </div>
                  </div>
                </div>
              </label>
              <label className="relative flex cursor-pointer group">
                <input className="peer sr-only" name="play_style" type="radio" value="B" />
                <div className="w-full p-stack-lg rounded-xl bg-white border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary-fixed soft-shadow transition-all group-hover:scale-[1.01] min-h-[100px] flex items-center">
                  <div className="flex items-start gap-4 w-full">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-container">
                      <span className="material-symbols-outlined">visibility_off</span>
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md mb-1">B형: 위축된 성향</h3>
                      <p className="text-on-surface-variant text-body-md leading-snug">또래를 피하거나 숨으며, 부모님 곁을 떠나지 않으려 하는 등 사회적 불안을 보이는 경우입니다.</p>
                    </div>
                  </div>
                </div>
              </label>
              <label className="relative flex cursor-pointer group">
                <input className="peer sr-only" name="play_style" type="radio" value="C" />
                <div className="w-full p-stack-lg rounded-xl bg-white border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary-fixed soft-shadow transition-all group-hover:scale-[1.01] min-h-[100px] flex items-center">
                  <div className="flex items-start gap-4 w-full">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
                      <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <div>
                      <h3 className="font-label-md text-label-md mb-1">C형: 주도적/활동적 성향</h3>
                      <p className="text-on-surface-variant text-body-md leading-snug">활동적이고 주도적이지만, 간혹 또래의 물건을 뺏거나 충동적인 에너지가 강한 경우입니다.</p>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="pt-stack-xl flex flex-col md:flex-row gap-stack-md">
          <button 
            className={`${currentStep === 1 ? 'hidden' : 'flex-1'} order-2 md:order-1 h-14 rounded-full font-label-md text-label-md text-on-surface-variant border border-outline-variant hover:bg-surface-container transition-all`} 
            onClick={() => updateStep(-1)} 
            type="button"
          >
            이전으로
          </button>
          <button 
            className={`${currentStep === totalSteps ? 'hidden' : 'flex-[2]'} order-1 md:order-2 h-14 bg-primary text-on-primary rounded-full font-label-md text-label-md shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2`} 
            onClick={() => updateStep(1)} 
            type="button"
          >
            다음 단계
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
          <button 
            className={`${currentStep === totalSteps ? 'flex-[2]' : 'hidden'} order-1 md:order-2 h-14 bg-primary text-on-primary rounded-full font-label-md text-label-md shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2`} 
            type="submit"
          >
            분석 및 동네 짝꿍 매칭 결과 보기
            <span className="material-symbols-outlined text-[20px]">groups</span>
          </button>
        </div>
      </form>

      {/* Visual Context Image */}
      <div className="mt-stack-xxl rounded-xl overflow-hidden relative h-64 md:h-80 soft-shadow group">
        <img alt="Nursery Playroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1oxC_8dz6VxqJJx1OFnd2odXXKnmaE366qA9r4vyKI-3Aq-Og_AhkFjEJXmpeVgEdy2kMo_sR85e5kfQkA2BXmzr6dZBdhPL6vcEao_df7l3WdGgw_niuRON_xzBp4t55LqrlWLJjXgbIhTXYpuTmB7nHN1mghb_obtvWUUAvdk4iJpFE33iJ92Oxk-NAQgMzPSoNw2IDeNISGw5IsCgObmMgWLM66GIUySeBW21C8d7E2_yI2Zf9NXhNklYJ_wNtrnApultOo0i_" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-stack-lg">
          <p className="text-white font-label-md text-label-md">부산 지역 5,000명 이상의 부모님이 신뢰하고 있습니다.</p>
        </div>
      </div>
    </main>
  );
}
