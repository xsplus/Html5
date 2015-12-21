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
        {'img':'bg.png','attr':{'class':'bg'},isbg:true},
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

        {x:5513,y:1754,w:19,h:10,'attr':{'class':'daloudeng'}},
        {x:5560,y:1696,w:19,h:10,'attr':{'class':'daloudeng'}},
        {x:5606,y:1780,w:19,h:10,'attr':{'class':'daloudeng'}},
        {x:5685,y:1589,w:19,h:10,'attr':{'class':'daloudeng'}},
        {x:5682,y:1589,w:19,h:10,'attr':{'class':'daloudeng'}},

        {x:5716,y:2069,w:18,h:10,'attr':{'class':'daloudeng'}},
        {x:5844,y:1734,w:18,h:10,'attr':{'class':'daloudeng'}},
        {x:5869,y:1771,w:16,h:10,'attr':{'class':'daloudeng'}},
        {x:5910,y:1898,w:25,h:8,'attr':{'class':'daloudeng'}},
        {x:5912,y:2216,w:63,h:8,'attr':{'class':'daloudeng'}},
        {x:5337,y:2307,w:305,h:10,'attr':{'class':'daloudeng'}},
        {x:6593,y:1045,w:67,h:10,'attr':{'class':'daloudeng'}},
        {x:6570,y:1152,w:50,h:10,'attr':{'class':'daloudeng'}},
        {x:6597,y:1376,w:19,h:10,'attr':{'class':'daloudeng'}},
        {x:6628,y:1514,w:19,h:10,'attr':{'class':'daloudeng'}},
        {x:6477,y:1452,w:18,h:10,'attr':{'class':'daloudeng'}},
        {x:6712,y:2148,w:73,h:18,'attr':{'class':'daloudeng'}},
        {x:6712,y:2203,w:73,h:18,'attr':{'class':'daloudeng'}},
        {x:7329,y:1333,w:86,h:10,'attr':{'class':'daloudeng'}},
        {x:7329,y:1417,w:86,h:10,'attr':{'class':'daloudeng'}},
        {x:7329,y:1530,w:86,h:10,'attr':{'class':'daloudeng'}},
        {x:7313,y:1610,w:93,h:10,'attr':{'class':'daloudeng'}},
        {x:7313,y:1676,w:93,h:10,'attr':{'class':'daloudeng'}},
        {x:7313,y:1703,w:93,h:10,'attr':{'class':'daloudeng'}},
        {x:7313,y:1724,w:93,h:10,'attr':{'class':'daloudeng'}},
        {x:7313,y:1799,w:93,h:10,'attr':{'class':'daloudeng'}},
        {x:7313,y:1822,w:93,h:10,'attr':{'class':'daloudeng'}},
        {x:8416,y:1477,w:16,h:16,'attr':{'class':'daloudeng'}},
        {x:8416,y:1530,w:16,h:16,'attr':{'class':'daloudeng'}},
        {x:8165,y:2118,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:8165,y:2144,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:8189,y:2118,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:8189,y:2144,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:8238,y:2120,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:8238,y:2145,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:8572,y:2023,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:8596,y:2023,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:8643,y:2023,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:8667,y:2023,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:8689,y:2023,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:8756,y:2023,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:8780,y:2023,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:9415,y:1651,w:171,h:16,'attr':{'class':'daloudeng'}},
        {x:9423,y:1807,w:50,h:16,'attr':{'class':'daloudeng'}},
        {x:9525,y:1807,w:50,h:16,'attr':{'class':'daloudeng'}},
        {x:9697,y:1570,w:51,h:16,'attr':{'class':'daloudeng'}},
        {x:8848,y:1370,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:9840,y:1792,w:30,h:10,'attr':{'class':'daloudeng'}},
        {x:10290,y:1144,w:35,h:7,'attr':{'class':'daloudeng'}},
        {x:10295,y:1427,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:10324,y:1427,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:10353,y:1427,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:10382,y:1427,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:10435,y:1427,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:10465,y:1427,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:10495,y:1427,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:10437,y:1602,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:10495,y:1516,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:10415,y:1795,w:27,h:15,'attr':{'class':'daloudeng'}},
        {x:10477,y:1765,w:27,h:15,'attr':{'class':'daloudeng'}},
        {x:10600,y:1764,w:27,h:15,'attr':{'class':'daloudeng'}},
        {x:10663,y:1764,w:27,h:15,'attr':{'class':'daloudeng'}},
        {x:10620,y:1690,w:178,h:14,'attr':{'class':'daloudeng'}},
        {x:10677,y:1408,w:75,h:7,'attr':{'class':'daloudeng'}},
        {x:10677,y:1426,w:75,h:7,'attr':{'class':'daloudeng'}},
        {x:10708,y:1016,w:15,h:15,'attr':{'class':'daloudeng'}},
        {x:10786,y:1228,w:349,h:10,'attr':{'class':'daloudeng'}},
        {x:11178,y:1228,w:230,h:10,'attr':{'class':'daloudeng'}},
        {x:11054,y:1139,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:10786,y:1289,w:54,h:10,'attr':{'class':'daloudeng'}},
        {x:10849,y:1289,w:54,h:10,'attr':{'class':'daloudeng'}},
        {x:10911,y:1289,w:54,h:10,'attr':{'class':'daloudeng'}},
        {x:10972,y:1289,w:54,h:10,'attr':{'class':'daloudeng'}},
        {x:10786,y:1344,w:54,h:10,'attr':{'class':'daloudeng'}},
        {x:10911,y:1396,w:54,h:10,'attr':{'class':'daloudeng'}},
        {x:10911,y:1445,w:54,h:10,'attr':{'class':'daloudeng'}},
        {x:10911,y:1495,w:54,h:10,'attr':{'class':'daloudeng'}},
        {x:10911,y:1344,w:54,h:10,'attr':{'class':'daloudeng'}},
        {x:11310,y:1370,w:100,h:10,'attr':{'class':'daloudeng'}},
        {x:11442,y:1303,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:11477,y:1303,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:11515,y:1303,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:11515,y:1527,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:11600,y:1466,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:11638,y:1463,w:18,h:18,'attr':{'class':'daloudeng'}},
        {x:11650,y:1827,w:31,h:15,'attr':{'class':'daloudeng'}},
        {x:11650,y:1921,w:31,h:15,'attr':{'class':'daloudeng'}},
        {x:11710,y:1921,w:31,h:15,'attr':{'class':'daloudeng'}},
        {x:11710,y:2204,w:31,h:15,'attr':{'class':'daloudeng'}},
        {x:11745,y:1567,w:55,h:12,'attr':{'class':'daloudeng'}},
        {x:9831,y:2262,w:123,h:10,'attr':{'class':'daloudeng'}},
        //小飞机
        {'img':'xiaofeiji1.png',x:8068,y:256,'attr':{'class':'xiaofeiji1'}},
        {'img':'xiaofeiji2.png',x:2091,y:484,'attr':{'class':'xiaofeiji2'}},
        //地标标识
        {'img':'dibiaobiaoshi.png',x:1595,y:755,'attr':{'class':'dibiaobiaoshi'}},
        {'img':'dibiaobiaoshi.png',x:2786,y:1147,'attr':{'class':'dibiaobiaoshi'}},
        {'img':'dibiaobiaoshi.png',x:4246,y:853,'attr':{'class':'dibiaobiaoshi'}},
        {'img':'dibiaobiaoshi.png',x:5295,y:821,'attr':{'class':'dibiaobiaoshi'}},
        {'img':'dibiaobiaoshi.png',x:6067,y:543,'attr':{'class':'dibiaobiaoshi'}},
        {'img':'dibiaobiaoshi.png',x:7379,y:410,'attr':{'class':'dibiaobiaoshi'}},
        {'img':'dibiaobiaoshi.png',x:9000,y:319,'attr':{'class':'dibiaobiaoshi'}},
        {'img':'dibiaobiaoshi.png',x:10412,y:234,'attr':{'class':'dibiaobiaoshi'}},
        {'img':'dibiaobiaoshi.png',x:11046,y:698,'attr':{'class':'dibiaobiaoshi'}},
        //摩天轮
        {'img':'motianlun.png',x:2755,y:1110,'attr':{'class':'motianlun'}},
        //中小学建筑
        {'img':'zxxjianzhu.png',x:2700,y:1842,'attr':{'class':'zxxjianzhu'}},
        //说明
        {'img':'shuoming.png',x:1582,y:0,w:5251,h:2953,'attr':{'class':'shuoming'},'css':{'background-color':'rgba(0,0,0,0.6)'}},
        //OK
        {'img':'btn_ok.png',x:4086,y:1940,w:282,h:259,attr:{'class':'btn_ok'}},
    ]
}

