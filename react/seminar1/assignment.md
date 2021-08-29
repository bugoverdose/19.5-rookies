19.5-rookies Seminar 1 Assignment
================================

### **due: 2021.09.12(일) 23:59**

## 과제 목적
- React 로 컴포넌트를 다루고 페이지를 만들 수 있다.

## 과제 스펙
- 디자인 및 기획: [피그마](https://www.figma.com/file/BeMaz965LyKRln7dj3RaD4/wafflestudio-19.5-react-seminar?node-id=0%3A1) 참조
- 스펙
  0. 종합
      - 추가, 수정, 삭제, 이름으로 필터 기능 및 대시보드가 있는 명단 관리 프로그램이다.
      - 학년은 `'1'`, `'2'`, `'3'`, `''` 중 하나만 들어간다고 가정할 수 있다.
      - 이름은 2글자 또는 3글자 한국어라고 가정할 수 있다. 
      - 한 학년에 동명이인은 없다고 가정할 수 있다.
      - 필터나 검색, 추가 등의 로직에서 성능 최적화와 관련된 부분은 고려하지 않아도 괜찮다.
        - 대부분의 상황에서, 그건 백엔드 개발자가 생각할 부분이다.
        - 하지만 아직 백엔드와의 통신을 배우지 않았기 때문에 불가피하게 해당 로직을 프론트엔드에서 구현해야 한다.
      - 본 스펙에서 명시하지 않은 세세한 부분들은 따로 채점하지 않으며, 본인이 보기에 "옳다"고 생각되는 대로 구현하면 된다.
  1. 데이터
      - 더미 데이터는 [이 파일](assignment-dummy-data.js)의 데이터를 사용한다.
        - `name`: 이름
        - `grade`: 학년
        - `profileImg`: 프로필 사진 url, 없을 수 (`''`) 있다. 이 경우 대체 텍스트를 적당히 띄운다.
  2. 헤더
      - 로고 클릭 시 새 탭에서 [와플스튜디오 홈페이지](https://wafflestudio.com) 가 열린다.
  3. 대시보드
      - 자유롭게 꾸민다. 총 인원이나 통계 등이 들어갈 수 있다. 빈 칸으로 남겨도 된다.
  4. 리스트
      - 학생들의 목록이 뜬다.
      - 학생이 많아 칸을 넘어갈 시 아래로 스크롤되어 처리되어야 한다.
      - 검색에 뭔가를 입력할 시, 이름으로 필터링한 결과를 보여준다.
        - 따로 엔터를 치거나 등의 활동을 하지 않아도, 그냥 해당 `input`의 `value` 를 `name`이 포함하고 있는 학생 리스트를 출력하면 된다.
        - (ex: `김` 입력 -> `김와플` 등이 보임)
      - `추가` 버튼을 클릭하면 `아직 구현되지 않은 기능입니다`라는 alert 가 뜬다.
      - 학생을 클릭하면
        - '선택되지 않은' 학생이라면, 해당 학생을 '선택'한다.
          - 이때 이미 '선택'된 학생이 있다면, 자동으로 '선택'이 해제된다.
        - '선택'된 학생이라면, 해당 학생을 '선택' 해제한다.
  5. 상세 뷰
      - '선택'된 학생의 상세 뷰이다.
      - 이름과 학년을 수정할 수 있도록 인풋이 있으며, 각 인풋의 `value`의 기본값으로는 학생의 이름과 학년이 들어간다.
      - 프로필 사진은 띄우기만 하면 되고, 수정할 수 있을 필요는 없다.
      - `저장` 버튼을 클릭하면, 변경사항을 저장한다.
        - 저장할 때 항상 이름은 한글 2글자 혹은 3글자여야 하고, 학년은 1, 2, 3 중 하나여야 한다.
        - 해당 조건이 맞지 않으면 저장이 되지 않고, `이름 또는 학년이 올바르지 않습니다.`라는 alert가 뜬다.
      - `삭제` 버튼을 클릭하면, 해당 학생을 삭제한다.

## 주의사항
- 세미나장의 부족한 센스로 인해 디자인이 별로일 수 있습니다.
  - 스타일을 완벽히 똑같이 가져가실 필요는 없고, 간단한 여백 및 색상 등은 자유롭게 조정하실 수 있습니다.
  - 단, ui 및 스펙과 관련된 것은 변경하실 수 없습니다.
  - ui 역시 좋지는 않습니다만, 난이도 조정을 위해 이렇게 결정되었습니다 (추후 변경될 수 있습니다)
- 기타 꾸미고 싶으신 게 있으시다면 자유롭게 꾸며주셔도 좋습니다.

## 제출 방식 및 제출 주의사항
- [해당 문서](../assignment-submit-manual.md) 참조

## 참고하면 좋은 것들
- [해당 문서](../study-links.md) 참조