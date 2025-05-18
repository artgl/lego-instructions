В данном репозитории находится приложение lego-instructions с пошаговыми инструкциями для сборки более чем 500 моделей Lego WeDo 2.0

Приложение представляет собой переписанную с использованием Ionic Framework версию сайта https://lencodigitexer.github.io/wedo/index.html (https://github.com/LencoDigitexer/wedo/tree/gh-pages). При работе на Android приложение сохраняет все скачанные инструкции в каталоге Documents/lego-instructions/files, что позволяет далее использовать их в без доступа к интернету.

Сборка Android приложения:

```npm install```

```ionic cap sync```

```ionic cap build android```

Готовый apk: https://github.com/artgl/lego-instructions/releases/download/release-1.0.0/app-release.apk

Скриншоты:
1                                |2                                |3            
---------------------------------|---------------------------------|--------------------------------
![](app_screenshot1.png?raw=true)|![](app_screenshot2.png?raw=true)|![](app_screenshot3.png?raw=true)
