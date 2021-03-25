var http = require('http')
var spawn = require('child_process').spawn
var createHandler = require('github-webhook-handler')
var handler = createHandler({
  path: '/pushCode',
  secret: 'vd'
})
http.createServer(function(req, res) {
  // eslint-disable-next-line handle-callback-err
  handler(req, res, function(err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(3000)

handler.on('error', function(err) {
  console.error('Error:', err.message)
})

handler.on('push', function(event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
  if (event.payload.ref.indexOf('main') > -1) {
    rumCommand('sh', ['./deployed.sh'], function(txt) {
      console.log(txt)
    })
  }
})

function rumCommand(cmd, args, callback) {
  var child = spawn(cmd, args)
  var response = ''
  child.stdout.on('data', function(buffer) {
    response += buffer.toString()
  })
  child.stdout.on('end', function() {
    callback(response)
  })
}
