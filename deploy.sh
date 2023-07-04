#!/usr/bin/env sh

# Остановить публикацию при ошибках
set -e
# Сборка приложения 
npm run build
# Переход в каталог сборки
cd dist

# Инициализация репозитория и загрузка кода в GitHub
git init
git add -A
git commit -m 'deploy'

# После двоеточия надо ввести адрес репозитория
git push -f git@github.com: ......