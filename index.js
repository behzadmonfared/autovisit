var proxyFinder = require('proxy-finder');
var cmd=require('node-cmd');
var fs=require('fs');
var validator = require('is-json');
var unique = require('array-unique');


function findproxy(){
      var query = '+":8080" +":3128" +":80" filetype:txt';
      proxyFinder.findProxiesFromSearch(query, 'en', 30, function(host, port) {
          console.log(host + ":" + port);
          var s = host+":"+port+"\n";
          runc(s,'http://ip-api.com/json');
          fs.appendFile('ip.txt', s, function (err) {
          if (err) throw err;
          console.log('Saved!');
          });
      });
}

findproxy();
function listcheck(){
 var contents = fs.readFileSync('ip.txt', 'utf8');
 a = contents.split("\n");
 ar =unique(a);
 ar.forEach(function(dataz){



});
}
function runc(dataz,webtest){
  cmd.get(
       'curl '+webtest+' --proxy'+ " "+dataz,
       function (err, data, stderr){
       var result =validator(data);
      return  check(result,dataz);
           }
         );

}



function check(result,dataz){
         if(result==true){
           console.log(dataz);
           fs.appendFile('ipvalid2.txt', dataz+"\n", function (err) {
           if (err) throw err;
          
           });
         };
}
