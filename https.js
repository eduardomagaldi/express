const fs = require('fs')
const http = require('http')
const https = require('https')
const express = require('express')

const privateKey  = fs.readFileSync('/etc/letsencrypt/live/tech.llac.adv.br/privkey.pem', 'utf8')
const certificate  = fs.readFileSync('/etc/letsencrypt/live/tech.llac.adv.br/cert.pem', 'utf8')

const app = express()

app.get('*', (req, res) => {
  res.send('Hello World!')
})

const httpServer = http.createServer(app)
const httpsServer = https.createServer({key: privateKey, cert: certificate}, app)

httpServer.listen(8081)
httpsServer.listen(8080)
