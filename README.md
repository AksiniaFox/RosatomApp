
# Тестовое задание от РОСАТОМ по JavaScript
#### Необходимо реализовать сайт-галерею, в которую администраторы сайта могут загружать фотографии, а посетители - просматривать их.
> <a target="_blank" href="https://rosatom.adm.aksiniafox.ru/">Ссылка на демо-проект Админка Directus</a> 
####
> <a target="_blank" href="https://rosatom.aksiniafox.ru/">Ссылка на демо-проект Клиентская часть</a>

## Как запустить проект
Клонировать репозиторий из GitHub:
```bash
gh repo clone AksiniaFox/RosatomApp
```

Запустить Docker compose:
```bash
docker compose up
```

### Админка Directus
* URL: localhost:8055 
* Логин: admin@example.com
* Пароль: d1r3ctu5

### Клиентская часть
* URL: localhost:5173

![This is an image](/gitSource/HomePage.png)
![This is an image](/gitSource/OpenImage.png)
![This is an image](/gitSource/Directus.png)


#### Должен быть предусмотрен следующий функционал:
- ✅ Загрузка фото на backend через админку Directus
- ✅ На frontend-е реализовать отображение списка загруженных фото

#### Дополнительные требования:
- ✅ Сделать так, чтобы при загрузке изображений любых размеров и соотношений сторон верстка не ломалась
- ✅ Мобильная (адаптивная) верстка
- ❌ Сделать админку Directus доступной по адресу /directus (Не реализовано)
- ✅ Предусмотреть пагинацию в списке фотографий
- ❌ Предусмотреть механизм альбомов (Не реализовано)
- ✅ Реализовать переключение фото
- ❌ Реализуйте роутинг (Не реализовано)
- ✅ Добавьте поддержку превьюшек
- ✅ Настроить docker-compose  
- ✅ Задеплоить проект на собственный VPS сервер 
> <a target="_blank" href="rosatom.adm.aksiniafox.ru">Ссылка на демо-проект Админка Directus</a>
> <a target="_blank" href="rosatom.aksiniafox.ru">Ссылка на демо-проект Клиентская часть</a>

#### Проект реализован с использованием
JavaScript Vite React MobX Axios HTML CSS Docker Directus Git