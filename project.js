
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

app.use(express.urlencoded({ extended: false }));

app.get('/login', (req, res) => {
  res.send("<form action='/login' method='POST'><input type='text' name='username' id='username'><button type='submit'>Login</button></form>");
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  res.send(`
    <script>
      localStorage.setItem('username', '${username}');
      window.location.href = '/';
    </script>
  `);
});

app.get('/', (req, res) => {
  fs.readFile('details.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      data = 'No chat yet'
    }
    console.log(data);
    res.send(`
    ${data}
    <form action='/chatpage' method='POST' onSubmit="getElementById('username').value = localStorage.getItem('username')">
      <input type='text' name='message' id='message' placeholder='Enter your message'>
      <input type='hidden' id='username' name='username'>
      <button type='submit'>Send</button>
    </form>`);
  })

});

app.post('/chatpage', (req, res) => {
  const data = `${req.body.username}: ${req.body.message}`;
  fs.writeFile('details.txt', data, {flag : 'a'}, (err) => {
    if (err) {
      throw err;
    }
  });
  res.redirect('/');
});

const server = http.createServer(app);
server.listen(4000);
