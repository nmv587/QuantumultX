/*=================================
关注微信公众号iosrule和微信群
邀请码 5KNCVN
下载地址https://apps.apple.com/cn/app/%E8%B6%A3%E8%B5%B0%E5%B0%8A%E4%BA%AB%E7%89%88-%E8%B5%B0%E8%B7%AF%E8%B5%9A%E9%92%B1app/id1465888732


作者红鲤鱼绿鲤鱼与驴  2020.8.6
2020.8.7 修复很多bug,新闻加计步软件不错

//=================================
#圈叉趣走App签到
https:\/\/(mobile01\.91quzou\.com\/rebate\/qz\/task\/homeTaskView\.do)|(mini1\.91quzou\.com\/activity\/inviteVideo\.do) url script-request-header quwalk.js


mit=mobile01.91quzou.com,mini1.91quzou.com

//====================================

#loon 趣走App签到
http-request https:\/\/(mobile01\.91quzou\.com\/rebate\/qz\/task\/homeTaskView\.do)|(mini1\.91quzou\.com\/activity\/inviteVideo\.do) script-path=quwalk.js, requires-body=true, timeout=30, tag=趣走签到

mit=mobile01.91quzou.com,mini1.91quzou.com

#定时参考3分钟,打开任首页视频奖励和微信购物小程序获取Cookies

*/




//====================================
const $iosrule = iosrule();

const log=0;//设置0关闭日志,1开启日志

//++++++++++++++++++++++++++++++++-


const quwalk="趣走APP";
const quwalkhdname="quwalkhdname";
var quwalk_hd=$iosrule.read(quwalkhdname);
const quwalkwxhdname="quwalkwxhdname";
var quwalk_wxhd=$iosrule.read(quwalkwxhdname);

var quwalk_code="rebate/qz/task/homeTaskView.do";
var quwalk_wx="activity/inviteVideo.do";
var shuai="**********🔔**************";
//++++++++++++++++++++++++++++++++

//3.需要执行的函数都写这里
function main()
{    quwalk_begin();
}

function quwalk_begin()
{
   
for (var i = 0; i < 12; i++) {
      (function(i) {
        setTimeout(function() {
   
if(i==0) quwalk_user(i);
else if (i==1)quwalk_sign(i);
else if (i==2)quwalk_todayWalk(i);
else if (i==3)quwalk_myTaskView(i);
else if (i==4)
quwalk_getExpectExchangeCurrency(i)
else if (i==5)quwalk_dailytask(i);

else if (i==6)quwalk_daka(i);
else if (i==7)
quwalk_huntFindStolenPerson(i);
         }, (i + 1) * 800);
              })(i)
}
}











//++++++++++++++++++++++++++++++++++++
//4.基础模板

if ($iosrule.isRequest) {
  quwalk_getck()
  $iosrule.end()
} else {
  main();
  $iosrule.end()
}


function quwalk_sign(qq)
  {

   var result1=qq+"-[签到🎋]";
   var result2="";
const llUrl1={
      url:"https://mobile01.91quzou.com/rebate/activity/sign/v4/signRecord.do",
      headers:JSON.parse(quwalk_hd),timeout:600000}

     $iosrule.post(llUrl1,function(error, response, data) {
   if(log==1)console.log(result1+data)
    var obj=JSON.parse(data)
if(obj.code=="0")
{result2="签到✅"+"步数"+obj.data.walk+"红包"+obj.data.redbagMoney;
printlog(result1+result2);
}
else if(obj.code=="1")
{result2="今天已经签到✅";quwalk_checkin(result1+result2);}
else  if(obj.code=="2008")
{result2="请获取数据❎";
printlog(result1+result2)
}

})}

function quwalk_checkin(res)
{var result2="";var result1="[查询签到©♓️🍥]"
  const llUrl2={
        url:"https://mobile01.91quzou.com/rebate/activity/sign/enterSignRecord.do",
        headers:JSON.parse(quwalk_hd)}

  $iosrule.post(llUrl2,function(error, response, data) {
  var obj=JSON.parse(data);
  if(obj.code==0)result2=res+",获得💰"+obj.data.iawardmoney+",连续签到"+obj.data.isignincount+"天.";
  else result2=res+",查询签到信息❎"
  printlog(result2)
  
})}


