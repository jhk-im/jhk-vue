# Vue3 + Vite + TypeScript + Quasar + Storybook

## Package

- Vue 3 ecosystem

  - vue 3.x
  - vue-router 4.x
    - vue2 = vuejs/vue-router 3.x.x / vue3 = vuejs/router 4.x.x
    - @types/node : path → vite.config.ts에서 resolve 설정 때 사용  

  - pinia

- Typing
  - TypeScript

- Git custom hooks
  - husky

- Commit conventions
  - @commitlint/config-conventional

- Code Formatter
  - prettier

- UI
  - Quasar
  - @quasar/extras
  - vite quasar plugin

- Linters
  - eslint
  - commitlint
  - lint-staged
  - stylelint

- Modern application deployment
  - GitHub Actions

---

### Piana

- Vue 창시자 Evan You 가 추천하는 상태관리 플러그인
- 핵심 상태관리 플러그인 Vuex 를 대체함
- mutations 없음
- TypeScript를 지원하기 위한 복잡한 래핑 필요 없음
- 빠르고 정확한 autocompletion
- namespaced modules 필요없음
- devtools 공식 지원

### Husky

- Git Hook 을 쉽게 제어하도록 도와주는 매니저
- git hook은 특정 이벤트가 벌어졌을 때 스크립트가 실행되도록 도와줌

### lint-staged

- husky 함께 자주 사용
- git의 staged 된 상태에 파일들에 특정 명령어를 실행할 수 있도록 도와줌
- git staged → git add 명령어로 커밋하기 위해 준비된 상태
- staged된 파일을 수정한 후 다시 git add를 하지않아도 문제가 없도록 도와줌

### commitlint

- 커밋 메세지를 위한 규칙
- 명확한 커밋 히스토리를 위해 간단한 규칙을 제공하고 이를 사용하여 자동화된 도구를 생성

---

### Vite

```zsh
// vite로 vue 프로젝트 생성 
// npm 6.x
npm init vite@latest my-vue-app --template vue

// npm 7+, '--'를 반드시 붙여주세요
npm init vite@latest my-vue-app -- --template vue

// yarn
yarn create vite my-vue-app --template vue

// pnpm
pnpm create vite my-vue-app -- --template vue
```

---

### TypeScript

```text
"forceConsistentCasingInFileNames": true →
```

```text
"importHelpers": true →
```

```text
"baseUrl": ".",
"paths": {
  "@/*": ["src/*"]
},
```

#### src/shared/types

- components.d.ts
- env.d.ts → .env에 대한 유형 정보를 제공
- shims-router.d.ts → Vue Router 정보를 제공
- shims-vue.d.ts → Vue 컴포넌트 정보를 제공
- vite-env-d.ts → .svg / improt.meta.env 환경변수 타입 / import.meta.hot HMR API 타입 제공

---

### ESLint

```zsh
// 설치
npm install eslint --save-dev
// or
yarn add eslint --dev

// config 생성
npm init @eslint/config
// or
yarn create @eslint/config

// 실행
npx eslint yourfile.js
// or
yarn run eslint yourfile.js
```

---

### Prettier

```zsh
// 설치
npm install --save-dev --save-exact prettier
// or
yarn add --dev --exact prettier

// .prettierrc 파일 생성
echo {}> .prettierrc

// prettier 실행 
npx prettier --write .
// or
yarn prettier --write .

// check
npx prettier --check .
```

```json
{
  "printWidth": 140,
  "tabWidth": 2,
  "singleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "semi": true,
  "useTabs": false,
  "proseWrap": "preserve",
  "arrowParens": "always",
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "quoteProps": "as-needed",
  "vueIndentScriptAndStyle": true
}
```

--

### ESLint - Prettier - Vue3

```zsh
//
yarn add -D eslint-plugin-import eslint-plugin-prettier eslint-plugin-promise 

// 
yarn add -D @vue/eslint-config-prettier @vue/eslint-config-typescript
```

```json
  // eslint 
  "lint": "npm run lint:script && npm run lint:markup -s",
  "lint:script": "eslint --ext .ts,vue --ignore-path .gitignore .",
  "lint:markup": "vue-tsc --noEmit"
```

