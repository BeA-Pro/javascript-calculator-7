아래는 맞춤법을 교정하고 목록으로 정리한 버전입니다.

---

# javascript-calculator-precourse

## 기본 구현 목록

### 기능 구현

- [ ] `Console.readLineAsync()`를 이용해 입력받기
- [ ] 문자열을 `\n`으로 나누어 커스텀 구분자 입력부와 계산할 숫자 입력부로 분리하기
- [ ] 커스텀 구분자와 `,`, `:`를 구분자로 설정하기
- [ ] 숫자 입력부를 구분자들로 나누기
- [ ] 구분된 숫자들을 더하고 `Console.print()`를 이용해 결과 출력하기

### 예외 처리

- [ ] 문자열에 `\n`이 두 개 이상 존재하는지 확인
- [ ] 커스텀 구분자 입력부가 `//`로 시작하는지 확인
- [ ] 숫자 입력부를 구분자로 나눈 결과가 양수인지 확인

## 테스트 코드 구현 목록

- [ ] 정상 처리되는 경우 1  
       입력: `1,2:3`  
       출력: `결과: 6`

- [ ] 정상 처리되는 경우 2  
       입력: `//(\n1,2:3(4`  
       출력: `결과: 10`

- [ ] 정상 처리되는 경우 3  
       입력: `//abc\n1abc2abc3:4`  
       출력: `결과: 10`

- [ ] 문자열에 `\n`이 두 개 이상 존재하는 경우  
       입력: `//()\n\n1,2:3`  
       출력: `[ERROR] 입력 문자열에 \n이 2개 이상입니다.`

- [ ] 커스텀 구분자 입력부가 `//`로 시작하지 않는 경우  
       입력: `//abc\n1abc2:3,4`  
       출력: `[ERROR] 커스텀 구분자 입력부는 문자열 앞에 위치하여 "//"로 시작하고 "\n"으로 끝나야 합니다.`

- [ ] 숫자 입력부를 구분자로 나눈 결과가 양수인지 확인 (음수인 경우)  
       입력: `//abc\n-1abc2:3,4`  
       출력: `[ERROR] 계산되는 숫자는 양수만 가능합니다. "-1"은 양수가 아닙니다.`

- [ ] 숫자 입력부를 구분자로 나눈 결과가 양수인지 확인 (문자인 경우)  
       입력: `//abc\naabc2:3,4`  
       출력: `[ERROR] 계산되는 숫자는 양수만 가능합니다. "a"는 양수가 아닙니다.`

## 그 외 요구 사항

- [ ] AngularJS Git Commit Message Conventions에 맞춰 커밋 메시지 작성
- [ ] JavaScript Style Guide 컨벤션을 지키며 코드 작성
- [ ] 코드 구현 후, 더 깔끔하게 리팩토링