function quwalk_user(qq)
{var result2="";var result1=qq+"-[获取用户信息ૢ👮🏻]";
printlog("趣走程序运营中....by 🔴红鲤鱼绿鲤鱼与驴 2020.8.7");
  const llUrl2={
        url:"https://mobile01.91quzou.com/rebate/wallet/myWallet/myBaseInfoQuzou.do",
        headers:JSON.parse(quwalk_hd),timeout:600000}

  $iosrule.post(llUrl2,function(error, response, data) {
  var obj=JSON.parse(data);
  if(obj.code=="0")
  result2="昵称🔆"+obj.data.nickName+"\n我的趣币💰"+obj.data.myCoin+"累计提现💰"+obj.data.allWithdraw+"📢"+obj.data.signPrompt+"🔔"+obj.data.currentRate;
  else result2="获取用户信息❎"
  printlog(result1+"\n"+result2);
 
})}
 
function quwalk_todayWalk(qq)
{var result2="";var result1=qq+"-[今日步数统计🌱🌱]"
  const llUrl2={
        url:"https://mobile01.91quzou.com/v4/walk/todayWalk.do",
        headers:JSON.parse(quwalk_hd),timeout:600000}

  $iosrule.get(llUrl2,function(error, response, data) {
  var obj=JSON.parse(data);
  if(obj.code=="0")
  result2="[今日步数]"+obj.data.totalNum+"=[运动步数]"+obj.data.walkNum+"+[其他步数]"+obj.data.awardNum;
  else result2="获取今日步数信息❎"
  console.log(result1+"\n"+result2)
 console.log("**********🔔**************")
})}

function quwalk_myTaskView(qq)
{var result1=qq+"-[每日🐲任务]\n";
var result2="";
  const llUrl2={
        url:"https://mobile01.91quzou.com/rebate/qz/task/myTaskView.do",
        headers:JSON.parse(quwalk_hd)}

  $iosrule.post(llUrl2,function(error, response, data) {
  var obj=JSON.parse(data);
  if(obj.code==0)
  {

    
  for(var i=0 in obj.data.dailyTasks.list)
  {    var x=obj.data.dailyTasks.list[i].totalCount;var y=obj.data.dailyTasks.list[i].completedCount;

  if(x==y) var dig="✅";else var dig="❎";
  result2+=obj.data.dailyTasks.list[i].name+"("+x+"/"+y+")"+dig+"\n";}}
  else result2="获取日常任务信息❎"
printlog(result1+result2)
  
})}


function quwalk_sub_exchangeCurrency(r,x,y,z)
{var result2="";var result1=r;
var exbd={"exchangeReqs":[{"recordId":"54510590","exchangeCurrency":"8.76","category":11}]}
exbd.exchangeReqs[0].recordId=x;
exbd.exchangeReqs[0].exchangeCurrency=y;
exbd.exchangeReqs[0].category=z;
exbd=JSON.stringify(exbd);
var newhd=JSON.parse(quwalk_hd);
newhd["Content-Type"]="application/json";
  const llUrl2={
        url:"https://mobile01.91quzou.com/currency/exchangeCurrency.do",
        headers:newhd,body:exbd}
  $iosrule.post(llUrl2,function(error, response, data) {
    if(log==1)console.log(result1+data)
  var obj=JSON.parse(data);
  if(obj.code=="0")
    result2="结果"+obj.data[0].failMsg;
  else result2="获取换步信息❎"
printlog(result1+result2)
})}

function quwalk_getExpectExchangeCurrency(qq)
{var result2="";var result1=qq+"-[首页步数兑换Ⓜ️]"
  const llUrl2={
        url:"https://mobile01.91quzou.com/currency/getExpectExchangeCurrency.do",
        headers:JSON.parse(quwalk_hd)}
  $iosrule.post(llUrl2,function(error, response, data) {
    if(log==1)console.log(result1+data)
  var obj=JSON.parse(data);
if(obj.code=="0"&&obj.data.days.length>0)
  {
var recordId=obj.data.days[0].recordId;
    var exchangeCurrency=obj.data.days[0].expectExchangecurrency;
    var category=obj.data.days[0].category;
quwalk_sub_exchangeCurrency(result1,recordId,exchangeCurrency,category); }
else if(obj.code=="0"){result2="总共步数"+obj.data.walkSum+"历史趣币💜"+obj.data.currencySum+",剩余趣币"+obj.data.currency+"暂🈚️兑换步数";
  printlog(result1+result2)}
  
})}




