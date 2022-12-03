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

## 0.3.2 ReadOnly Types
- `readonly [TYPE]`
- 처음 받은 값을 수정할 수 없음

## 0.3.3 Tuple
```typescript
const player: [string, number, boolean] = ["nico", 1, true]
```
- Array의 길이, 각 아이템의 타입과 순서를 정해줄 수 있다

## 0.3.4 TypeScript 상황을 설명하기 위한 변수들
- typeChecker에게 type에 대해 설명하기
- `?` Type or undefined
- `any`: escape typescript
- `unknown`: type을 추정할 수 없다면 / `if`+`typeof`으로 검증해줘야 사용가능함
- `void`: return하지 않는 함수에 사용됨
- `never`: return하지 않고 exception하는 함수에 사용됨 / `if-else` 문에서 더 이상의 type 경우가 없을 경우에도 never다

## 0.4 Call Signatures
- 함수를 호출할 때 올바른 Type이 무엇인지 설명한 설계도
- 함수에 직접(함수자체/인자들/리턴값)에 Type을 설명하지 않고도   
  Call Signatures를 만들어 함수에 적용시켜도 된다
  ```typescript
  type Add = (a:number, b:number) => number;

  const add:Add = (a, b) => a + b
  ```
  
## 0.4.1 Overloading
  - 직접 사용하기보다 Library Package을 만드는데 사용됨
  - 여러 Call Signatures를 포함하며 이를 `if-typeof`으로 관리할 수 있다
  - string이나 config 객체 중 하나를 받는 경우
  - Call Signature마다 인자 개수가 다를 경우 선택적 인자에 `?`와 type를 지정해준다
  ```typescript
  type Add = {
    (a:number, b:number):number
    (a:number, b:number, c:number):number
  }

  const add:Add = (a, b, c?:number) => {
    if (c) return a + b + c
    return a + b
  }
  ```

## 0.4.2 Polymorphism
- Concrete Type: TypeScript에서 제공하는 고유 타입들
  - number, boolean, string
- 예를 들어 다양한 타입을 받는 Array가 있다면 Concrete Type만을 사용한다면 가능한 모든 경우의 수를 작성해야 할 것이다
- 이 때 Generic Type을 사용할 수 있다
- Generic Type: 어떠한 형태로 데이터를 받는지는 유지하면서 변수칸을 두어 어떠한 타입을 받을 수 있다.(`any`와 다른 점)
  ```typescript
  type SuperPrint = <T>(a: T[]) => T
  ```
  - `<T>`: 제네릭타입 T를 사용하겠다
  - `T[]`: T를 첫번째 인자 Array에서 찾는다
  - `T`: T의 타입이 확정되면 이후에 T는 해당 타입으로 call signature을 생성한다
  - 제너릭타입이 선언된 후 처음 제너릭을 사용할 때 해당 타입을 유추한다
- 여러 Generic Type 사용하기
  - `T`, `M`, `V`
  ```typescript
  type SuperPrint = <T,M>(a: T[], b: M) => T
  ```
## 0.4.3 Generics
- 제너릭을 사용해서 직접 call signature를 만들 일은 거의 없어
- 남들이 만든 제너릭을 끌어다 쓰는 게 다반사다

## 0.5 Class
- class constructor의 item들에 type을 지정해줄 수 있다.
  - `public`: class 밖에서 호출할 수 있다(default)
  - `private`: class 밖은 물론 extend한 class들도 사용할 수 없다
  - `protected`: class 밖은 제한하되 extend한 class들은 접근할 수 있다
- class나 method 모두 `abstract`을 맨 앞에 사용하면 javascript에 드러나지 않도록 정의할 수 있다
- `[key]`: key값이 정의되지 않았을 때 사용할 수 있다
- class를 type처럼 사용할 수 있다