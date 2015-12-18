/**
 * Created by Administrator on 12/16 0016.
 */
var scene_main = {
    'box':$('.scene.scene-main'),          /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':11811,                            /*场景的宽*/
    'height':2953,                           /*场景的高*/
    'path':'img/main/',                    /*图片根目录*/
    'auto_w':false,                        /*是否自动适应屏幕宽度*/
    'auto_h':true,                         /*是否自动适应屏幕高度*/
    'touch':true,
    'layers':[
        //背景图
        {'img':'bg4.png','attr':{'class':'bg'}},
        //风车
        {'img':'fengche.png',x:1275,y:1684,w:140,h:120,'attr':{'class':'fengche'}},
        {'img':'fengche.png',x:1992,y:1476,'attr':{'class':'fengche'}},
        {'img':'fengche.png',x:2510,y:1565,w:89,h:108,'attr':{'class':'fengche'}},
        {'img':'fengche.png',x:5127,y:1455,w:197,h:214,'attr':{'class':'fengche'}},
        {'img':'fengche.png',x:7096,y:1372,w:110,h:122,'attr':{'class':'fengche'}},
        {'img':'fengche.png',x:7570,y:1381,w:159,h:199,'attr':{'class':'fengche'}},
        {'img':'fengche.png',x:8461,y:1519,w:164,h:146,'attr':{'class':'fengche'}},
        {'img':'fengche.png',x:10612,y:590,w:384,h:397,'attr':{'class':'fengche'}},
        {'img':'fengche.png',x:11154,y:830,w:189,h:215,'attr':{'class':'fengche'}},
        {'img':'fengche.png',x:11310,y:595,w:370,h:385,'attr':{'class':'fengche'}},
        //云
        {'img':'heiyun.png',x:-500,y:144,w:419,h:137,'attr':{'class':'yun'}},
        {'img':'baiyun.png',x:-350,y:546,w:344,h:123,'attr':{'class':'yun'}},
        {'img':'baiyun.png',x:-1200,y:726,w:344,h:123,'attr':{'class':'yun'}},
        {'img':'heiyun.png',x:-1450,y:244,w:419,h:137,'attr':{'class':'yun'}},
        {'img':'baiyun.png',x:-2000,y:526,w:344,h:123,'attr':{'class':'yun'}},
        {'img':'baiyun.png',x:-2800,y:556,w:344,h:123,'attr':{'class':'yun'}},
        {'img':'heiyun.png',x:-2500,y:144,w:419,h:137,'attr':{'class':'yun'}},
        {'img':'baiyun.png',x:-3350,y:626,w:344,h:123,'attr':{'class':'yun'}},
        {'img':'baiyun.png',x:-3900,y:726,w:344,h:123,'attr':{'class':'yun'}},
        {'img':'heiyun.png',x:-3500,y:244,w:419,h:137,'attr':{'class':'yun'}},
        {'img':'baiyun.png',x:-4500,y:626,w:344,h:123,'attr':{'class':'yun'}},
        //星星
        {'img':'star.png',x:674,y:458,w:40,h:40,'attr':{'class':'star'}},
        {'img':'star.png',x:1097,y:274,w:30,h:30,'attr':{'class':'star'}},
        {'img':'star.png',x:1671,y:439,w:30,h:30,'attr':{'class':'star'}},
        {'img':'star.png',x:2691,y:461,w:40,h:40,'attr':{'class':'star'}},
        {'img':'star.png',x:4268,y:381,w:40,h:40,'attr':{'class':'star'}},
        {'img':'star.png',x:4612,y:625,w:30,h:30,'attr':{'class':'star'}},
        {'img':'star.png',x:6512,y:675,w:30,h:30,'attr':{'class':'star'}},
        {'img':'star.png',x:8065,y:458,w:40,h:40,'attr':{'class':'star'}},
        {'img':'star.png',x:10110,y:150,w:40,h:40,'attr':{'class':'star'}},
        {'img':'star.png',x:3000,y:200,w:30,h:30,'attr':{'class':'star'}},
        {'img':'star.png',x:2000,y:320,w:30,h:30,'attr':{'class':'star'}},
        {'img':'star.png',x:3300,y:250,w:30,h:30,'attr':{'class':'star'}},
        {'img':'star.png',x:3800,y:200,w:40,h:40,'attr':{'class':'star'}},
        {'img':'star.png',x:5000,y:370,w:40,h:40,'attr':{'class':'star'}},
        {'img':'star.png',x:5500,y:450,w:30,h:30,'attr':{'class':'star'}},
        {'img':'star.png',x:7200,y:600,w:30,h:30,'attr':{'class':'star'}},
        //地标
        {'img':'huiyi.png',x:1807,y:765,w:359,h:163,'attr':{'class':'dibiao'}},
        {'img':'zhongxiaoxue.png',x:2982,y:1171,w:278,h:163,'attr':{'class':'dibiao'}},
        {'img':'daxue.png',x:4429,y:915,w:191,h:157,'attr':{'class':'dibiao'}},
        {'img':'yiyuan.png',x:5501,y:866,w:187,h:150,'attr':{'class':'dibiao'}},
        {'img':'yinhang.png',x:6277,y:615,w:181,h:157,'attr':{'class':'dibiao'}},
        {'img':'gouwuzhongxin.png',x:7608,y:436,w:373,h:171,'attr':{'class':'dibiao'}},
        {'img':'changfang.png',x:9131,y:360,w:373,h:164,'attr':{'class':'dibiao'}},
        {'img':'jingqu.png',x:10615,y:294,w:189,h:147,'attr':{'class':'dibiao'}},
        {'img':'ditie.png',x:11240,y:740,w:199,h:156,'attr':{'class':'dibiao'}},
        //地标加上div用于添加事件
        {x:1507,y:565,w:800,h:800,'attr':{'class':'dibiaoAction'}},
        {x:2782,y:971,w:700,h:700,'attr':{'class':'dibiaoAction'}},
        {x:4229,y:715,w:700,h:700,'attr':{'class':'dibiaoAction'}},
        {x:5301,y:666,w:700,h:700,'attr':{'class':'dibiaoAction'}},
        {x:5977,y:315,w:700,h:700,'attr':{'class':'dibiaoAction'}},
        {x:7408,y:236,w:700,h:700,'attr':{'class':'dibiaoAction'}},
        {x:8980,y:140,w:700,h:700,'attr':{'class':'dibiaoAction'}},
        {x:10415,y:10,w:600,h:600,'attr':{'class':'dibiaoAction'}},
        {x:11090,y:540,w:600,h:600,'attr':{'class':'dibiaoAction'}},
        //大飞机
        {'img':'dafeiji.png',x:3387,y:328,w:1467,h:550,'attr':{'class':'dafeiji'}},
        //大楼灯
        {x:1102,y:2144,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1152,y:2144,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1172,y:2144,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1192,y:2144,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1249,y:2144,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1269,y:2144,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1289,y:2144,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1331,y:2144,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1352,y:2144,w:10,h:10,'attr':{'class':'daloudeng'}},

        {x:1638,y:2207,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1679,y:2207,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1702,y:2207,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1638,y:2229,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1679,y:2229,w:10,h:10,'attr':{'class':'daloudeng'}},
        {x:1702,y:2229,w:10,h:10,'attr':{'class':'daloudeng'}},

        {x:1991,y:1882,w:12,h:14,'attr':{'class':'daloudeng'}},
        {x:2035,y:1882,w:12,h:14,'attr':{'class':'daloudeng'}},
        {x:1991,y:1918,w:12,h:14,'attr':{'class':'daloudeng'}},
        {x:2035,y:1918,w:12,h:14,'attr':{'class':'daloudeng'}},
        {x:2035,y:1953,w:12,h:15,'attr':{'class':'daloudeng'}},

        {x:1988,y:1999,w:38,h:30,'attr':{'class':'daloudeng'}},
        {x:2037,y:1999,w:38,h:30,'attr':{'class':'daloudeng'}},
        {x:2080,y:1999,w:47,h:30,'attr':{'class':'daloudeng'}},

        {x:2357,y:1588,w:75,h:6,'attr':{'class':'daloudeng'}},
        {x:2357,y:1604,w:75,h:6,'attr':{'class':'daloudeng'}},
        {x:2357,y:1680,w:75,h:6,'attr':{'class':'daloudeng'}},
        {x:2357,y:1698,w:75,h:6,'attr':{'class':'daloudeng'}},
        {x:2365,y:1767,w:79,h:6,'attr':{'class':'daloudeng'}},
        {x:2365,y:1826,w:79,h:6,'attr':{'class':'daloudeng'}},
        {x:2365,y:1847,w:79,h:6,'attr':{'class':'daloudeng'}},
        {x:2365,y:1868,w:79,h:6,'attr':{'class':'daloudeng'}},
        {x:2365,y:1931,w:79,h:6,'attr':{'class':'daloudeng'}},
        {x:2365,y:1952,w:79,h:6,'attr':{'class':'daloudeng'}},

        {x:1488,y:1655,w:13,h:13,'attr':{'class':'daloudeng'}},
        {x:1488,y:1699,w:13,h:13,'attr':{'class':'daloudeng'}},

        {x:1482,y:1863,w:82,h:12,'attr':{'class':'daloudeng'}},
        {x:1482,y:1889,w:82,h:12,'attr':{'class':'daloudeng'}},
        {x:1482,y:1915,w:82,h:12,'attr':{'class':'daloudeng'}},

        {x:2845,y:2269,w:28,h:28,'attr':{'class':'daloudeng'}},
        {x:2845,y:2310,w:28,h:28,'attr':{'class':'daloudeng'}},
        {x:2880,y:2310,w:28,h:28,'attr':{'class':'daloudeng'}},

        {x:2903,y:2071,w:69,h:12,'attr':{'class':'daloudeng'}},
        {x:2903,y:2143,w:69,h:12,'attr':{'class':'daloudeng'}},
        {x:2903,y:2206,w:69,h:12,'attr':{'class':'daloudeng'}},

        {x:3092,y:2154,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3134,y:2154,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3177,y:2154,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3219,y:2154,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3260,y:2154,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3092,y:2174,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3134,y:2174,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3092,y:2209,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3134,y:2209,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3260,y:2293,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3302,y:2293,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3387,y:2293,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3429,y:2293,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3387,y:2332,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3429,y:2332,w:32,h:8,'attr':{'class':'daloudeng'}},
        {x:3429,y:2231,w:32,h:8,'attr':{'class':'daloudeng'}},

        {x:1714,y:1588,w:8,h:450,'attr':{'class':'daloudeng'}},
        {x:1735,y:1588,w:8,h:450,'attr':{'class':'daloudeng'}},
        {x:1789,y:1588,w:8,h:518,'attr':{'class':'daloudeng'}},
        {x:1809,y:1588,w:8,h:518,'attr':{'class':'daloudeng'}},

        {x:3827,y:2280,w:354,h:8,'attr':{'class':'daloudeng'}},
        {x:4231,y:2280,w:11,h:8,'attr':{'class':'daloudeng'}},

        {x:3961,y:1858,w:11,h:11,'attr':{'class':'daloudeng'}},
        {x:3985,y:1795,w:11,h:11,'attr':{'class':'daloudeng'}},
        {x:4029,y:1837,w:11,h:11,'attr':{'class':'daloudeng'}},
        {x:4029,y:1858,w:11,h:11,'attr':{'class':'daloudeng'}},

        {x:4141,y:1902,w:341,h:12,'attr':{'class':'daloudeng'}},
        {x:4222,y:1841,w:37,h:10,'attr':{'class':'daloudeng'}},
        {x:4467,y:1757,w:37,h:10,'attr':{'class':'daloudeng'}},
        {x:4467,y:1820,w:37,h:10,'attr':{'class':'daloudeng'}},
        {x:4467,y:1861,w:37,h:10,'attr':{'class':'daloudeng'}},

        {x:4596,y:1806,w:80,h:11,'attr':{'class':'daloudeng'}},
        {x:4596,y:1869,w:188,h:11,'attr':{'class':'daloudeng'}},

        {x:4861,y:1789,w:13,h:17,'attr':{'class':'daloudeng'}},
        {x:4937,y:1724,w:13,h:17,'attr':{'class':'daloudeng'}},

        {x:5083,y:1905,w:15,h:8,'attr':{'class':'daloudeng'}},
        {x:5083,y:1959,w:15,h:8,'attr':{'class':'daloudeng'}},
        {x:5138,y:1994,w:15,h:8,'attr':{'class':'daloudeng'}},
        {x:5194,y:1885,w:15,h:8,'attr':{'class':'daloudeng'}},

        {x:4467,y:1861,w:37,h:10,'attr':{'class':'daloudeng'}},
        {x:4467,y:1861,w:37,h:10,'attr':{'class':'daloudeng'}},
        {x:4467,y:1861,w:37,h:10,'attr':{'class':'daloudeng'}},
    ]
}

