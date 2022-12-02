## 0.0 TypeScript 준비하기
- `nvm install --lts`
- `npm i typescript`

## 0.1 JavaScript vs. TypeScript
- `Type Safety`
- `Fixed Function Arguments`
- `Runtime Error`

## 0.2 TypeScript 작동원리
- TypeScript는 코드를 검수한 뒤 브라우저가 이해할 수 있는 javascript로 변환하고 compile한다.

## 0.3 Implicit Types vs. Explicit Types
- JavaScript는 그저 변수만 만들면 된다
- TypeScript Type 시스템은 타입을 직접 지정할 수 있으며(`Explicit Types`) 타입을 추론하기도 한다(`Implicit Types`)
    ```typescript
    let a : boolean = false
    ```
    ```typescript
    let c : number[] = []
    // Number 타입의 Array
    ```
- TypeScript 추론을 활용하면 가독성 좋고 빠른 개발이 가능하다

## 0.3.1 Optional Types
- 어떤 object인지 정의해야 한다
  ```typescript
  const player : {
    name: string,
    age?: number,
  } = {
    name: "nico"
  }
  ```
  - 변수명에 `?`를 넣으면 없을 때도 대비할 수 있다
  ```typescript
    if (player.score && player.score > 10) then ...
  ```
- type alias
  - type Player = {}
- define type of function return
- variable / function argument / function return