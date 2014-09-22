Frontend prototype

1. Роутер

Разбирает path, создает инстанс контроллера и вызывает action, из соответсвущей секции (GET/POST/PUT/DELETE),
с необходимыми параметрами.

Примеры:

1) GET http://direct.yandex.ru/campaign/show/1

Будет создан инстанс контроллера campaign и вызван метод show(id) из секции GET

2) POST http://direct.yandex.ru/campaign/

Будет создан инстанс контроллера campaign и вызван метод index() из секции POST

2) PUT http://direct.yandex.ru/note/save/32/test

Будет создан инстанс контроллера note и вызван метод save(id, text) из секции PUT