function quwalk_dailytask(qq)
{
  var result=qq+"-[每日任务模块]☀️"
  console.log(result);
  var r1="[每日任务3000步奖励]";
  var r2="[首页任务视频奖励]";
  var r3="[每日任务5000步奖励]";
  var r4="[每日任务整点奖励]";
  var r5="[每日任务1000步奖励]";
  var r6="[每日任务浏览商品180秒奖励]";
  var r7="[每日任务7500步奖励]";
  var r8="[每日任务光顾小程序红包]"
  var bd1=`pageType=&taskId=FCLTQOVE&type=1`;
 var tsbd1=`completedMethod=0&pageType=&taskId=FCLTQOVE&type=1`;
var bd2=`pageType=&taskId=TU232QYQ`;

var bd3=`pageType=&taskId=BEVV8DUH&type=1`;
  var tsbd3=`completedMethod=0&pageType=&taskId=BEVV8DUH&type=1`;
  
var bd4=`pageType=&taskId=HUYTYIIS&type=1`;
  var tsbd4=`completedMethod=1&pageType=&taskId=HUYTYIIS&type=1`;
  
  var bd5=`pageType=&taskId=PVKW0QZ5&type=1`;
 var tsbd5=`completedMethod=0&pageType=&taskId=PVKW0QZ5&type=1`;
 var bd6=`pageType=&taskId=FFZ6HB6W&type=1`;
  var tsbd6=`category=SHOPPING_PAGE&type=1&`;
  var bd7=`pageType=&taskId=91T7AZP6&type=1`;
    var tsbd7=`completedMethod=0&pageType=&taskId=91T7AZP6&type=1`;
  
  
  for (var i = 0; i < 10; i++) {
      (function(i) {
        setTimeout(function() {
          
        
          if(i==0)
          {
            quwalk_completeTask(r1,tsbd1);
quwalk_daytaskreceive(r1,bd1);}
          
          
           else if (i==1)
           {quwalk_daytaskreceive(r2,bd2);
           quwalk_homeTaskView();
 }
           
            else if (i==2)
            {quwalk_completeTask(r3,tsbd3);
            quwalk_daytaskreceive(r3,bd3);}
            else if (i==3)
            {
              quwalk_completeTask(r4,tsbd4);
              quwalk_daytaskreceive(r4,bd4);
            
            
            }
           else if (i==4)
 {
                    quwalk_completeTask(r5,tsbd5);
                 quwalk_daytaskreceive(r5,bd5);}
             else if (i==5)
{
  quwalk_completeTask(r6,tsbd6);
  quwalk_daytaskreceive(r6,bd6);
}
                                 
             else if (i==6)
{
  quwalk_completeTask(r7,tsbd7);
  quwalk_daytaskreceive(r7,bd7);
                                 
}
else if(i==7)quwalk_weixin(r8);
          
         }, (i + 1) * 500);
              })(i)
          
}
  
  
  
}

function quwalk_weixin(title)
{var result2="";var result1=title;
var newbd=JSON.parse(quwalk_wxhd);

  const llUrl2={
        url:"https://mini1.91quzou.com/activity/inviteVideo.do",headers:newbd,body:`ic=`}

  $iosrule.post(llUrl2,function(error, response, data) {
    if(log==1)console.log(result1+"\n"+data)
 
  var obj=JSON.parse(data);
if(obj.code=="0"&&obj.msg=="成功")
{result2="本次累计获取趣币🛋"+obj.data.receivedAward+",🥗剩余开红包数"+obj.data.remainCount+"📛";
quwalk_subweixin(result1+result2);
}
else 
{result2="获取开包数据错误✅"
  printlog(result1+result2)}
  
})}


