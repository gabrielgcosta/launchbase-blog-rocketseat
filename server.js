const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")


server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false, /* permite inserir links nos blocos do nunjucks */
  noCache: true
});

server.get("/", function (req, res){
  const about = {
    logo_url: "https://miro.medium.com/max/700/1*fs0ScMc45X9QEwno8G414A.png",
    title: "Plataforma de educação em tecnologia",
    description: "Rocketseat é uma empresa focada no ensino de programação à distância. Eles são muito conhecidos na comunidade pela qualidade do conteúdo gratuito que geram, principalmente relacionados às tecnologias Javascript (Node.js, React JS, React Native)."
  }

  return res.render("about", {about})
})

server.get("/classes", function (req, res){
  return res.render("classes", {items: videos})
})

server.get("/blog", function (req, res){
  return res.render("blog")
})

server.use(function(err, req, res, next) {
  res.status(404).render("not-found");
});


server.listen(5000, function(){
  console.log('server is running')
})