# Hello, WebPack

</br>

## 1. 프로젝트 설정 파일 생성

```text
> npm init -y
```

- 💾 packages.json

    ```json
    {
      ...
      "scripts": {
        "start": "webpack serve --mode=development --config webpack.config.dev.js",
        "build": "webpack --mode=production --config webpack.config.prod.js",
        ...
      },
      ...
    }
    ```

</br>

## 2. 타입스크립트 설정 파일 생성

```text
> tsc --init
```

- 💾 tsconfig.json

    ```json
    {
      "compilerOptions": {
        /* Visit https://aka.ms/tsconfig to read more about this file */
    
        /* Projects */
        ...
    
        /* Language and Environment */
        "target": "ESnext",
        ...
    
        /* Modules */
        "module": "ESNext",
        ...
    
        /* JavaScript Support */
        "allowJs": true,
        ...
    
        /* Emit */
        ...
        "sourceMap": true,
        "outDir": "./dist/",
        ...
    
        /* Type Checking */
        ...
    
        /* Completeness */
        ...
      },
      "exclude": ["node_modules"]
    }
    ```

- 💾 index.d.ts

    ```tsx
    // *.jpg, *.png를 모듈로 정의(import 가능!)
    declare module "*.jpg";
    declare module "*.png";
    ```

</br>

## 3. 웹팩 및 관련 패키지 설치

```text
WebPack:   npm i -D webpack webpack-cli webpack-dev-server
Plug-ins:  npm i -D html-webpack-plugin clean-webpack-plugin
Loaders:   npm i -D ts-loader style-loader css-loader sass sass-loader file-loader
Etc:       npm i -g serve
```

- 💾 webpack.config.dev.js <개발용>

    ```jsx
    ...
    module.exports = {
      devtool: "inline-source-map",
      ..
      output: {
        ...
        // Removes the webpack:/// prefix
        // => TypeScript debugging
        devtoolModuleFilenameTemplate: "[resource-path]",
      },
      ...
      devServer: {
        static: {
          directory: path.resolve(__dirname, "dist"),
        },
        port: 7000,
      },
    };
    ```

- 💾 webpack.config.prod.js <배포용>

    ```jsx
    const path = require("path");
    const HtmlWebPackPlugin = require("html-webpack-plugin");
    
    module.exports = {
      entry: "./src/main.ts",
      output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: ["ts-loader"],
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            exclude: /node_modules/,
          },
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },          
          {
            test: /\.(png|jpg)$/,
            use: ["file-loader"],
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js"],
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./index.html",
        }),
      ],
    };
    ```

</br>

## 4. 디버깅 설정

```text
Run and Debug (Ctrl+Shift+D) ->
create a launch.json file ->
Web App (Chrom)
```

- 💾 .vscode/launch.json

    ```json
    {
      // Use IntelliSense to learn about possible attributes.
      // Hover to view descriptions of existing attributes.
      // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
      "version": "0.2.0",
      "configurations": [
        {
          "type": "chrome",
          "request": "launch",
          "name": "Launch Chrome against localhost",
          "url": "http://localhost:7000",
          "webRoot": "${workspaceFolder}"
        }
      ]
    }
    ```

</br>

## 5. 프로젝트 실행(디버깅) 및 빌드(배포)

```bash
# 실행 후 F5 키를 눌러 디버깅
> npm start

# 빌드
> npm run build
> serve dist -l 7000
```

</br>

## 6. 소스 파일 적용

- 💾 main.ts

    ```tsx
    // [SGLEE:20230405WED_054400] Created
    
    import tube1014 from "./images/1014.png";
    import tube1015 from "./images/1015.png";
    import "./style.scss";
    import { _$, _$$ } from "./utils";
    
    const main = (): void => {
      console.clear();
    
      const root = _$("#root") as HTMLDivElement;
      const text = _$$("div", root, "click to change!") as HTMLDivElement;
      const img = _$$("img", root, undefined, (e: MouseEvent) => {
        img.src = img.src === tube1014 ? tube1015 : tube1014;
      }) as HTMLImageElement;
      img.src = tube1014;
      const btn = _$$("button", root, "버튼", (e: MouseEvent) => {
        const t = e.target as HTMLButtonElement;
        t.disabled = true;
        setTimeout(() => (t.disabled = false), 1000);
      });
    };
    
    window.onload = () => main();
    ```

</br>

## 7. 기타

- 💾 _0_start_front-end_vscode.cmd

    ```text
    rem [SGLEE:20230328TUE_225800] Created
    
    call code .
    
    pause
    ```

- 💾 _1_start_front-end_p7000.cmd

    ```text
    rem [SGLEE:20230405WED_110700] Created
    rem npm i serve
    
    call npm run build
    call explorer "http://bluecnt.iptime.org:7000"
    call serve dist -l 7000
    
    pause
    ```

- 💾 _2_install_packages.cmd

    ```text
    rem [SGLEE:20230405WED_111100] Created
    
    call npm i -D webpack webpack-cli webpack-dev-server
    call npm i -D html-webpack-plugin clean-webpack-plugin
    call npm i -D ts-loader style-loader css-loader file-loader
    call npm i -g serve
    
    pause
    ```

- 💾 _3_git-config-safe-dir.cmd

    ```text
    rem [SGLEE:20230328TUE_230300] Created
    
    rem 드라이브 문자를 반드시 대문자로 해야한다.
    rem 디렉터리 구분자는 /로 해야한다.
    rem git config --global --add safe.directory D:/dev-proj/hello-react-ts
    rem 파일 위치: C:\Users\bluecnt\.gitconfig
    
    setlocal
    
    set dir=%cd%
    set new_dir=%dir:\=/%
    
    git config --global --add safe.directory %new_dir%
    
    endlocal
    
    pause
    ```
