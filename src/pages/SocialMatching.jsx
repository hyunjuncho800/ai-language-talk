import React, { useState, useEffect, useRef } from 'react';

// Web Audio API를 활용한 '뿅!' 효과음 생성 함수
const playPopSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // 부드러운 사인파 선택
    osc.type = 'sine';
    // 300Hz로 시작하여 0.15초 안에 850Hz로 급격하게 상승시켜 '뿅!' 소리를 냄
    osc.frequency.setValueAtTime(300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(850, ctx.currentTime + 0.15);

    // 볼륨 조절: 0.3으로 시작하여 0.01로 줄여 잔향을 자연스럽게 깎아줌
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {
    console.error('AudioContext를 생성할 수 없습니다.', e);
  }
};

// 동네별 수동 선택 데이터를 위한 매핑 정보
const regionData = {
  '부산광역시': ['기장군 정관읍', '수영구 망미동', '해운대구 우동', '금정구 장전동'],
  '서울특별시': ['마포구 서교동', '강남구 역삼동', '종로구 혜화동', '송파구 잠실동'],
  '경기도': ['성남시 분당구 삼평동', '수원시 영통구 이의동', '고양시 일산동구 장항동']
};

// 동네이름 키워드별 실시간 매칭 상태 통계 Mock 데이터 반환 함수
const getRegionStats = (name) => {
  if (name.includes('정관읍')) {
    return { count: 10, text: '표현언어 1~2세 수준, 사회성 향상 및 자존감 촉진 대기 아동 10명 대기 중!' };
  }
  if (name.includes('망미동')) {
    return { count: 7, text: '수용언어 2~3세 수준, 또래 의사소통 및 정서 안정을 위한 아동 7명 대기 중!' };
  }
  if (name.includes('우동')) {
    return { count: 14, text: '조음 발달 및 발음 교정, 자신감 회복을 기다리는 아동 14명 대기 중!' };
  }
  if (name.includes('장전동')) {
    return { count: 8, text: '언어 발달 지연 및 사회적 차례 지키기를 희망하는 아동 8명 대기 중!' };
  }
  if (name.includes('서교동')) {
    return { count: 15, text: '표현언어 및 문장 표현력 확장, 또래 관계 형성을 원하는 아동 15명 대기 중!' };
  }
  if (name.includes('역삼동')) {
    return { count: 18, text: '수용언어 3~4세 수준, 감정 인지 및 자존감 증진 대기 아동 18명 대기 중!' };
  }
  if (name.includes('혜화동')) {
    return { count: 6, text: '조음 장애 및 발음 지연 극복, 상호 작용을 대기하는 아동 6명 대기 중!' };
  }
  if (name.includes('잠실동')) {
    return { count: 12, text: '언어 발달 촉진 및 사회 규칙 학습을 위한 아동 12명 대기 중!' };
  }
  if (name.includes('삼평동')) {
    return { count: 11, text: '표현언어 발달 지연 및 대인 관계 능력 배양 대기 아동 11명 대기 중!' };
  }
  if (name.includes('이의동')) {
    return { count: 9, text: '수용언어 지연 및 놀이 상황 상호작용 연습 아동 9명 대기 중!' };
  }
  if (name.includes('장항동')) {
    return { count: 13, text: '조음 및 대화 턴테이킹 기술 훈련을 기다리는 아동 13명 대기 중!' };
  }
  // 기본 폴백 데이터
  return { count: 10, text: '표현언어 1~2세 수준, 사회성 향상 및 자존감 촉진 대기 아동 10명 대기 중!' };
};

