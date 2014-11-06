#Frontend prototype

Основная идея прототипа – единые модели данных на сервере, в шаблонах и клиентских скриптах.

Последовательность обработки запроса:
  * Создание инстанса контроллера, в соответствии с path запроса
  * Вызова action контролллера
  * Получение данных из services (источников данных), с использованием service-container
  * Маппинг данных из источников на модели
  * Шаблонизация, каждый блок получает в контексте соответствующую модель
  * Автоматическая инициализация моделей на клиенте и биндинг необходимых полей на соответсвтующие элементы интерфейса
  * Поддержка fullREST для синхронизации моделей с сервером

## Роутер

Разбирает path, создает инстанс контроллера и вызывает action, из соответсвущей секции (GET/POST/PUT/DELETE),
с необходимыми параметрами.

Примеры:

  * GET http://direct.yandex.ru/campaign/show/1
  
_Будет создан инстанс контроллера campaign и вызван метод show(id) из секции GET_

  * POST http://direct.yandex.ru/campaign/

_Будет создан инстанс контроллера campaign и вызван метод index() из секции POST_

  * PUT http://direct.yandex.ru/note/save/32/test

_Будет создан инстанс контроллера note и вызван метод save(id, text) из секции PUT_

## Маппинг

Маппинг позволяет описать соответствие данных, получаемых из некоторого источника (набора источников) и полей модели.
У каждой модели есть файл *.map.js, который определяет маппинг (хэш, набор полей которого, опредляет правила маппинга).
Поле хэша (правило маппинга) соответствуют полю модели.

Правило маппинга, может быть:

  * Строкой

В случае однозначного соответствия поля модели полю данных источника

```javascript
{
    bannerId: 'bid'
    ...
}
```

  * Функцией

Если требуется агрегировать или каким-то образом форматировать данные источника

```javascript
{
    title: function(ctx) {

        return ctx.name + ' (' + ctx.bid + ')';
    }
    ...
}
```

  * Объектом

Полный формат. Необходим для задания полей, являющихся экземляром модели или коллекцией моделей.
Поле type определяет тип поля (simple - примитив (аналогично пунктам 1 и 2), model – модель, collection – коллекция).
Поле model определяет название модели для типов model и collection.
Поле ctx опредлеяет правила преобразования (аналогично пунктам 1 и 2)

```javascript
{
    phrases: {
        type: 'collection',
        model: 'phrase',
        ctx: 'phrases'
    }
    ...
}
```
Для преобразования данных из источников в модель необходимо вызвать метод map модуля mapping, который принимает на вход
наименование модели и исходные данные (object|promise) вторым параметром, и возвращает инстанс модели

Пример:
```javascript
bannerModel = map('model', data);
```

## Service Container

Модуль, позволяющий ассихронно получать данные из различных истоников и разрешать внешние зависимости между источниками.
Реализован новый метод, ServiceContainer.prototype.getService(service), который возвращает промис на инстан сервиса service 

## Модели и Коллекции

Документация – http://backbonejs.ru/

## Порядок инициализации, биндинг

  * Модели инициализируется автоматически сразу после заргузки страницы и кэшируются в одноуровневом i-model-manager
  * Групповые операции реализованы через live события и не ведут к инициализации блока
  * Блок инициализируется по событиям на внутренних блоках (клик по кнопке, фокус в инпут и т.д.)
  * В момент инициализации блока, маркированные в шаблонизаторе дом ноды биндятся на поля модели












