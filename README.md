# robotx

curl -F "url=https://lit-sea-07478.herokuapp.com/5476986181:AAHp8RnUld1hvPo4z5ucWTDsQy59CZkDM08" -F "certificate=@public.pem" https://api.telegram.org/botYOUR_TOKEN/setWebhook
curl -F "url=https://lit-sea-07478.herokuapp.com/api/webhook" https://api.telegram.org/bot5476986181:AAHp8RnUld1hvPo4z5ucWTDsQy59CZkDM08/setWebhook

comandos:
heroku logs --tail
git push heroku main

heroku addons
heroku pg:psql
heroku run echo \$JDBC_DATABASE_URL

heroku local
heroku local web

configuracion remota
heroku config

Agregando configuracion remota
heroku config:set ENERGY="20 GeV"

la configuracion local va en el archivo .env

heroku run java -version

mensajes del bot, de aqui se extraen los chat_id
https://api.telegram.org/bot5476986181:AAHp8RnUld1hvPo4z5ucWTDsQy59CZkDM08/getUpdates

heroku labs:enable log-runtime-metrics
heroku plugins:install heroku-cli-java
    heroku java:jconsole
    heroku java:visualvm
    heroku java:jmap
    heroku java:jstack
