// 로드맵 진행도 관리를 위한 localStorage 헬퍼 함수들

const STORAGE_KEY = 'roadmapProgress';

// 기본 로드맵 데이터 (초기 상태)
const defaultRoadmapData = {
  completedItems: [0, 1, 2, 3] // 처음 4개는 이미 완료된 상태
};

/**
 * localStorage에서 로드맵 진행도 데이터를 가져옵니다
 * @returns {Object} 로드맵 진행도 데이터
 */
export const getRoadmapProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    // 첫 접속 시 기본 데이터로 초기화
    setRoadmapProgress(defaultRoadmapData);
    return defaultRoadmapData;
  } catch (error) {
    console.error('로드맵 진행도 로드 실패:', error);
    return defaultRoadmapData;
  }
};

/**
 * localStorage에 로드맵 진행도 데이터를 저장합니다
 * @param {Object} data - 저장할 진행도 데이터
 */
export const setRoadmapProgress = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('로드맵 진행도 저장 실패:', error);
  }
};

/**
 * 특정 아이템을 완료 상태로 표시합니다
 * @param {number} itemIndex - 완료할 아이템의 인덱스 (0-based)
 */
export const markItemCompleted = (itemIndex) => {
  const currentProgress = getRoadmapProgress();

  if (!currentProgress.completedItems.includes(itemIndex)) {
    currentProgress.completedItems.push(itemIndex);
    currentProgress.completedItems.sort(); // 순서대로 정렬
    setRoadmapProgress(currentProgress);
  }
};

/**
 * 특정 아이템이 완료되었는지 확인합니다
 * @param {number} itemIndex - 확인할 아이템의 인덱스
 * @returns {boolean} 완료 여부
 */
export const isItemCompleted = (itemIndex) => {
  const currentProgress = getRoadmapProgress();
  return currentProgress.completedItems.includes(itemIndex);
};

/**
 * 아이템 인덱스를 기반으로 로드맵 아이템의 상태를 결정합니다
 * @param {number} itemIndex - 아이템 인덱스
 * @param {Array} completedItems - 완료된 아이템 인덱스 배열
 * @returns {Object} 아이템의 isComplete, state 정보
 */
export const getItemState = (itemIndex, completedItems) => {
  const isCompleted = completedItems.includes(itemIndex);

  if (isCompleted) {
    return {
      isComplete: true,
      state: "completed"
    };
  }

  // 현재 아이템이 완료되지 않은 경우
  // 이전 아이템들이 모두 완료되었는지 확인
  if (itemIndex === 0) {
    return { isComplete: false, state: "normal" };
  }

  // 이전 아이템이 완료되었는지 확인
  const previousItemCompleted = completedItems.includes(itemIndex - 1);

  if (previousItemCompleted) {
    return { isComplete: false, state: "normal" };
  } else {
    return { isComplete: false, state: "disable" };
  }
};

/**
 * 모든 로드맵 아이템이 완료되었는지 확인합니다
 * @returns {boolean} 전체 완료 여부
 */
export const isAllItemsCompleted = () => {
  const currentProgress = getRoadmapProgress();
  const totalItems = 6; // 총 6개 아이템 (인덱스 0-5)
  const requiredItems = [0, 1, 2, 3, 4, 5];

  // 모든 필수 아이템이 완료되었는지 확인
  return requiredItems.every(itemIndex =>
    currentProgress.completedItems.includes(itemIndex)
  );
};

/**
 * 로드맵 진행도를 초기화합니다 (개발/테스트용)
 */
export const resetRoadmapProgress = () => {
  setRoadmapProgress(defaultRoadmapData);
};