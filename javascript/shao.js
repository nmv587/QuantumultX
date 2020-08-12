/*=================================
关注微信公众号iosrule和微信群
#Qx烧App签到
http:\/\/node_api\.baoear\.com\/user\/signstats url script-request-body https://raw.githubusercontent.com/nmv587/QuantumultX/master/javascript/shao.js
#定时
0 2,13,25,45,55 0-23 * * ? sao_sign.js, tag=定时烧App签到, enabled=false
mit=node_api.baoear.com
//====================================
#loon烧App签到
http-request http:\/\/node_api\.baoear\.com\/user\/signstats script-path=sao_sign.js, requires-body=true, timeout=30, tag=烧App
mit=node_api.baoear.com
*/




//====================================
const $iosrule = iosrule();

const log=1;//设置0关闭日志,1开启日志

//++++++++++++++++++++++++++++++++-


const sao="烧APP";
const saoidname="saoidname";
var saoid=$iosrule.read(saoidname);

//++++++++++++++++++++++++++++++++

//3.需要执行的函数都写这里
function main()
{sao_begin();}



function sao_begin()
{
if(saoid!=(undefined ||null))
{

 var obj=JSON.parse(saoid);
var trueid=obj["uid"];
  sao_sign(trueid);
}
else
{
  if(log==1)console.log(sao+"获取签到数据失败❎,请获取数据先")
papa(sao,"失败❎","请获取签到数据先");

}
}








//++++++++++++++++++++++++++++++++++++
//4.基础模板

if ($iosrule.isRequest) {
  sao_getck()
  $iosrule.end()
} else {
  main();
  $iosrule.end()
}

function sao_sign(mid)
  {
   var result1="[日签到✍🏻️]";
   var result2="";
 var bd={}
   bd.uid=mid;
   bd.sign_type="single";
    bd=JSON.stringify(bd);


  const llUrl1={
      url:"http://node_api.baoear.com/user/sign",
      headers: {
"Content-Type":"application/json"
     },body:bd};
     
     $iosrule.post(llUrl1,function(error, response, data) {
    var obj=JSON.parse(data)

if(obj.code==0)
result2="签到成功✅"+obj.data.title+"获得积分💰"+obj.data.scores;

else if (obj.code==400)
result2="重复签到✅"


if(log==1)console.log(sao+"\n"+result2);
papa(sao,result1,result2);



})
}
  
 


function sao_getck() {

  if ($request.headers) {

 var urlval = $request.url;
var md_bd=$request.body;

if(urlval.indexOf("user/signstats")>=0)
{

 var sk= $iosrule.write(md_bd,saoidname);
if (sk==true) 
 papa(sao,"[获取烧App签到数据]","✌🏻成功");}



  
}}









function papa(x,y,z){

$iosrule.notify(x,y,z);}




function iosrule() {
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
    }
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.get(options, callback)
    }
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.post(options, callback)
    }
    const end = () => {
        if (isQuanX) isRequest ? $done({}) : ""
        if (isSurge) isRequest ? $done({}) : $done()
    }
    return { isRequest, isQuanX, isSurge, notify, write, read, get, post, end }
};
