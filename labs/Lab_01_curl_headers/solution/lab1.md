## Лабораторная работа №1

При выполнении работы использовал следующие ключи:
```
`-I` - Получать только HTTP заголовок, а все содержимое страницы игнорировать.  
`-v` - Максимально подробный вывод.  
`-L` - Принимать и обрабатывать перенаправления.
`-k` - Отключает проверку SSL-сертификата.
`-User-agent "Yandex"` -  Указание серверу, какое программное обеспечение или устройство отправляет запрос, в этом случае "Yandex".  
```
- __[🎓 РГУПС](https://www.rgups.ru)__
Скрипт: `curl rgups.ru -I -v -L -k`  

Вывод:

```shell
* Connected to rgups.ru (80.72.224.90) port 80   # IP адрес веб сервера, порт к которому вы обращаетесь
> HEAD / HTTP/1.1 #протокол по которому осуществлялся запрос
> Host: rgups.ru #истинное значение хоста ресурса
> User-Agent: curl/8.2.1 #характеристики, по которым сервера и сетевые узлы могут определить тип приложения, операционную систему, производителя и/или версию пользовательского агента.
> Accept: */* #указывает, какие типы контента, выраженные как MIME типы, клиент может понять (*/* - Любой MIME type)
>
< HTTP/1.1 301 Moved Permanently #код ответа и его значение
< Server: nginx/1.19.1
< Date: Wed, 13 Sep 2023 21:11:32 GMT
< Content-Type: text/html #данные о формате данных которые содержатся в теле ответа
< Content-Length: 169 #размер отправленного получателю тела объекта в байтах.
< Connection: keep-alive #определяет, остаётся ли сетевое соединение активным после завершения текущей транзакции. (keep-alive соединение остаётся и не завершается)
< Location: https://rgups.ru/ #URL-адрес, на который нужно перенаправить страницу
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0HTTP/1.1 301 Moved Permanently
Server: nginx/1.19.1
Date: Wed, 13 Sep 2023 21:11:32 GMT
Content-Type: text/html
Content-Length: 169
Connection: keep-alive
Location: https://rgups.ru/
```
- Ip: `80.72.224.90`
- Port: `80`
- Host: `rgups.ru`
- Cache-Control: `?`
- Content-Type: `text/html`
- Response code: `301 Moved Permanently`
- Protocol: `HTTP/1.1`

🏃🏃🏃🏃🏃

- __[Github](https://github.com/)__
Скрипт:  `curl github.com -I -v -L -k`

Вывод:
```shell
* Connected to github.com (140.82.121.3) port 80
> HEAD / HTTP/1.1
> Host: github.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
< Content-Length: 0
< Location: https://github.com/
<
< HTTP/1.1 200 OK
< Server: GitHub.com
< Date: Wed, 13 Sep 2023 22:01:36 GMT
< Content-Type: text/html; charset=utf-8
< Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With
< content-language: en-US
< ETag: W/"48480d7bede2f478f10fd535b1b026f7"
< Cache-Control: max-age=0, private, must-revalidate
< Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
< X-Frame-Options: deny
< X-Content-Type-Options: nosniff
< X-XSS-Protection: 0
< Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
< Content-Security-Policy: default-src 'none'; base-uri 'self'; child-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/; connect-src 'self' uploads.github.com objects-origin.githubusercontent.com www.githubstatus.com collector.github.com raw.githubusercontent.com api.github.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com cdn.optimizely.com logx.optimizely.com/v1/events *.actions.githubusercontent.com productionresultssa0.blob.core.windows.net/ productionresultssa1.blob.core.windows.net/ productionresultssa2.blob.core.windows.net/ productionresultssa3.blob.core.windows.net/ productionresultssa4.blob.core.windows.net/ productionresultssa5.blob.core.windows.net/ productionresultssa6.blob.core.windows.net/ productionresultssa7.blob.core.windows.net/ productionresultssa8.blob.core.windows.net/ productionresultssa9.blob.core.windows.net/ wss://*.actions.githubusercontent.com github-production-repository-image-32fea6.s3.amazonaws.com github-production-release-asset-2e65be.s3.amazonaws.com insights.github.com wss://alive.github.com github.githubassets.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com objects-origin.githubusercontent.com; frame-ancestors 'none'; frame-src viewscreen.githubusercontent.com notebooks.githubusercontent.com support.github.com; img-src 'self' data: github.githubassets.com media.githubusercontent.com camo.githubusercontent.com identicons.github.com avatars.githubusercontent.com github-cloud.s3.amazonaws.com objects.githubusercontent.com objects-origin.githubusercontent.com secured-user-images.githubusercontent.com/ user-images.githubusercontent.com/ private-user-images.githubusercontent.com opengraph.githubassets.com github-production-user-asset-6210df.s3.amazonaws.com customer-stories-feed.github.com spotlights-feed.github.com *.githubusercontent.com; manifest-src 'self'; media-src github.com user-images.githubusercontent.com/ secured-user-images.githubusercontent.com/ private-user-images.githubusercontent.com github.githubassets.com; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com; upgrade-insecure-requests; worker-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/
< Set-Cookie: _gh_sess=qf0hkDXjeMVFuyyEMVe%2BFYYM1nOqK475UqsnXGs7SCZN9YEa9J1AIGLFH09ifWvkMFXrl%2FlTe%2BkcxpH1uH%2BOYnOVg2BvXDqtWOm5yMfgQsNuBeOaXrZB62emStlKhWHVWJk43IEoAOafzAncojR3yyARONBvmQv3FnPkYPRYefBGisTvBeLWLucKotpa8UeufckABNLOH533wSBwvC6Pimi3DvDrEhLTqPEjzObWjDx1nOTJSI7GTyROIzTc%2FYr1U%2Bta%2BSfJ1xkDT1XJFZDOjA%3D%3D--tcOasrevSZLkBw1s--b7GKWuKIxqWKU03l%2FnmHQg%3D%3D; Path=/; HttpOnly; Secure; SameSite=Lax
< Set-Cookie: _octo=GH1.1.1942753968.1694642500; Path=/; Domain=github.com; Expires=Fri, 13 Sep 2024 22:01:40 GMT; Secure; SameSite=Lax
< Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Fri, 13 Sep 2024 22:01:40 GMT; HttpOnly; Secure; SameSite=Lax
< Accept-Ranges: bytes
< X-GitHub-Request-Id: CED0:127C3:37CE939:386CB6E:65023144
<

```
- Ip: `140.82.121.3`
- Port: `80`
- Host: `github.com`
- Cache-Control: `max-age=0, private, must-revalidate`
- Content-Type: `text/html`
- Response code: `200 OK`
- Protocol: `HTTP/1.1`

🏃🏃🏃🏃🏃

- __[🚝 РЖД](https://www.rzd.ru/)__
Скрипт: `curl rzd.ru -I -v -L -k --User-agent "Yandex"`

Вывод:
```shell
* Connected to rzd.ru (212.164.138.131) port 80
> HEAD / HTTP/1.1
> Host: rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 200
< Content-Type: text/html;charset=utf-8
< Content-Length: 209269
< Connection: keep-alive
< Date: Wed, 13 Sep 2023 22:08:35 GMT
< Vary: Accept-Encoding
< X-UCM-Pod-Name: inex-ucm-776d97f9d-t7xbf
< Strict-Transport-Security: max-age=15724800; includeSubDomains
< Via: nginx2
< X-Frame-Options: sameorigin
< Set-Cookie: session-cookie=178494c048d3c181d7b6a50518991a2430cc37c3efe11d3dc548132471ec3027ecb8520ae98c51a84f39e131b7c9e1f4; Max-Age=86400; Path=/; secure
< X-XSS-Protection: 1; mode=block
<
```
- Ip: `212.164.138.131`
- Port: `80`
- Host: `rzd.ru`
- Cache-Control: `?`
- Content-Type: `text/html`
- Response `code: 200`
- Protocol: `HTTP/1.1`
  
🏃🏃🏃🏃🏃

- __[🕸 Яндекс](https://yandex.ru/)__
Скрипт: `curl yandex.ru -I -v -L -k`

Вывод:
```shell
* Connected to yandex.ru (77.88.55.60) port 80
> HEAD / HTTP/1.1
> Host: yandex.ru
> User-Agent: curl/8.2.1
> Accept: */*
>
HTTP/1.1 200 Ok
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Content-Security-Policy-Report-Only: default-src 'none'; connect-src 'self' an.yandex.ru strm.yandex.ru *.strm.yandex.net mc.yandex.ru yandex.st yastatic.net matchid.adfox.yandex.ru adfox.yandex.ru ads.adfox.ru ads6.adfox.ru jstracer.yandex.ru yastat.net yandex.ru awaps.yandex.net awaps.yandex.ru verify.yandex.ru *.verify.yandex.ru favicon.yandex.net pixel.adsafeprotected.com tps.doubleverify.com ad.adriver.ru amc.yandex.ru *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.admetrica.ru yandexmetrica.com yandexmetrica.com:29009 yandexmetrica.com:30102 forms-ext-api.yandex.ru strm.yandex.net *.strm.yandex.ru *.cdn.ngenix.net zen-rc3.yandex.ru frontend.vh.yandex.ru https://vh.test.yandex.ru/live/ wss://push.yandex.ru api.passport.yandex.ru api.passport-test.yandex.ru suggest-maps.yandex.ru/suggest-geo vk.ru static.dzeninfra.ru avatars.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru cdn.dzeninfra.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru s3.dzeninfra.ru *.s3.dzeninfra.ru *.ms.dzen.ru notify.dzen.ru clck.dzen.ru static-mon.yandex.net cloud-api.yandex.ru yandex.ru dzen.ru *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.serving-sys.com *.serving-sys.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; frame-src awaps.yandex.net yandexadexchange.net *.yandexadexchange.net yastatic.net *.yandex.ru banners.adfox.ru yastat.net yandex.ru storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: mc.yandex.ru mc.yandex.md zenadservices.net sso.passport.yandex.ru id.vk.com *.dzen.ru sso.dzen.ru static.dzeninfra.ru suggest.dzen.ru 'self' yandex.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.doubleclick.net; img-src 'self' data: avatars-fast.yandex.net favicon.yandex.net an.yandex.ru banners.adfox.ru content.adfox.ru ads6.adfox.ru tns-counter.ru *.tns-counter.ru s3.mds.yandex.net ads.adfox.ru amc.yandex.ru mc.admetrica.ru wcm-ru.frontend.weborama.fr wcm.solution.weborama.fr ad.adriver.ru bs.serving-sys.com ad.doubleclick.net counter.yadro.ru gdeby.hit.gemius.pl mc.yandex.ru verify.yandex.ru *.verify.yandex.ru yastatic.net yastat.net avatars.mds.yandex.net yandex.ru px.moatads.com awapil.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.adsafeprotected.com *.serving-sys.com *.serving-sys.ru *.weborama.fr *.weborama-tech.ru *.hit.gemius.pl consentmanager.mgr.consensu.org cdn.consentmanager.mgr.consensu.org *.adlooxtracking.com *.adlooxtracking.ru vk.com vk.ru *.userapi.com *.vk.com *.vk.ru; media-src *.yandex.net strm.yandex.ru *.strm.yandex.ru yandex.ru yandex.st yastatic.net banners.adfox.ru content.adfox.ru data: yastat.net *.mycdn.me *.vkuser.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: *.strm.yandex.net *.cdn.ngenix.net cdn.dzen.ru video.dzen.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru *.s3.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net; script-src 'unsafe-inline' 'unsafe-eval' an.yandex.ru yandex.st yastatic.net mc.yandex.ru banners.adfox.ru ads.adfox.ru ads6.adfox.ru yastat.net yandex.ru z.moatads.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz chat.s3.yandex.net sso.dzen.ru sso.passport.yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.dvtps.com *.doubleclick.net *.serving-sys.ru *.userapi.com vk.com vk.ru *.vk.com *.vk.ru; style-src 'unsafe-inline' 'unsafe-eval' yandex.st yastatic.net banners.adfox.ru content.adfox.ru yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; font-src 'self' data: an.yandex.ru yastatic.net yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru static.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net fonts.gstatic.com; child-src blob: mc.yandex.ru; manifest-src *.dzen.ru/manifest.webmanifest 'self'; report-uri https://csp.yandex.net/csp?from=zen_old&project=zen&yandex_login=&yandexuid=5087043291694643180&requestid=4158325710.141.1694643180442.47721&page=site_desktop;
< Content-Type: text/html; charset=utf-8
< Set-Cookie: _yasc=nDOxyBFstGQk6aUUeJt1rdsFj95eK1ysAQFElJtvQCLBAvLEJ2IieXipQfVucs/0JQ==; domain=.dzen.ru; path=/; expires=Sat, 10 Sep 2033 22:13:00 GMT; secure
< X-Content-Type-Options: nosniff
< X-Frame-Options: deny
< X-Requestid: 4158325710.141.1694643180442.47721
< X-XSS-Protection: 1; mode=block
< X-Yandex-Req-Id: 1694643180420411-575681192169266709100109-production-app-host-vlx-zen-70

```
- Ip: `77.88.55.60`
- Port: `80`
- Host: `yandex.ru`
- Cache-Control: `max-age=1209600,private`
- Content-Type: `text/html`
- Response code: `200`
- Protocol: `HTTP/1.1`
  
- __[🐍 Python](https://www.python.org/)__
Скрипт: `curl python.org -I -v -L -k`

Вывод:
```shell
* Connected to python.org (151.101.192.223) port 80
> HEAD / HTTP/1.1
> Host: python.org
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Connection: keep-alive
< Content-Length: 50526
< Server: nginx
< Content-Type: text/html; charset=utf-8
< X-Frame-Options: SAMEORIGIN
< Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
< Accept-Ranges: bytes
< Date: Wed, 13 Sep 2023 22:18:11 GMT
< Age: 2770
< X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230082-FRA
< X-Cache: HIT, HIT
< X-Cache-Hits: 430, 8
< X-Timer: S1694643491.017478,VS0,VE0
< Vary: Cookie
< Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
<
```
- Ip: `151.101.192.223`
- Port: `80`
- Host: `python.org`
- Cache-Control: `?`
- Content-Type: `text/html`
- Response code: `200 OK`
- Protocol: `HTTP/1.1`

🏃🏃🏃🏃🏃

- __[Saint 🌠 GIT](https://git-scm.com/)__
Скрипт: `curl git-scm.com -I -v -L -k`

Вывод:
```shell
* Connected to git-scm.com (188.114.99.224) port 80
> HEAD / HTTP/1.1
> Host: git-scm.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Wed, 13 Sep 2023 22:22:17 GMT
< Content-Type: text/html; charset=utf-8
< Connection: keep-alive
< X-Frame-Options: SAMEORIGIN
< X-Xss-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Download-Options: noopen
< X-Permitted-Cross-Domain-Policies: none
< Referrer-Policy: strict-origin-when-cross-origin
< Cache-Control: public, max-age=14400
< Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
< X-Request-Id: 476d2e08-474c-4f3d-8503-d83ed21ae45f
< X-Runtime: 0.015343
< Via: 1.1 vegur
< CF-Cache-Status: HIT
< Age: 3869
< Server: cloudflare
< CF-RAY: 8063c9c12ebb76a9-DME
<

```
- Ip: `188.114.99.224`
- Port: `80`
- Host: `git-scm.com`
- Cache-Control: `public, max-age=14400`
- Content-Type: `text/html; charset=utf-8`
- Response code: `200 OK`
- Protocol: `HTTP/1.1`

🏃🏃🏃🏃🏃

- __[🐵 Jetbrains](https://www.jetbrains.com/)__
Скрипт: `curl jetbrains.com -I -v -L -k`

Вывод:
```shell
* Connected to jetbrains.com (13.33.243.77) port 80
> HEAD / HTTP/1.1
> Host: jetbrains.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
< Content-Length: 47213
< Connection: keep-alive
< Date: Wed, 13 Sep 2023 22:25:00 GMT
< Server: nginx
< X-Content-Type-Options: nosniff
< Referrer-Policy: same-origin
< Expires: Wed, 13 Sep 2023 22:25:00 GMT
< Cache-Control: max-age=0
< Pragma: no-cache
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< X-Xss-Protection: 1; mode=block
< Strict-Transport-Security: max-age=31536000;
< Vary: Accept-Encoding
< Via: 1.1 35353b0e70b0a16ec7c928976fd19f6c.cloudfront.net (CloudFront)
< Alt-Svc: h3=":443"; ma=86400
< Age: 58
< Set-Cookie: cf_country-region=RU-ROS; Domain=jetbrains.com; Path=/; Secure
< X-Cache: Hit from cloudfront
< X-Amz-Cf-Pop: HEL50-C1
< X-Amz-Cf-Id: BArOGR6ctHnfHUFryPyl-5CUOIGpnBFqYgrInf7BL_jRvbuBfMsqIA==
```
- Ip: `13.33.243.77`
- Port: `80`
- Host: `jetbrains.com`
- Cache-Control: `max-age=0`
- Content-Type: `text/html; charset=utf-8`
- Response code: `200 OK`
- Protocol: `HTTP/1.1`

🏃🏃🏃🏃🏃

- __[💪 VSC - this is best choose](https://code.visualstudio.com/)__
Скрипт: `curl code.visualstudio.com -I -v -L -k`

Вывод:
```shell
* Connected to code.visualstudio.com (13.107.246.53) port 80
> HEAD / HTTP/1.1
> Host: code.visualstudio.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Length: 50213
< Content-Type: text/html; charset=utf-8
< Accept-Ranges: bytes
< ETag: W/"c425-XBxswsHoV0dlJCAKuBbwZ9s5rjQ"
< Strict-Transport-Security: max-age=31536000; includeSubDomains
< Content-Security-Policy: frame-ancestors 'self'
< X-Frame-Options: SAMEORIGIN
< X-XSS-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Content-Type-Options: nosniff
< X-Powered-By: ASP.NET
< x-azure-ref: 02TcCZQAAAAAGZdjDMe86SrbJCVELblcpU1RPRURHRTE4MTcAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
< X-Cache: CONFIG_NOCACHE
< Date: Wed, 13 Sep 2023 22:29:45 GMT
<
```
- Ip: `13.107.246.53`
- Port: `port 80`
- Host: `code.visualstudio.com`
- Cache-Control: `CONFIG_NOCACHE`
- Content-Type: `text/html; charset=utf-8`
- Response code: `200 OK`
- Protocol: `HTTP/1.1`

👌👌👌👌👌