bindfun.push(function(){
    if (!!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
        var main_box = $('.scene-main')
        if(!scene_main.debug) main_box.css('left', -window.innerWidth * 0.3);
        var main_bg = $('.scene-main .bg');
        var limit = main_bg.width() - window.innerWidth;
        var pos = {x : parseFloat(main_box.css('left')), y : 0};
        var startPos, isTouch;
        //触摸事件自定义
        main_box.on('touchstart', function (event) {
            var touch = event.targetTouches[0];     //touches数组对象获得屏幕上所有的touch，取第一个touch
            startPos = {x: pos.x-touch.pageX, y: touch.pageY };    //取第一个touch的坐标值
            main_box.on('touchmove',touchmove);
            main_box.one('touchend',touchend);
            isTouch = true;
        });
        function touchmove(event) {
            if (event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
            var touch = event.targetTouches[0];
            var tmp = {x: touch.pageX + startPos.x, y: touch.pageY - startPos.y};
            event.preventDefault();      //阻止触摸事件的默认行为，即阻止滚屏
            moveTo(tmp.x)
        }
        function touchend() {
            //解绑事件
            isTouch = false;
            main_box.off('touchmove',touchmove);

        }
        function moveTo(x){
            if (x > 0) x = 0;
            else if (limit + x < 0) x = -limit;
            main_box.css('left', x);
            pos.x = x;
        }

        /*重力感应*/
        try {
            if (window.DeviceOrientationEvent && !scene_main.debug) {
                var alpha;
                window.addEventListener("deviceorientation", orientationHandler, false);
                function orientationHandler(event) {
                    if (main_box.is('.show') && !isTouch) {
                        var change = limit >> 6;
                        var _alpha = event.alpha;
                        if (_alpha) {
                            var _alpha = _alpha.toFixed(1);
                            if (alpha && _alpha) {
                                var tmp = _alpha - alpha;
                                if (tmp > 180) tmp -= 360;
                                else if (tmp < -180) tmp += 360;
                                moveTo(pos.x + tmp * change)
                            }
                        }
                        alpha = _alpha;
                    }
                }
            }
        }
        catch (e) {}

        $(window).resize(function(){
            limit = main_bg.width() - window.innerWidth;
        });
    }



    //给地标绑定事件
    $('.dibiaoAction').on('touchstart',function(){
        $('.scene.scene-main').removeClass('show');
        $('.scene.scene-huiyi').addClass('show');
    });
    //OK
    $('.btn_ok').on('touchstart',function(){
        console.log("关闭提醒");
        $('.scene.scene-main .shuoming').remove();
        $('.scene.scene-main .btn_ok').remove();
    });
})