- @vue/eslint-config-prettier → "@vue/prettier" 사용하기 위함
- @vue/eslint-config-typescript → "@vue/typescript/recommended" 사용하기 위함
- eslint-plugin-import → import/export syntax lint / 파일 경로 및 import name 오탈자 방지
- eslint-plugin-prettier → ESLint 규칙으로 Prettier 실행
- eslint-plugin-promise → JavaScrip Promise 모범사례 적용
- eslint-plugin-vue → vue.js 공식 ESLint 플러그인 / .vue 파일과 .js 파일의 Vue 코드 확인
- @typescript-eslint/eslint-plugin → TypeScript 고유의 규칙을 포함하는 플러그인
- @typescript-eslint/parser → ESLint가 TypeScript 코드를 린트하도록 허용하는 Parser

설정이 끝나면 vscode 재부팅

---

### Quasar

```zsh
yarn add quasar @quasar/extras $ yarn add -D @quasar/vite-plugin sass@1.32.0
```

---

### env

- .env.delvelopment
- .env.production
- vite.config.ts
- envDir: resolve(__dirname, "./env"),

---

### husky

```zsh
npx husky-init && npm install       # npm
npx husky-init && yarn              # Yarn 1
yarn dlx husky-init --yarn2 && yarn # Yarn 2

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

- pre-commit : 커밋 메시지를 작성하기 전에 실행하기
- prepare-commit-msg : 커밋 메시지 생성 후 편집기 실행전에 실행하기
- commit-msg : 커밋 메시지와 관련된 명령을 넣을 때 실행하기
- post-commit : 커밋이 완료되면 실행하기
- pre-push : 푸시가 실행되기 전에 실행하기

### Commitlint

```zsh
npm install -g @commitlint/cli @commitlint/config-conventional
yarn add -D @commitlint/cli @commitlint/config-conventional
```

``` json
"@commitlint/cli": "^16.1.0", -> commit 검사
"@commitlint/config-conventional": "^16.0.0", -> commit 규칙
```

#### 기본적인 commit 구조

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### commit-msg hook

```text
# !/bin/sh

. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1
```

#### commitlint.config.js

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
```

---

### Lint-staged

```zsh
npx mrm@2 lint-staged
```

``` json
 "lint-staged": {
    "*.{js, ts, tsx, css, json, md}": [
      "eslint --cache --fix",
      "prettier --write"
    ]
  }
```

#### pre-commit hook

```text
# !/bin/sh

. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

---

### Tilde Ranges(~)

- minor version이 지정되어 있다면 patch 업데이트 허용 / 지정되지 않은 경우 minor 업데이트 허용
  - ex ) “vue” : “1.2.3“

- 1 → major / 2 → minor / 3 → patch
  - 1.2.3
minor version 지정 o → patch 업데이트 허용
1.2.0 ~ 1.2.9

  - ~1.2 → ~1.2.x 와 같음
minor version 지정 o → patch 업데이트 허용
1.2.0 ~ 1.2.9

  - ~1
minor version 지정 x → minor, patch 업데이트 허용
1.0.0 ~ 1.9.9

  - ~3.10.0-alpha.1
minor version 지정 o → patch 업데이트 허용
3.10.0-alpha.1 ~ 3.10.9
3.11.0-alpha.2 포함 x

### Caret Ranges(^)

- [major, minor, patch]에서 가장 왼쪽에 있는 0이 아닌 경우 업데이트 x / 그 다음으로 업데이트 허용

  - ^1.2.3 | ^1.2.x
major가 0이 아님 → minor, path 업데이트 허용
1.2.3 ~ 1.9.9

  - ^0.2.3 | ^0.2.x
major 0 → minor 0이 아님 → patch 업데이트 허용
0.2.3 ~ 0.2.9

  - ^ 0.0 | ^0.0.x
patch 값이 누락되어있는 경우 유연성 허용
0.0.0 ~ 0.0.9

  - ^0.0.3
major 0 → minor 0 → 업데이트 허용 x

---

### Storybook for Vue

- Install
  - 필요한 dependencies 설치
  - 스토리북을 설치하고 구축하는 데 필요한 스크립트 설정
  - 기본 스토리북 구성 추가
  - 참고할 boilerplate 스토리 추가
  - 스토리북이 로컬로 시작되고 주소가 출력 됨
  - 시스템 구성에 따라 브라우저 탭이 자동으로 열림

```zsh
# Add Storybook
npx sb init

# Starts Storybook in development mode
npm run storybook
# or
yarn storybook
```