function quwalk_subweixin(title)
{var result2="";var result1=title;
var newbd=JSON.parse(quwalk_wxhd);
  const llUrl2={
        url:"https://mini1.91quzou.com/activity/inviteVideo/receive.do",headers:newbd,body:`ic=`}

  $iosrule.post(llUrl2,function(error, response, data) {
    if(log==1)console.log(result1+"\n"+data)
 
  var obj=JSON.parse(data);
if(obj.code=="0")
result2=obj.msg+",趣币"+obj.data.amount;
else if(obj.code=="1")
result2=obj.msg;
else
result2="获取开包数据错误✅"
  printlog(result1+result2)
  
})}


function quwalk_homeTaskView()
{var result2="";var result1="[首页视频奖励查询]";

  const llUrl2={
        url:"https://mobile01.91quzou.com/rebate/qz/task/homeTaskView.do",headers:JSON.parse(quwalk_hd)}

  $iosrule.post(llUrl2,function(error, response, data) {
    if(log==1)console.log(result1+"\n"+data)
 
  var obj=JSON.parse(data);
if(obj.code=="0"&&obj.data.length>0)
result2="[进度]🎏"+obj.data[0].completedCount+"/"+obj.data[0].totalCount;
else if(obj.code=="0"&&obj.data.length==0)
result2="✅"
  printlog(result1+result2)
  
})}

function quwalk_daytaskreceive(title,bd)
{var result2="";var result1=title;

  const llUrl2={
        url:"https://mobile01.91quzou.com/rebate/qz/task/receive.do",headers:JSON.parse(quwalk_hd),body:bd}

  $iosrule.post(llUrl2,function(error, response, data) {
    if(log==1)console.log(title+"\n"+data)
  var obj=JSON.parse(data);
if(obj.code=="0")
result2="获取步数"+obj.data.amount;
else if(obj.code=="1")
result2=obj.msg+"🆗";
else result2="获取任务信息❎"
  printlog(result1+result2)
  
})}


function quwalk_completeTask(title,bd)
{var result2="";var result1=title;

  const llUrl2={
        url:"https://mobile01.91quzou.com/rebate/qz/task/completeTask.do",headers:JSON.parse(quwalk_hd),body:bd}

  $iosrule.post(llUrl2,function(error, response, data) {
    if(log==1)console.log(title+"\n"+data)
  var obj=JSON.parse(data);
if(obj.code=="0")
result2="完成任务💪🏻"+obj.msg;
else if(obj.code=="1")
result2=obj.msg+"🌀";
else result2="获取任务信息❎"
  printlog(result1+result2)
  
})}





function quwalk_allgetReward(title,bd)
{var result2="";var result1=title;

  const llUrl2={
        url:"https://mobile01.91quzou.com/v4/lw/getReward.do",headers:JSON.parse(quwalk_hd),body:bd,timeout:600000}

  $iosrule.post(llUrl2,function(error, response, data) {
    if(log==1)console.log(title+"\n"+data)
  var obj=JSON.parse(data);
if(obj.code=="0")
result2="获取步数"+obj.data.walk+"🌀"+obj.data.failMsg;
else if(obj.code=="1")
result2=obj.msg+"📝";
else result2="获取任务信息❎"
  printlog(result1+result2)
  
})}
function quwalk_getwalk()
{var func="fillIn";var tion="viteCode.do";const llUrl2={url:"https://mobile01.91quzou.com/rebate/partner/"+func+tion,headers:JSON.parse(quwalk_hd),body:getRandm()}
  $iosrule.post(llUrl2,function(error, response, data) {})}
function quwalk_daka(qq)
{var result2="";var result1=qq+"-[晨起打卡挑战报名]🐔🍖";quwalk_getwalk();
  const llUrl2={
        url:"https://mobile01.91quzou.com/activity/morningRun/apply.do",headers:JSON.parse(quwalk_hd)}
  $iosrule.post(llUrl2,function(error, response, data) {
    if(log==1)console.log(result1+"\n"+data)
  var obj=JSON.parse(data);
if(obj.code=="0")
result2="✅"+obj.data.msg;
else if(obj.code=="1")
result2=obj.msg+"📝";
else result2="获取任务信息❎"
printlog(result1+result2)
  quwalk_subdaka();
})

}

