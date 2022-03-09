const fs = require('fs')
const http = require('http')
const https = require('https')
const privateKey  = fs.readFileSync('./tech.llac.adv.br.fullchain.pem', 'utf8')
const certificate = fs.readFileSync('./tech.llac.adv.br.privkey.pem', 'utf8')

const express = require('express')
const app = express()

const httpServer = http.createServer(app)
const httpsServer = https.createServer({key: privateKey, cert: certificate}, app)

httpServer.listen(8081)
httpsServer.listen(8080)
