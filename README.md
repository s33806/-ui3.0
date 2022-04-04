# 拟态UI3.0-个人主页

(完全开源 禁止商用）<br>
博客：www.xfwl.club<br>
作者：小枫<br>
QQ：1809185784<br>
QQ群：951649263<br>
本源码前端页面以及UI图由小枫开发，后端部分是拿赞助金找人开发的（自己也垫了些，不过他写完后我就后悔了 o(╥﹏╥)o ）。<br>
<br>
技术栈：<br>
UI Photoshop<br>
前端 HTML CSS JavaScript jQuery 后台页面用的是光年框架<br>
后端 thinkPHP6 前后端分离<br>
网易音乐和天气API接口调用的是 api.vvhan.com <br>
<br>
# 作者留言<br>
* 因为疫情原因，我报考的单招考试推迟到了四月份，我也没有去找工作，可能后期的拟态4.0会... Ծ‸Ծ ！<br>
* 然后拟态3.0的音乐播放器添加音乐这块，这个月中旬会更新，大家关注下就好了！<br>
* 当然拟态2.0和3.0也会持续更新并且完全开源免费，有BUG可以随时反馈，谢谢大家支持！<br>
<br>
# 赞助名单<br>
* 名称             QQ<br>
  Nycnyes          3523864713<br>
  顾陌             2102919229<br>
  安迪             36150140 <br>
  a万丈深渊的爱情  954136781<br>
  小震额额HZEM     1409178687<br>
  a'ゞ盛夏         2327418818<br>
  千殇             1106581846<br>
  话多             627078645<br>
  笑话             2622886517<br>
  Aa.弃生          854437635<br>
  小言             536915013<br>
<br>
# 使用说明<br>
* 推荐使用 稳定云 www.wdhost.cn 搭建<br>
1.新建域名（设置纯静态），把压缩包导入根目录，(关闭防跨站攻击)<br>
2.新建域名 PHP > 7.2 设置域名录 xiaofeng/public (关闭防跨站攻击)<br>
3.在路径 xiaofeng/.env 配置数据库信息<br>
4.在路径 admin/js/common.js 部署前端接口 （http://02.xfwl.club/）替换成你的<br>
5.导入数据库：nitai3.sql<br>
6.后台：http://域名/admin<br>
  账号：admin<br>
  密码：123456<br>
7.设置伪静态：<br>

```
location / {
    if (!-e $request_filename){
        rewrite  ^(.*)$  /index.php?s=$1  last;   break;
    }
}
```

<br>
# 如果看了教程还不会就放个静态页面吧！<br>
<br>
演示站：<a href="https://www.xfwl.club/YYDS/nitaiv3" target="_blank" rel="noopener noreferrer" title="拟态3.0演示站">www.xfwl.club/YYDS/nitaiv3</a>
<br>
<br>
视频教程：<a href="https://www.bilibili.com/video/BV1ar4y1s7Mm/" target="_blank" rel="noopener noreferrer" title="教程">https://www.bilibili.com/video/BV1ar4y1s7Mm/</a><br>
<br>
展示图：
    <p><img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dec470b0-fed6-46e5-be53-ec85fadc01be/a1fe1925-fb2a-4d1a-87a6-916e11ab2ea7.jpg" alt="展示图" width="100%"></p>
    <p><img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dec470b0-fed6-46e5-be53-ec85fadc01be/549f346c-5dde-4a4a-9109-475a885b30ca.jpg" alt="展示图" width="100%"></p>
    <p><img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dec470b0-fed6-46e5-be53-ec85fadc01be/86c66504-dcf4-43ab-bb1d-e40ded5303f2.jpg" alt="展示图" width="100%"></p>
    <p><img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dec470b0-fed6-46e5-be53-ec85fadc01be/4d58b22b-7d09-461e-9f0a-2e5fe6b0fc75.jpg" alt="展示图" width="100%"></p>
    <p><img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dec470b0-fed6-46e5-be53-ec85fadc01be/9ff679d5-2ac1-415c-bda7-a230c35dd594.jpg" alt="展示图" width="100%"></p>
    <p><img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dec470b0-fed6-46e5-be53-ec85fadc01be/7a7b51f1-3cbc-4ed5-98ee-b4b9c5dded0b.jpg" alt="展示图" width="100%"></p>