export default function SocialMatching() {
  // 위치 상태
  const [locationName, setLocationName] = useState('위치 정보를 탐색하고 있어요...');
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [locationStatus, setLocationStatus] = useState('pending'); // pending, success, error

  // 수동 동네 변경 모달 상태
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [tempSido, setTempSido] = useState('부산광역시');
  const [tempGugundong, setTempGugundong] = useState('기장군 정관읍');
  
  // 지도 데이터 갱신을 위한 새로고침(로딩) 애니메이션 상태
  const [isMapRefreshing, setIsMapRefreshing] = useState(false);

  // 드래그(Pan) 상태 (지도 이동용)
  const [mapOffset, setMapOffset] = useState({ x: -100, y: -80 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef(null);

  // 캐릭터 리스트 데이터
  const characters = [
    { id: 1, name: '민우', age: 5, emoji: '👦', level: '표현언어 1~2세 수준', goal: '또래 상호작용 개시', temper: '신중하고 소극적임', walkClass: 'walk-1', color: 'bg-blue-100 text-blue-700' },
    { id: 2, name: '서아', age: 4, emoji: '👧', level: '수용언어 2~3세 수준', goal: '공동 주의 집중력 강화', temper: '주도적이고 활발함', walkClass: 'walk-2', color: 'bg-pink-100 text-pink-700' },
    { id: 3, name: '주원', age: 6, emoji: '👦', level: '말더듬/조음 지연', goal: '부드러운 대화 턴테이킹', temper: '감수성이 풍부하고 섬세함', walkClass: 'walk-3', color: 'bg-green-100 text-green-700' },
    { id: 4, name: '하은', age: 5, emoji: '👧', level: '표현언어 2~3세 수준', goal: '문장 형태 의사소통 확장', temper: '온순하고 조용한 경청형', walkClass: 'walk-4', color: 'bg-amber-100 text-amber-700' },
    { id: 5, name: '도윤', age: 3, emoji: '👶', level: '영유아 언어 발달', goal: '의사소통 제스처 및 옹알이', temper: '호기심 많고 탐색적임', walkClass: 'walk-5', color: 'bg-purple-100 text-purple-700' },
    { id: 6, name: '지안', age: 6, emoji: '👧', level: '사회성 의사소통 지연', goal: '또래 규칙 및 차례 지키기', temper: '에너제틱하고 표현이 확실함', walkClass: 'walk-6', color: 'bg-teal-100 text-teal-700' }
  ];

  // 클릭된 캐릭터 미니 정보 상태
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // 모달 상태 (맞춤형 그룹 개설)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    childAge: '5',
    langLevel: 'level1',
    goal: 'sociality',
    temperType: 'calm'
  });

  // GPS 위치 획득 및 주소 변환 로직
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationName('부산 기장군 정관읍 (GPS 미지원 브라우저)');
      setIsLoadingLocation(false);
      setLocationStatus('error');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lng=${longitude}&zoom=18&addressdetails=1&accept-language=ko`,
            { headers: { 'User-Agent': 'CocoTalk-Social-Matching-Agent' } }
          );

          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();
          
          if (data && data.address) {
            const addr = data.address;
            const dong = addr.suburb || addr.town || addr.village || addr.neighborhood || addr.city_district || '';
            const gu = addr.city_district || addr.county || addr.city || '';
            
            if (gu || dong) {
              const parsedName = `${gu} ${dong}`.trim();
              setLocationName(parsedName);
              setLocationStatus('success');
            } else {
              setLocationName('부산 기장군 정관읍');
              setLocationStatus('success');
            }
          } else {
            setLocationName('부산 기장군 정관읍');
            setLocationStatus('success');
          }
        } catch (error) {
          console.error('역지오코딩 API 호출 오류. 폴백을 작동합니다.', error);
          if (latitude > 35 && latitude < 36 && longitude > 129 && longitude < 130) {
            setLocationName('부산 기장군 정관읍');
          } else if (latitude > 37 && latitude < 38 && longitude > 126 && longitude < 127) {
            setLocationName('서울 마포구 서교동');
          } else {
            setLocationName('부산 기장군 정관읍');
          }
          setLocationStatus('success');
        } finally {
          setIsLoadingLocation(false);
        }
      },
      (error) => {
        console.warn('위치 정보를 가져올 수 없습니다. 기본 맵으로 전환합니다.', error);
        setLocationName('부산 기장군 정관읍');
        setIsLoadingLocation(false);
        setLocationStatus('error');
      },
      { timeout: 7000 }
    );
  }, []);

  // 시도 선택 변경 시 구군동 리스트의 첫 번째 값으로 기본 세팅
  const handleSidoChange = (sido) => {
    setTempSido(sido);
    if (regionData[sido] && regionData[sido].length > 0) {
      setTempGugundong(regionData[sido][0]);
    }
  };

  // 수동 지역 변경 확인 완료 버튼 처리
  const handleConfirmRegion = () => {
    playPopSound();
    setIsRegionModalOpen(false);
    setIsMapRefreshing(true); // 맵 새로고침 인디케이터 활성화

    // 0.6초 뒤 맵 데이터를 새 지역으로 업데이트 완료
    setTimeout(() => {
      setLocationName(`${tempSido} ${tempGugundong}`);
      setIsMapRefreshing(false);
      // 캐릭터 상세 정보가 열려있다면 닫아준다
      setSelectedCharacter(null);
    }, 600);
  };

  // 드래그(Pan) 핸들러
  const handleMouseDown = (e) => {
    if (e.target.closest('.interactive-btn') || e.target.closest('.character-pin')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - mapOffset.x, y: e.clientY - mapOffset.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setMapOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.target.closest('.interactive-btn') || e.target.closest('.character-pin')) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX - mapOffset.x, y: touch.clientY - mapOffset.y });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setMapOffset({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    playPopSound();
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  // 현재 지역 명칭에 따른 말풍선 상태 추출
  const currentStats = getRegionStats(locationName);

  return (
    <div className="min-h-screen bg-[#fbf9f5] py-8 px-4 sm:px-6 md:px-margin-desktop text-on-background font-body-md">
      
      {/* 1. 대시보드 상단: 환영 및 위치 안내 헤더 */}
      <div className="max-w-max-width mx-auto mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary font-headline-md tracking-tight mb-3">
            우리 동네 짝꿍 매칭 맵
          </h1>
          <p className="text-on-surface-variant font-body-lg text-lg max-w-2xl leading-relaxed">
            아이의 발달 수준과 행동 기질을 분석하여 최적의 상호작용 시너지를 낼 동네 친구들을 실시간으로 매칭합니다.
          </p>
        </div>

        {/* 위치 표시 및 동네 바꾸기 버튼 */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 shrink-0">
          <div className="bg-white px-5 py-3 rounded-full shadow-sm border border-outline-variant flex items-center gap-2.5 hover:shadow-md transition-all duration-300">
            <span className="text-xl">📍</span>
            <span className="font-semibold text-sm sm:text-base text-primary">현재 탐색 지역:</span>
            <span className="font-bold text-sm sm:text-base text-on-surface">
              {locationName}
            </span>
            {isLoadingLocation && (
              <span className="inline-block w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
            )}
          </div>
          
          <button
            onClick={() => {
              playPopSound();
              setIsRegionModalOpen(true);
            }}
            className="interactive-btn flex items-center gap-1.5 px-5 py-3 bg-white hover:bg-primary/5 text-primary border-2 border-primary/30 rounded-full font-bold text-sm sm:text-base transition-all duration-200 shadow-sm active:scale-95"
          >
            <span>동네 바꾸기 🔄</span>
          </button>
        </div>
      </div>

      {/* 2. 중앙 섹션: 무한 캔버스 형태의 '게임형 일러스트 지도' */}
      <div className="max-w-max-width mx-auto mb-10">
        <div className="relative bg-[#ebedd8] rounded-[24px] overflow-hidden h-[550px] sm:h-[600px] border-4 border-white shadow-xl">
          
          {/* 가이드 오버레이 */}
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-[18px] text-xs font-semibold text-on-surface-variant shadow-sm pointer-events-none select-none flex items-center gap-2">
            <span>🖱️ 마우스 드래그 / 터치로 지도를 밀어서 구석구석 탐색해 보세요!</span>
          </div>

          {/* 맵 데이터 실시간 새로고침 로딩 오버레이 */}
          {isMapRefreshing && (
            <div className="absolute inset-0 z-50 bg-white/60 backdrop-blur-md flex flex-col items-center justify-center animate-fade-in">
              <div className="w-14 h-14 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="font-bold text-primary text-base sm:text-lg animate-pulse">
                🔍 {tempGugundong}의 짝꿍 지도를 동적으로 동기화하고 있어요...
              </p>
            </div>
          )}

          {/* 맵 무한 캔버스 컨테이너 */}
          <div
            ref={mapContainerRef}
            className={`absolute w-[1600px] h-[1200px] select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{
              transform: `translate(${mapOffset.x}px, ${mapOffset.y}px)`,
              transition: isDragging ? 'none' : 'transform 0.15s ease-out'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* SVG 가상 일러스트 지도 배경 */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1600 1200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 대지 배경 (소프트 카키/잔디밭) */}
              <rect width="1600" height="1200" fill="#ebedd8" />

              {/* 강/호수 (파스텔 블루) */}
              <path
                d="M-50,200 C300,250 400,100 650,250 C900,400 950,550 1200,600 C1450,650 1500,850 1650,900"
                stroke="#d0e1fd"
                strokeWidth="100"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M-50,200 C300,250 400,100 650,250 C900,400 950,550 1200,600 C1450,650 1500,850 1650,900"
                stroke="#b9d4fd"
                strokeWidth="60"
                strokeLinecap="round"
                fill="none"
              />

              {/* 공원 구역들 (부드러운 연두색) */}
              <rect x="150" y="80" width="280" height="220" rx="35" fill="#d2dfb9" />
              <rect x="1000" y="150" width="300" height="250" rx="40" fill="#d2dfb9" />
              <rect x="350" y="750" width="400" height="300" rx="45" fill="#d2dfb9" />
              <circle cx="1300" cy="900" r="160" fill="#d2dfb9" />

              {/* 도로망 - 메인 도로 루프 (소프트 베이지) */}
              <path
                d="M100,500 L800,200 L1500,500 L1200,1000 L400,1000 Z"
                stroke="#faf9f2"
                strokeWidth="48"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M100,500 L800,200 L1500,500 L1200,1000 L400,1000 Z"
                stroke="#ebe7d9"
                strokeWidth="42"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M100,500 L800,200 L1500,500 L1200,1000 L400,1000 Z"
                stroke="#fff"
                strokeWidth="4"
                strokeDasharray="15 15"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
              />

              {/* 연결 샛길들 */}
              <path d="M800,200 L800,600 L400,1000" stroke="#faf9f2" strokeWidth="32" strokeLinecap="round" fill="none" />
              <path d="M800,200 L800,600 L400,1000" stroke="#ebe7d9" strokeWidth="26" strokeLinecap="round" fill="none" />

              <path d="M1200,1000 L1000,580 L1500,500" stroke="#faf9f2" strokeWidth="32" strokeLinecap="round" fill="none" />
              <path d="M1200,1000 L1000,580 L1500,500" stroke="#ebe7d9" strokeWidth="26" strokeLinecap="round" fill="none" />

              {/* 마을 데코레이션 요소들 (SVG 기반 나무, 꽃밭, 놀이터 등) */}
              {/* 나무숲들 */}
              <g transform="translate(200, 150)">
                <text x="0" y="0" fontSize="32">🌳</text>
                <text x="30" y="20" fontSize="24">🌳</text>
                <text x="-25" y="25" fontSize="28">🌳</text>
              </g>
              <g transform="translate(1100, 250)">
                <text x="0" y="0" fontSize="32">🌳</text>
                <text x="40" y="10" fontSize="24">🌳</text>
                <text x="-10" y="35" fontSize="28">🌳</text>
              </g>
              <g transform="translate(500, 850)">
                <text x="0" y="0" fontSize="36">🌳</text>
                <text x="40" y="30" fontSize="28">🌳</text>
                <text x="-40" y="20" fontSize="32">🌳</text>
                <text x="10" y="50" fontSize="24">🌳</text>
              </g>

              {/* 랜드마크 건물 & 이모지 표현 */}
              <g transform="translate(290, 140)">
                <text x="0" y="0" fontSize="48">🏫</text>
                <text x="-20" y="20" fontSize="12" fill="#637048" fontWeight="bold" fontFamily="sans-serif">마을 유치원</text>
              </g>
              
              <g transform="translate(1120, 220)">
                <text x="0" y="0" fontSize="48">🎠</text>
                <text x="-15" y="25" fontSize="12" fill="#637048" fontWeight="bold" fontFamily="sans-serif">어린이 공원</text>
              </g>

              <g transform="translate(1300, 880)">
                <text x="0" y="0" fontSize="56">⛲</text>
                <text x="-20" y="30" fontSize="12" fill="#637048" fontWeight="bold" fontFamily="sans-serif">중앙 수변공원</text>
              </g>

              <g transform="translate(680, 480)">
                <text x="0" y="0" fontSize="48">🏥</text>
                <text x="-20" y="25" fontSize="12" fill="#637048" fontWeight="bold" fontFamily="sans-serif">코코언어 발달센터</text>
              </g>

              {/* 군데군데 예쁜 아이콘 */}
              <text x="120" y="780" fontSize="28">🏡</text>
              <text x="200" y="900" fontSize="28">🏡</text>
              <text x="80" y="850" fontSize="24">🏡</text>
              
              <text x="1450" y="180" fontSize="28">🏡</text>
              <text x="1380" y="260" fontSize="24">🏡</text>

              <text x="750" y="90" fontSize="32">⛺</text>
              <text x="450" y="450" fontSize="32">🌷</text>
              <text x="500" y="430" fontSize="24">🌷</text>
              <text x="1100" y="700" fontSize="32">🌾</text>
            </svg>

            {/* 실시간 매칭 상태 말풍선 & CTA 버튼 (지도 중앙 근처에 배치) */}
            <div className="absolute left-[380px] top-[400px] flex flex-col items-center gap-3 z-20 pointer-events-auto">
              {/* 말풍선 */}
              <div className="neon-glow-card bg-white/95 backdrop-blur-md px-6 py-4 rounded-[22px] max-w-[340px] text-center shadow-lg relative transform hover:scale-105 transition-all duration-300 animate-fade-in">
                <span className="font-extrabold text-sm sm:text-base text-primary block mb-1">
                  📌 {locationName} 매칭 대기 현황
                </span>
                <p className="text-on-surface-variant font-medium text-xs sm:text-sm leading-relaxed">
                  {currentStats.text}
                </p>
                {/* 말풍선 꼬리 */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-r-2 border-b-2 border-primary/30 rotate-45"></div>
              </div>

              {/* 초대형 CTA 버튼 */}
              <button
                onClick={() => {
                  playPopSound();
                  setIsModalOpen(true);
                }}
                className="interactive-btn pulse-glow px-6 py-3.5 bg-gradient-to-r from-primary to-[#5d9cec] hover:from-primary-container hover:to-[#5d9cec] text-white font-bold rounded-[20px] text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>🤝</span>
                <span>내 아이 맞춤형 짝꿍 그룹 개설하기</span>
              </button>
            </div>

            {/* 걸어다니는 캐릭터 아이들 */}
            {characters.map((char) => (
              <div
                key={char.id}
                onClick={() => {
                  playPopSound();
                  setSelectedCharacter(char);
                }}
                className={`character-pin absolute w-14 h-14 flex items-center justify-center cursor-pointer z-30 transition-transform ${char.walkClass}`}
              >
                <div className="relative flex flex-col items-center">
                  {/* 캐릭터 이름 배너 */}
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-[12px] text-[10px] font-bold shadow-sm border border-outline-variant mb-1 pointer-events-none whitespace-nowrap select-none">
                    {char.name}({char.age}세)
                  </div>
                  {/* 캐릭터 이모티콘 둥근 핀 */}
                  <div className="character-bounce w-11 h-11 bg-white rounded-full flex items-center justify-center text-2xl shadow-md border-2 border-secondary/20 hover:border-primary transform duration-300 hover:rotate-12">
                    {char.emoji}
                  </div>
                  {/* 발밑 그림자 */}
                  <div className="w-8 h-1.5 bg-black/10 rounded-full blur-[1px] mt-0.5"></div>
                </div>
              </div>
            ))}
          </div>

          {/* 캐릭터 상세 프로필 팝업 (지도 우측 하단 오버레이) */}
          {selectedCharacter && (
            <div className="absolute bottom-4 right-4 z-40 bg-white/95 backdrop-blur-md p-5 rounded-[22px] shadow-2xl border border-outline-variant w-[280px] sm:w-[320px] animate-fade-in transition-all">
              <div className="flex justify-between items-start mb-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center text-2xl">
                    {selectedCharacter.emoji}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-on-surface">
                      {selectedCharacter.name} 짝꿍 카드
                    </h3>
                    <span className="text-xs text-on-surface-variant">만 {selectedCharacter.age}세 • {selectedCharacter.temper}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    playPopSound();
                    setSelectedCharacter(null);
                  }}
                  className="interactive-btn text-on-surface-variant hover:text-primary transition-colors text-lg p-1"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2 mb-4 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-surface-container">
                  <span className="text-on-surface-variant font-medium">발달 수준</span>
                  <span className="font-bold text-primary">{selectedCharacter.level}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-container">
                  <span className="text-on-surface-variant font-medium">매칭 목표</span>
                  <span className="font-bold text-secondary">{selectedCharacter.goal}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-on-surface-variant font-medium">기질 기여</span>
                  <span className="font-bold text-[#825500]">{selectedCharacter.temper}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  playPopSound();
                  setIsModalOpen(true);
                  setSelectedCharacter(null);
                }}
                className="interactive-btn w-full py-2.5 bg-[#f5f3ef] hover:bg-secondary-container hover:text-on-secondary-container text-on-surface font-bold rounded-[16px] text-xs sm:text-sm transition-all duration-200 border border-outline-variant/30 flex items-center justify-center gap-1.5"
              >
                <span>💬</span>
                <span>{selectedCharacter.name}이와 1:1 짝꿍 신청하기</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 3. 하단 섹션: 매칭 현황 및 그룹 유형 안내 가이드 (Card Grid) */}
      <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 카드 1 */}
        <div className="bg-white p-6 rounded-[22px] shadow-sm hover:shadow-md border border-outline-variant/50 transition-all duration-300 hover:-translate-y-1.5 flex gap-4 items-start">
          <div className="w-12 h-12 rounded-[18px] bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-xl font-bold">
            📍
          </div>
          <div>
            <h3 className="font-extrabold text-base text-on-surface mb-1.5">위치/시간 일치</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
              내 활동 반경 3~5km 이내의 친구들만 쏙쏙 찾아 매칭 및 정기 놀이 그룹을 매칭해 드립니다.
            </p>
          </div>
        </div>

        {/* 카드 2 */}
        <div className="bg-white p-6 rounded-[22px] shadow-sm hover:shadow-md border border-outline-variant/50 transition-all duration-300 hover:-translate-y-1.5 flex gap-4 items-start">
          <div className="w-12 h-12 rounded-[18px] bg-green-50 text-green-600 flex items-center justify-center shrink-0 text-xl font-bold">
            🎯
          </div>
          <div>
            <h3 className="font-extrabold text-base text-on-surface mb-1.5">발달 수준 맞춤형</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
              동일한 언어 발달 연령과 장단기 언어치료 목표를 공유하여 자연스럽게 언어를 터득합니다.
            </p>
          </div>
        </div>

        {/* 카드 3 */}
        <div className="bg-white p-6 rounded-[22px] shadow-sm hover:shadow-md border border-outline-variant/50 transition-all duration-300 hover:-translate-y-1.5 flex gap-4 items-start">
          <div className="w-12 h-12 rounded-[18px] bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 text-xl font-bold">
            🤝
          </div>
          <div>
            <h3 className="font-extrabold text-base text-on-surface mb-1.5">기질/성향 조합</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
              사회성이 낮거나 자존감이 부족한 아이들을 위한 최적의 상호작용 기질 비율로 모둠을 엮어드립니다.
            </p>
          </div>
        </div>
      </div>

      {/* [NEW] 수동 지역 선택 모달 팝업 */}
      {isRegionModalOpen && (
        <div className="fixed inset-0 bg-black/55 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-[24px] shadow-2xl border border-outline-variant overflow-hidden animate-scale-up">
            
            {/* 헤더 */}
            <div className="bg-gradient-to-r from-primary/10 to-[#5d9cec]/10 px-6 py-5 border-b border-surface-container flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🗺️</span>
                <h3 className="text-lg font-extrabold text-primary font-headline-md">
                  우리 동네 대기 현황 확인하기
                </h3>
              </div>
              <button
                onClick={() => {
                  playPopSound();
                  setIsRegionModalOpen(false);
                }}
                className="interactive-btn text-on-surface-variant hover:text-primary transition-colors text-2xl font-bold p-1"
              >
                ✕
              </button>
            </div>

            {/* 본문 폼 */}
            <div className="p-6 space-y-5">
              <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                GPS 오차가 있거나 다른 동네의 매칭 현황을 보고 싶으시다면 아래에서 선택해 주세요.
              </p>

              {/* 시/도 선택 */}
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  시 / 도 선택
                </label>
                <select
                  value={tempSido}
                  onChange={(e) => handleSidoChange(e.target.value)}
                  className="w-full bg-[#fbf9f5] border border-outline-variant rounded-[16px] px-4 py-3.5 text-sm font-semibold outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  {Object.keys(regionData).map((sido) => (
                    <option key={sido} value={sido}>{sido}</option>
                  ))}
                </select>
              </div>

              {/* 구/군/동 선택 */}
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  구 / 군 / 동 선택
                </label>
                <select
                  value={tempGugundong}
                  onChange={(e) => setTempGugundong(e.target.value)}
                  className="w-full bg-[#fbf9f5] border border-outline-variant rounded-[16px] px-4 py-3.5 text-sm font-semibold outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  {regionData[tempSido]?.map((gugundong) => (
                    <option key={gugundong} value={gugundong}>{gugundong}</option>
                  ))}
                </select>
              </div>

              {/* 확인 버튼 */}
              <div className="pt-2">
                <button
                  onClick={handleConfirmRegion}
                  className="w-full py-3.5 bg-primary text-white font-extrabold rounded-[18px] text-base hover:bg-primary-container hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <span>확인</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. 모달: 내 아이 맞춤형 짝꿍 그룹 개설 폼 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/55 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white w-full max-w-lg rounded-[24px] shadow-2xl border border-outline-variant overflow-hidden animate-scale-up">
            
            {/* 모달 헤더 */}
            <div className="bg-gradient-to-r from-primary/10 to-[#5d9cec]/10 px-6 py-5 border-b border-surface-container flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧸</span>
                <h3 className="text-lg font-extrabold text-primary font-headline-md">
                  맞춤형 짝꿍 매칭 개설하기
                </h3>
              </div>
              <button
                onClick={() => {
                  playPopSound();
                  setIsModalOpen(false);
                }}
                className="interactive-btn text-on-surface-variant hover:text-primary transition-colors text-2xl font-bold p-1"
              >
                ✕
              </button>
            </div>

            {/* 모달 폼 */}
            <form onSubmit={handleFormSubmit} className="p-6 space-y-5">
              
              {/* 아이 나이 입력 */}
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  아이의 현재 나이 (만)
                </label>
                <select
                  value={formData.childAge}
                  onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                  className="w-full bg-[#fbf9f5] border border-outline-variant rounded-[16px] px-4 py-3 text-sm font-semibold outline-none focus:border-primary transition-colors"
                >
                  <option value="2">만 2세</option>
                  <option value="3">만 3세</option>
                  <option value="4">만 4세</option>
                  <option value="5">만 5세</option>
                  <option value="6">만 6세</option>
                  <option value="7">만 7세</option>
                </select>
              </div>

              {/* 언어 발달 수준 */}
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  아이의 언어 발달 수준
                </label>
                <select
                  value={formData.langLevel}
                  onChange={(e) => setFormData({ ...formData, langLevel: e.target.value })}
                  className="w-full bg-[#fbf9f5] border border-outline-variant rounded-[16px] px-4 py-3 text-sm font-semibold outline-none focus:border-primary transition-colors"
                >
                  <option value="level1">수용/표현언어 1~2세 수준 (단어 위주 및 옹알이)</option>
                  <option value="level2">수용/표현언어 2~3세 수준 (두 단어 문장 조합)</option>
                  <option value="level3">수용/표현언어 4~5세 수준 (간단한 스토리 구성)</option>
                  <option value="level4">말더듬 또는 특정 발음 조음 지연 어려움</option>
                </select>
              </div>

              {/* 집중 치료/매칭 목표 */}
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  가장 개선하고 싶은 발달 영역
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'sociality', label: '👥 또래 사회성 향상' },
                    { id: 'vocabulary', label: '🗣️ 어휘 표현력 확장' },
                    { id: 'listening', label: '👂 경청 및 규칙 습득' },
                    { id: 'confidence', label: '✨ 자신감/자존감 촉진' }
                  ].map((target) => (
                    <button
                      key={target.id}
                      type="button"
                      onClick={() => {
                        playPopSound();
                        setFormData({ ...formData, goal: target.id });
                      }}
                      className={`py-3 px-3 rounded-[18px] text-xs sm:text-sm font-bold border-2 transition-all ${
                        formData.goal === target.id
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-outline-variant/40 hover:border-primary/50 text-on-surface-variant'
                      }`}
                    >
                      {target.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 선호 성향/기질 */}
              <div>
                <label className="block text-sm font-bold text-on-surface mb-2">
                  희망하는 짝꿍의 행동 기질
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'calm', label: '차분형' },
                    { id: 'active', label: '활달형' },
                    { id: 'lead', label: '주도형' }
                  ].map((temp) => (
                    <button
                      key={temp.id}
                      type="button"
                      onClick={() => {
                        playPopSound();
                        setFormData({ ...formData, temperType: temp.id });
                      }}
                      className={`py-2 px-1.5 rounded-[16px] text-xs font-bold border-2 transition-all ${
                        formData.temperType === temp.id
                          ? 'border-secondary bg-secondary/5 text-secondary'
                          : 'border-outline-variant/40 hover:border-secondary/50 text-on-surface-variant'
                      }`}
                    >
                      {temp.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-extrabold rounded-[18px] text-base hover:bg-primary-container hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <span>🚀</span>
                  <span>우리 동네 맞춤 짝꿍 모집하기</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. 모달: 매칭 신청/개설 완료 팝업 */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white w-full max-w-sm rounded-[24px] p-6 text-center shadow-2xl border border-outline-variant animate-scale-up">
            <div className="w-16 h-16 bg-secondary/15 text-secondary text-4xl rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              🎉
            </div>
            <h3 className="text-xl font-extrabold text-secondary font-headline-md mb-2">
              짝꿍 그룹 개설 완료!
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-medium">
              <span className="font-bold text-on-surface">{locationName}</span>에서 {formData.childAge}세 또래 친구들과 상호작용할 매칭방이 활성화되었습니다.<br />
              매칭 적합도가 높은 동네 친구들의 부모님께 즉시 알림이 발송됩니다.
            </p>
            <button
              onClick={() => {
                playPopSound();
                setIsSuccessModalOpen(false);
              }}
              className="interactive-btn w-full py-3 bg-secondary hover:bg-secondary-container hover:text-on-secondary-container text-white font-bold rounded-[18px] transition-all duration-200"
            >
              확인
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
