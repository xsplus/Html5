/**
 * Created by Administrator on 12/16 0016.
 */
var scene_main = {
    'box':$('.scene.scene-main'),          /*场景的标签*/
    'debug':true,                            /*是否开启调试模式*/
    'width':11811,                            /*场景的宽*/
    'height':2953,                           /*场景的高*/
    'path':'img/main/',                    /*图片根目录*/
    'auto_w':false,                        /*是否自动适应宽度*/
    'auto_h':false,                         /*是否自动适应高度*/
    'layers':[
        //背景图
        {'img':'bg4.png'},
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
        {'img':'heiyun.png',x:-1200,y:144,w:419,h:137,'attr':{'class':'yun yun1'}},
        {'img':'baiyun.png',x:-400,y:726,w:344,h:123,'attr':{'class':'yun yun1'}},
        {'img':'baiyun.png',x:-800,y:1026,w:344,h:123,'attr':{'class':'yun yun1'}},
        {'img':'heiyun.png',x:-1200,y:244,w:419,h:137,'attr':{'class':'yun yun2'}},
        {'img':'baiyun.png',x:-400,y:526,w:344,h:123,'attr':{'class':'yun yun2'}},
        {'img':'baiyun.png',x:-800,y:826,w:344,h:123,'attr':{'class':'yun yun2'}},
        {'img':'heiyun.png',x:-1200,y:144,w:419,h:137,'attr':{'class':'yun yun3'}},
        {'img':'baiyun.png',x:-400,y:726,w:344,h:123,'attr':{'class':'yun yun3'}},
        {'img':'baiyun.png',x:-800,y:1026,w:344,h:123,'attr':{'class':'yun yun3'}},
        {'img':'heiyun.png',x:-1200,y:244,w:419,h:137,'attr':{'class':'yun yun4'}},
        {'img':'baiyun.png',x:-400,y:526,w:344,h:123,'attr':{'class':'yun yun4'}},
        {'img':'baiyun.png',x:-800,y:826,w:344,h:123,'attr':{'class':'yun yun4'}},
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
    ]
}

bindfun.push(function(){
    //给地标绑定事件
    $('.dibiaoAction').bind('touchstart',function(){
        $('.scene.scene-main').removeClass('show');
        $('.scene.scene-huiyi').addClass('show');
    });
})