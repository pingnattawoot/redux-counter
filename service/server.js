'use strict';
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;

var cors = require('cors');
app.use(cors({credentials: true, origin: true}));

var pg = require('pg')
//const connectionString = process.env.DATABASE_URL || 'postgres://http://172.16.0.186/gistest'
var config = {
  user: 'isaret', //env var: PGUSER
  database: 'gistest', //env var: PGDATABASE
  password: 'isaret', //env var: PGPASSWORD
  host: '172.16.0.186', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
var appToken = '1234567890';

passport.use(new Strategy(
  function (token, cb) {
    console.log(token);
    if (token === appToken) {
      return cb(null, true);
    }
    return cb(null, false);

  })
)

var pool = new pg.Pool(config)

var routes = function (app) {
  app.use(bodyparser.json());
  app.get('/search/:title',
    //passport.authenticate('bearer', {session: false}),
    function (req, res) {
        pool.connect(function(err, client, done) {
            if(err) {
                return console.error('error fetching client from pool', err);
            }else{
                let number = 20
                const queryParam = req.query
                if(queryParam){
                    if(queryParam.page)
                        number = queryParam.page
                }
                const results = []
                const query = client.query('SELECT st_x(geom) as x, st_y(geom) as y,\"NAME_THAI\" as name, \"AMPHOE\" as amphoe, \"PROVINCE\" as province FROM \"LM_ALL_THAILAND_20160921\" WHERE \"NAME_THAI\" LIKE $1 limit '+number+' ;',['%'+req.params.title+'%']);
                //console.log(query)
                query.on('row', (row) => {
                    //console.log(row);
                    //results.push(row);
                    let data = {
                        type: "Feature",
                        properties:{
                            name: row.name,
                            amphoe: row.amphoe,
                            province: row.province,
                            description: '<strong>'+row.name+'</strong><p>'+row.amphoe+', '+row.province+'</p>'
                        },
                        geometry:{
                            type: "Point",
                            coordinates: [row.x,row.y]
                        }
                    }
                    results.push(data)
                })
                query.on('end', () => {
                done()
                    res.json(results)
                })
                /*
                const results = []
                const query = client.query('SELECT st_x(geom) as x, st_y(geom) as y,\"NAME_THAI\" as name, \"AMPHOE\" as amphoe, \"PROVINCE\" as province FROM \"LM_ALL_THAILAND_20160921\" WHERE \"NAME_THAI\" LIKE $1 limit '+number+' ;',['%'+req.params.title+'%']);
                //console.log(query)
                query.on('row', (row) => {
                    //console.log(row);
                    results.push(row);
                })
                query.on('end', () => {
                done()
                    res.json(results)
                })
                */
            }
        })
    })
}
var router = express.Router();
routes(router);
app.use('/v1', router);
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('server listening on port ' + (process.env.PORT || port));
});