bindfun.push(function(){
    /*重力感应*/
    if (window.DeviceOrientationEvent) {
        var alpha;
        var main_box = $('.scene-main');
        var main_bg = $('.scene-main .bg');
        main_box.css('left',-window.innerWidth*0.3);
        window.addEventListener("deviceorientation", orientationHandler, false);
        function orientationHandler(event) {
            if(main_box.is('.show')){
                var limit = main_bg.width() - window.innerWidth
                var change = limit>>6;
                var _alpha = event.beta;

                if (_alpha){
                    var _alpha = _alpha.toFixed(1);
                    if (alpha && _alpha) {
                        var tmp = _alpha - alpha;
                        if(tmp > 180) tmp = _alpha - alpha - 360;
                        else if(tmp < -180) tmp = _alpha - alpha + 360;

                        var tmp = parseFloat(main_box.css('left')) + tmp * change;
                        if(tmp > 0) main_box.css('left',0);
                        else if(limit+tmp<0) main_box.css('left',-limit);
                        else main_box.css('left',tmp);
                    }
                }
                alpha = _alpha;
            }
        }
    }

    //给地标绑定事件
    $('.dibiaoAction').bind('touchstart',function(){
        $('.scene.scene-main').removeClass('show');
        $('.scene.scene-huiyi').addClass('show');
    });
})