Automatic proxy finder and test speed 

first install lib 
```
npm install proxy-finder
npm install fs
npm install node-cmd
npm install array-unique
npm install is-json
```
you must installed curl 
```
curl.haxx.se
```
down!
now just run 
```
node index.js
```
test single ip proxy 
```
 pc("52.174.89.111:80","json");
```
output
```json
{  
   "as":"AS8075 Microsoft Corporation",
   "city":"Amsterdam",
   "country":"Netherlands",
   "countryCode":"NL",
   "isp":"Microsoft Corporation",
   "lat":52.35,
   "lon":4.9167,
   "org":"Microsoft Azure",
   "query":"52.174.89.111",
   "region":"NH",
   "regionName":"North Holl 
and",
   "status":"success",
   "timezone":"Europe/Amsterdam",
   "zip":"1091"
}
```
after rune code 2 file maked ip.txt and validip.txt all ip write to ip and worked proxy write to validip.txt

example ipvalid.txt
```
83.167.232.91:80
217.73.190.188:53281
79.116.200.31:53281
193.165.79.30:8080
91.83.100.108:53281
101.255.115.124:8080
66.55.159.179:80
34.229.144.216:3128
185.74.192.175:53281
119.252.172.133:3128
182.48.67.254:65309
54.250.167.49:3128
198.57.56.46:53281
37.113.170.45:53281
155.133.112.212:53281
139.59.237.214:8080
45.76.152.64:3128
163.172.136.39:3128
94.181.95.5:53281
180.252.107.44:8080
114.134.186.25:65103
186.247.165.189:8080
188.0.226.248:53281
195.182.193.198:65103
93.91.112.185:80
93.75.133.126:53281
165.227.124.88:3128
194.187.216.228:53281
58.251.156.121:8080
180.253.239.102:8080
101.37.79.125:3128
109.107.112.249:53281
163.172.86.64:3128
200.155.36.185:3128
138.204.147.6:53281
196.223.140.170:63909
35.176.25.21:8080
```