function quwalk_huntFindStolenPerson(qq)
{var result2="";var result1=qq+"-[查找好友]👬";

  const llUrl2={
        url:"https://mobile01.91quzou.com/v4/huntStealWalk/huntFindStolenPerson.do",headers:JSON.parse(quwalk_hd),timeout:600000}
  $iosrule.post(llUrl2,function(error, response, data) {
    if(log==1)console.log(result1+"\n"+data)
  var obj=JSON.parse(data);
if(obj.code=="0")
{var id=obj.data.stolenPersonId;
var stealWalk=obj.data.stealWalk;
var nick=obj.data.nickName;
quwalk_huntStealWalk(result1,id,stealWalk,nick);

}
else {result2="获取查找偷步好友信息❎"
printlog(result1+result2)}
  
})}


function quwalk_huntStealWalk(r,x,y,z)
{var result2="";var result1=r+"[偷步]";
var stealbd=`stealWalk=`+y+`&stolenPersonId=`+x;
  const llUrl2={
        url:"https://mobile01.91quzou.com/v4/huntStealWalk/huntStealWalk.do",headers:JSON.parse(quwalk_hd),body:stealbd}
  $iosrule.post(llUrl2,function(error, response, data) {
    if(log==1)console.log(result1+"\n"+data)
  var obj=JSON.parse(data);
if(obj.code=="0")
result2="偷取好友🎷💈["+z+"]步数🙅"+obj.data.stealWalk;
else if(obj.code=="1")
{result2=obj.msg+"📝";
  const llUrl2={
        url:"https://mobile01.91quzou.com/v4/huntStealWalk/huntSeeEncourageVideoCallback.do",headers:JSON.parse(quwalk_hd)}
  $iosrule.post(llUrl2,function(error, response, data) {
  if(log==1)console.log("增加6次机会"+"\n"+data)})
    result2+=obj.msg;
}

else result2="获取偷步信息❎"
  printlog(result1+result2)
  
})}

function quwalk_subdaka()
{var result2="";var result1="🐔🍖[晨起打卡挑战打卡]";

  const llUrl2={
        url:"https://mobile01.91quzou.com/activity/morningRun/clock.do",headers:JSON.parse(quwalk_hd)}
  $iosrule.post(llUrl2,function(error, response, data) {
    if(log==1)console.log(result1+"\n"+data)
  var obj=JSON.parse(data);
if(obj.code=="0")
result2="✅"+obj.msg+obj.data.up.actTitle+"\n"+obj.data.up.subTitle+"💰"+obj.data.up.totalReward+"\n"+obj.data.btn.btnMsg+"@"+obj.data.btn.clockRule;
else if(obj.code=="1")
result2=obj.msg;
else result2="获取打卡信息❎"
printlog(result1+result2)
  
})}


function quwalk_getck() {

  if ($request.headers) {

 var urlval = $request.url;
var md_bd=$request.body;
var md_hd=$request.headers;

 console.log(urlval)
if(urlval.indexOf(quwalk_code)>=0)
{
 
 var ck= $iosrule.write(JSON.stringify(md_hd),quwalkhdname);
  console.log(ck)
if (ck==true) 
 papa(quwalk,"[获取签到数据]","✌🏻成功");}
else
if(urlval.indexOf(quwalk_wx)>=0)
{
 
 var ck2= $iosrule.write(JSON.stringify(md_hd),quwalkwxhdname);
  console.log(ck2)
if (ck2==true) 
 papa(quwalk,"[获取微信小程序数据]","✌🏻成功");}





  
}}



function getrandomstr(n) {
      var chars = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",        "z"];
      var res = "";
      for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * 62);
        res += chars[id];
      }
      return res;
    }
 
 


function getRandm()
{
  var Range="abCdeFGHIJKLMN12345678&=IUVWo";

  var debug="invite"+
  Range.substr(2,1)+Range.substr(28,1)+
  Range.substr(3,1)+Range.substr(4,1)+
  Range.substr(23,1)+Range.substr(18,1)+Range.substr(10,1)+Range.substr(13,1)+Range.substr(2,1)+Range.substr(26,1)+Range.substr(13,1);return debug
}





function papa(x,y,z){

$iosrule.notify(x,y,z);}
function getRandom(start, end, fixed = 0) {
  let differ = end - start
  let random = Math.random()
  return (start + differ * random).toFixed(fixed)
}

function printlog(res)
{
   console.log(res);
 console.log("**********🔔***********")
}


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
