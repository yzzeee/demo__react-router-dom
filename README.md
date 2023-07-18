```shell
yarn create react-app .
rm -rf yarn.lock node_modules
yarn set version berry
yarn # 패키지 설치

# 패키지 버전 확인
npm view react-router-dom versions # check v5 latest
## or
yarn npm info react-router-dom -f versions --json
yarn npm info history -f versions --json

# 패키지 정보 확인
yarn info react-router-dom                  
└─ react-router-dom@npm:5.3.4
   ├─ Instances: 1
   ├─ Version: 5.3.4
   │
   └─ Dependencies
      ├─ @babel/runtime@npm:^7.12.13 → npm:7.22.6
      ├─ history@npm:^4.9.0 → npm:4.10.1
      ├─ loose-envify@npm:^1.3.1 → npm:1.4.0
      ├─ prop-types@npm:^15.6.2 → npm:15.8.1
      ├─ react-router@npm:5.3.4 → npm:5.3.4
      ├─ tiny-invariant@npm:^1.0.2 → npm:1.3.1
      └─ tiny-warning@npm:^1.0.0 → npm:1.0.3

# 테스트할 패키지 설치
yarn add react-router-dom@5.3.4
yarn add -D @types/react-router-dom@5.3.3
yarn add history@4.10.1
yarn add -D @types/history@4.7.11
```
# 설치할 타입 버전 확인
항상 궁금한게.. 내가 설치한 패키지의 타입은 어떤 버전을 설치해야하느냐에 대한 것이다.. 아래에 궁금한 내용을 정리한 사람이 있어서 첨부한다.
https://stackoverflow.com/questions/43071705/how-to-relate-a-version-of-types-to-the-versions-of-the-associated-package-in-n
https://github.com/DefinitelyTyped/DefinitelyTyped#how-do-definitely-typed-package-versions-relate-to-versions-of-the-corresponding-library

# react-router-dom document
메인 컨셉은 : https://reactrouter.com/en/main/start/concepts 문서에서 확인

테스트한 버전의 문서:
https://v5.reactrouter.com/web/guides/quick-start

# 에러
history 를 5.3.0 을 설치 했을 때,, react-router-dom 의 NavLink 클릭 시 동작을 하지 않았다.
https://github.com/remix-run/react-router/issues/7731 이 이슈의 맨 아래 질문을 통해 4버전대를 설치하니까 정상적으로 동작했다.
