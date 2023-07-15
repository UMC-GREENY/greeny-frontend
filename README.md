# 2023-1 UMC Project - GREENY

React로 구현되었습니다. 상태 관리 툴은 Recoil을 사용합니다.

## 협업 방식

**_feature branch_** : 새로운 기능을 제작할 때 생성해주세요.
예를 들어, 로그인 파트 제작을 진행하시면 `feature/login`

**_hotfix branch_**: 버그를 수정할 때 생성해주세요.
예를 들어, 로그인 파트 버그를 수정할때는 `hotfix/login`

본인 branch에 작업을 진행하고, master branch에 PR(Pull Request)를 날리고, 팀원에게 말씀해주세요.
팀원들이 상호 보완하면서 개선해나가면 되겠습니다.

항상 첫 작업을 시작하기 전에, master branch를 Pull 받고 시작해주세요!

## 컴포넌트 분리

한 파일이 한 비즈니스로직을 수행하게 만들어주세요.

> 로그인 화면을 만들 때,
> 사용자 아이디 입력창, 로그인 버튼을 다른 파일로 만들기 -> X
> 사용자 아이디 입력창과 로그인 버튼이 포함된 한 파일을 만들기 -> O

폴더 명은 Top down으로 생성해주세요. 컴포넌트 View부분은 ~.jsx로 생성해주세요.

> 메인 홈 화면의 랜딩 사진 컴포넌트를 만들 경우
> Home.main.landing.picture.jsx

Styled component는 재사용성을 위해 따로 Styles 폴더를 생성하여 import 해주세요.

> Home.main.landing.picture.jsx 의 Styled component를 생성할 경우,
> Styles/Home.main.landing.picture.styles.js의 경로로 파일을 생성해주세요.

Styles 폴더와 같은 원리로, 필요하다면 API폴더, Recoil폴더, Util폴더를 생성해주세요.

> Home.main.landing.picture.jsx 의 API를 생성할 경우,
> API/Home.main.landing.picture.api.js 같은 형식으로 생성해주세요.

헷갈리는 부분이 있으실 경우, master branch의 `0694328340612cd7187b7a23489e50a0c5d419d3` 버전을 참고부탁드립니다!
