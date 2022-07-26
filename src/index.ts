import { FileSystem } from "./file/file";
import { IslandLoader } from "./island/island.loader";

/**
 * 문] 아래의 문제를 해결하는 코드를 작성. 
 * 
 * 단일코드가 아닌 OOP 클래스군 or FP 모듈군 구조로 요청. 
 * (예] 생성기, 쿼리처리자, 복사처리자, 파일관리자, 시리얼라이저 등)
 * 
 * a. m x n 의 격자를 생성 
 * (m, n 모두 2 ~ 10000 사이의 정수)
 * 
 * b. generateIsland(n) n개의 점을 격자의 좌표에 삽입. 
 * (중복되지 않게 격자 점을 초과 하지 않게, 즉 중첩 불가능)
 * 
 * generateIsland 를 여러번 호출 할수 있음, 
 * 다만 중복 되지 않음 으로 실제 할당된 갯수를 리턴
 * 
 * c. removeIsland(n) n개 만큼의 좌표에서 섬을 제거, 
 * 남은 섬 만큼만 제거 가능, 위와 같이 실제 삭제된 점 갯수 리턴
 * 
 * d. 위의 격자와 섬좌표를 파일에 read/write 처리
 * 
 * * 추상화를 가능한한 사용
 * * 구조적인 설계
 * * 언어적 레벨, 도메인 로직, 데이타 부분 등 추상화 레이어링과 구조를 사용
 * * TDD적 코딩 
 * * (보너스) 매우큰 격자일 경우 분산 가능?
 * * (보너스) 매우큰 격자일 경우 삽입/삭제시 성능 O(n^2), O(2*n) 등 구조를 탈피
 */

export function solution() {
    const island = IslandLoader();
    return FileSystem.write(
        island.getMap()
    );
};

/**
 * Main 함수
 */
(() => {
    try {
        solution();
    } catch(e) {
        console.log(e);
    }
})();