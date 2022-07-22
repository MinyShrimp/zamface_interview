# 작당모의

## 인터뷰

### 1. 코딩은 언제 시작 하셨는지요?
> A. 중학교 3학년(16살) 부터 시작해서 현재 26살인 지금까지 이어지고 있습니다. 

### 2. Github등에 가장 지원자님의 설계와 구조, 코드를 파악할수 있는 프로젝트가 있는지요? (개인코드면 더 좋습니다.)

> A. 가장 최근에 팀프로젝트로 제작한 코드를 보내드리겠습니다.
> 
> 링크 : https://github.com/MinyShrimp/CodeCamp-TeamProject

### 3. 간단한 링크드 리스트나 해시테이블 구현 하는 코드 가능 하신지요?

> A. https://github.com/MinyShrimp/zamface_interview/tree/main/linkedList

### 4. 알고리즘과 코드 학습을 꾸준히 하시는지요?

> A. typescript로 알고리즘을 연습했던 Repository를 보내드리겠습니다.
>
> 아래 링크에 /src/memory에 있는 Memory Class가 Hashing을 기반으로 만든 자료구조입니다.
>
> 링크 : https://github.com/MinyShrimp/data-structure

###  5. 가장 자신있게 보여줄 코드가 별도로 있으신지요?

> A. 2번 답변에 보내드린 팀프로젝트 코드가 현재 제가 낼 수 있는 가장 자신있는 코드들입니다.

### 6. 하루에 코딩과 학습을 얼마나 하시는지요?

> A. 제가 취미가 별도로 없어서 근 3달간 일어나서 잘때까지 한듯합니다.

### 7. 지난 6개월간 보신 기술서적이 무었이 있으신지요?

> A. 윤성우의 열혈 자료구조, Clean Code 를 읽었습니다.

### 8. 좋은 코드를 만드는데 가장 신경 쓰는 부분이 어느 부분인지요?

> A. 남들이 읽었을때 잘 읽히는 코드가 좋은 코드라 생각하며 최대한 깔끔하게 짜고, 
> 주석으로 코드의 구성을 간단하게 적어둡니다.

### 9. Django Admin / Nodejs서비스를 개발 하시게 됩니다. 문제가 없을런지요? (일정 기간 이상 어드민 개발 위주가 됩니다)

> A. NodeJS는 Express, NestJS 경험이 있으며, 
> 
> Python은 Django Rest Framework을 사용해서 구현해본적 있습니다.
> 
> 다만, 현재로서는 python보다 typescript를 기반으로 한 NodeJS가 더 익숙합니다.

### 10. 이직 사유가 긍금 합니다.

> A. 프론트엔드에서 백엔드로 포지션을 변경하고 싶었습니다.

## 문제
```
문] 아래의 문제를 해결하는 코드를 작성. 

단일코드가 아닌 OOP 클래스군 or FP 모듈군 구조로 요청. 
(예] 생성기, 쿼리처리자, 복사처리자, 파일관리자, 시리얼라이저 등)

a. m x n 의 격자를 생성 
(m, n 모두 2 ~ 10000 사이의 정수)

b. generateIsland(n) n개의 점을 격자의 좌표에 삽입. 
(중복되지 않게 격자 점을 초과 하지 않게, 즉 중첩 불가능)

generateIsland 를 여러번 호출 할수 있음, 
다만 중복 되지 않음 으로 실제 할당된 갯수를 리턴

c. removeIsland(n) n개 만큼의 좌표에서 섬을 제거, 
남은 섬 만큼만 제거 가능, 위와 같이 실제 삭제된 점 갯수 리턴

d. 위의 격자와 섬좌표를 파일에 read/write 처리

* 추상화를 가능한한 사용
* 구조적인 설계
* 언어적 레벨, 도메인 로직, 데이타 부분 등 추상화 레이어링과 구조를 사용
* TDD적 코딩 
* (보너스) 매우큰 격자일 경우 분산 가능?
* (보너스) 매우큰 격자일 경우 삽입/삭제시 성능 O(n^2), O(2*n) 등 구조를 탈피
```

답] https://github.com/MinyShrimp/zamface_interview