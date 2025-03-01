### Hexlet tests and linter status:
[![Actions Status](https://github.com/ProvotorOFF/php-phpunit-testing-project-75/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ProvotorOFF/php-phpunit-testing-project-75/actions)

# Page Diff

Это CLI-приложение для скачивания страниц по указанному URL и сохранения их на локальной файловой системе.

## Установка

В папке проекта необходимо выполнить
```bash
composer install
```

### Использование

После установки можно воспользоваться командой
```bash
php page-diff <URL> <output-path>
```

### Логирование
В проекте настроено логирование ошибок, после загрузки страницы будет создана папка logs в текущем проекте.

Пример лога
```log
[2025-03-01T20:22:55.014623+03:00] downloadLog.ERROR: Unable to open "D:\OSPanel6\home\unit-project/output/facts-sovmaths-ru_files/mc-yandex-ru-watch-99400651." using mode "w+": fopen(D:\OSPanel6\home\unit-project/output/facts-sovmaths-ru_files/mc-yandex-ru-watch-99400651.): Failed to open stream: Permission denied [] []

```