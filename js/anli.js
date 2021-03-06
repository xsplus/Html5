/**
 * Created by Administrator on 12/16 0016.
 
 */
sceneslist.push(scene_anli = {
    'box':$('.scene-anli'),          /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':11811,                            /*场景的宽*/
    'height':2953,                           /*场景的高*/
    'path':'img/main/',                    /*图片根目录*/
    'auto_w':false,                        /*是否自动适应屏幕宽度*/
    'auto_h':true,                         /*是否自动适应屏幕高度*/
    'layers':[
        //背景图
        {'img':'anli_bg.png',w:11811,h:2953,'attr':{'class':'bg'},isbg:true},
        //风车
        {'img':'anli_fengche.png',x:1275,y:1684,w:140,h:120,'attr':{'class':'fengche'}},
        {'img':'anli_fengche.png',x:1992,y:1476,'attr':{'class':'fengche'}},
        {'img':'anli_fengche.png',x:2510,y:1565,w:89,h:108,'attr':{'class':'fengche'}},
        {'img':'anli_fengche.png',x:5132,y:1455,w:197,h:214,'attr':{'class':'fengche'}},
        {'img':'anli_fengche.png',x:7096,y:1372,w:110,h:122,'attr':{'class':'fengche'}},
        {'img':'anli_fengche.png',x:7570,y:1381,w:159,h:199,'attr':{'class':'fengche'}},
        {'img':'anli_fengche.png',x:8461,y:1485,w:164,h:205,'attr':{'class':'fengche'}},
        {'img':'anli_fengche.png',x:10612,y:590,w:384,h:397,'attr':{'class':'fengche'}},
        {'img':'anli_fengche.png',x:11154,y:830,w:189,h:215,'attr':{'class':'fengche'}},
        {'img':'anli_fengche.png',x:11310,y:595,w:370,h:385,'attr':{'class':'fengche'}},
        //云
        {'img':'anli_heiyun.png',x:100,y:144,w:419,h:137,'attr':{'class':'yun'}},
        {'img':'anli_heiyun.png',x:1300,y:244,w:419,h:137,'attr':{'class':'yun'}},
        {'img':'anli_heiyun.png',x:2700,y:144,w:419,h:137,'attr':{'class':'yun'}},
        {'img':'anli_heiyun.png',x:4300,y:244,w:419,h:137,'attr':{'class':'yun'}},

        {'img':'anli_baiyun.png',x:600,y:526,w:344,h:123,'attr':{'class':'yun'}},
        {'img':'anli_baiyun.png',x:2000,y:446,w:344,h:123,'attr':{'class':'yun'}},
        {'img':'anli_baiyun.png',x:3400,y:326,w:344,h:123,'attr':{'class':'yun'}},
        {'img':'anli_baiyun.png',x:5000,y:356,w:344,h:123,'attr':{'class':'yun'}},
        //星星
        {'img':'star.png',x:674,y:458,w:40,h:40,'attr':{'class':'star star1'}},
        {'img':'star.png',x:1097,y:274,w:30,h:30,'attr':{'class':'star star2'}},
        {'img':'star.png',x:1671,y:439,w:30,h:30,'attr':{'class':'star star3'}},
        {'img':'star.png',x:2691,y:461,w:40,h:40,'attr':{'class':'star star4'}},
        {'img':'star.png',x:4268,y:381,w:40,h:40,'attr':{'class':'star star5'}},
        {'img':'star.png',x:4612,y:625,w:30,h:30,'attr':{'class':'star star4'}},
        {'img':'star.png',x:6512,y:675,w:30,h:30,'attr':{'class':'star star3'}},
        {'img':'star.png',x:8065,y:458,w:40,h:40,'attr':{'class':'star star2'}},
        {'img':'star.png',x:10110,y:150,w:40,h:40,'attr':{'class':'star star1'}},
        {'img':'star.png',x:3000,y:200,w:30,h:30,'attr':{'class':'star star2'}},
        {'img':'star.png',x:2000,y:320,w:30,h:30,'attr':{'class':'star star3'}},
        {'img':'star.png',x:3300,y:250,w:30,h:30,'attr':{'class':'star star4'}},
        {'img':'star.png',x:3800,y:200,w:40,h:40,'attr':{'class':'star star5'}},
        {'img':'star.png',x:5000,y:370,w:40,h:40,'attr':{'class':'star star4'}},
        {'img':'star.png',x:5500,y:450,w:30,h:30,'attr':{'class':'star star3'}},
        {'img':'star.png',x:7200,y:600,w:30,h:30,'attr':{'class':'star star2'}},
        //地标
        {'img':'huiyi.png',x:1807,y:765,w:359,h:163,'attr':{'class':'dibiao huiyi btn','data-id':'huiyi'}},
        {'img':'zhongxiaoxue.png',x:2982,y:1171,w:278,h:163,'attr':{'class':'dibiao zhongxiaoxue btn','data-id':'zhongxiaoxue'}},
        {'img':'daxue.png',x:4429,y:915,w:191,h:157,'attr':{'class':'dibiao daxue btn','data-id':'daxue'}},
        {'img':'yiyuan.png',x:5501,y:866,w:187,h:150,'attr':{'class':'dibiao yiyuan btn','data-id':'yiyuan'}},
        {'img':'yinhang.png',x:6277,y:615,w:181,h:157,'attr':{'class':'dibiao yinhang btn','data-id':'yinhang'}},
        {'img':'gouwuzhongxin.png',x:7608,y:436,w:373,h:171,'attr':{'class':'dibiao gouwuzhongxin btn','data-id':'gouwuzhongxin'}},
        {'img':'changfang.png',x:9131,y:360,w:373,h:164,'attr':{'class':'dibiao changfang btn','data-id':'changfang'}},
        {'img':'jingqu.png',x:10615,y:294,w:189,h:147,'attr':{'class':'dibiao jingqu btn','data-id':'jingqu'}},
        {'img':'ditie.png',x:11240,y:740,w:199,h:156,'attr':{'class':'dibiao ditie btn','data-id':'ditie'}},
        //地标标识
        {'img':'dibiaobiaoshi.png',x:1595,y:755,'attr':{'class':'dibiaobiaoshi btn','data-id':'huiyi'}},
        {'img':'dibiaobiaoshi.png',x:2786,y:1147,'attr':{'class':'dibiaobiaoshi btn','data-id':'zhongxiaoxue'}},
        {'img':'dibiaobiaoshi.png',x:4246,y:853,'attr':{'class':'dibiaobiaoshi btn','data-id':'daxue'}},
        {'img':'dibiaobiaoshi.png',x:5295,y:821,'attr':{'class':'dibiaobiaoshi btn','data-id':'yiyuan'}},
        {'img':'dibiaobiaoshi.png',x:6067,y:543,'attr':{'class':'dibiaobiaoshi btn','data-id':'yinhang'}},
        {'img':'dibiaobiaoshi.png',x:7379,y:410,'attr':{'class':'dibiaobiaoshi btn','data-id':'gouwuzhongxin'}},
        {'img':'dibiaobiaoshi.png',x:9000,y:319,'attr':{'class':'dibiaobiaoshi btn','data-id':'changfang'}},
        {'img':'dibiaobiaoshi.png',x:10412,y:234,'attr':{'class':'dibiaobiaoshi btn','data-id':'jingqu'}},
        {'img':'dibiaobiaoshi.png',x:11046,y:698,'attr':{'class':'dibiaobiaoshi btn','data-id':'ditie'}},
        //大飞机
        {'img':'anli_dafeiji.png',x:3387,y:328,w:1467,h:550,'attr':{'class':'dafeiji btn','data-id':'jichang'}},
        {'img':'dibiaobiaoshi.png',x:3587,y:30,'attr':{'class':'dibiaobiaoshi btn','data-id':'jichang'}},
        {"img":"jichang.png","x":3780,"y":110,w:400,h:368,"attr":{"class":"jichang btn",'data-id':'jichang'},},
        //大楼灯
        {x:1102,y:2144,w:10,h:10,'attr':{'class':'daloudeng deng1'}},
        {x:1152,y:2144,w:10,h:10,'attr':{'class':'daloudeng deng2'}},
        {x:1172,y:2144,w:10,h:10,'attr':{'class':'daloudeng deng8'}},
        {x:1192,y:2144,w:10,h:10,'attr':{'class':'daloudeng deng3'}},
        {x:1249,y:2144,w:10,h:10,'attr':{'class':'daloudeng deng2'}},
        {x:1269,y:2144,w:10,h:10,'attr':{'class':'daloudeng deng5'}},
        {x:1289,y:2144,w:10,h:10,'attr':{'class':'daloudeng deng6'}},
        {x:1331,y:2144,w:10,h:10,'attr':{'class':'daloudeng deng9'}},
        {x:1352,y:2144,w:10,h:10,'attr':{'class':'daloudeng deng4'}},

        {x:1638,y:2207,w:10,h:10,'attr':{'class':'daloudeng deng1'}},
        {x:1679,y:2207,w:10,h:10,'attr':{'class':'daloudeng deng3'}},
        {x:1702,y:2207,w:10,h:10,'attr':{'class':'daloudeng deng4'}},
        {x:1638,y:2229,w:10,h:10,'attr':{'class':'daloudeng deng5'}},
        {x:1679,y:2229,w:10,h:10,'attr':{'class':'daloudeng deng1'}},
        {x:1702,y:2229,w:10,h:10,'attr':{'class':'daloudeng deng4'}},

        {x:1991,y:1882,w:12,h:14,'attr':{'class':'daloudeng deng10'}},
        {x:2035,y:1882,w:12,h:14,'attr':{'class':'daloudeng deng3'}},
        {x:1991,y:1918,w:12,h:14,'attr':{'class':'daloudeng deng4'}},
        {x:2035,y:1918,w:12,h:14,'attr':{'class':'daloudeng deng7'}},
        {x:2035,y:1953,w:12,h:15,'attr':{'class':'daloudeng deng5'}},

        {x:1988,y:1999,w:38,h:30,'attr':{'class':'daloudeng deng6'}},
        {x:2037,y:1999,w:38,h:30,'attr':{'class':'daloudeng deng4'}},
        {x:2080,y:1999,w:47,h:30,'attr':{'class':'daloudeng deng7'}},

        {x:2357,y:1588,w:75,h:6,'attr':{'class':'daloudeng deng1'}},
        {x:2357,y:1604,w:75,h:6,'attr':{'class':'daloudeng deng2'}},
        {x:2357,y:1680,w:75,h:6,'attr':{'class':'daloudeng deng6'}},
        {x:2357,y:1698,w:75,h:6,'attr':{'class':'daloudeng deng3'}},
        {x:2365,y:1767,w:79,h:6,'attr':{'class':'daloudeng deng8'}},
        {x:2365,y:1826,w:79,h:6,'attr':{'class':'daloudeng deng4'}},
        {x:2365,y:1847,w:79,h:6,'attr':{'class':'daloudeng deng2'}},
        {x:2365,y:1868,w:79,h:6,'attr':{'class':'daloudeng deng5'}},
        {x:2365,y:1931,w:79,h:6,'attr':{'class':'daloudeng deng6'}},
        {x:2365,y:1952,w:79,h:6,'attr':{'class':'daloudeng deng2'}},

        {x:1488,y:1655,w:13,h:13,'attr':{'class':'daloudeng deng3'}},
        {x:1488,y:1699,w:13,h:13,'attr':{'class':'daloudeng deng5'}},

        {x:1482,y:1863,w:82,h:12,'attr':{'class':'daloudeng deng1'}},
        {x:1482,y:1889,w:82,h:12,'attr':{'class':'daloudeng deng7'}},
        {x:1482,y:1915,w:82,h:12,'attr':{'class':'daloudeng deng10'}},

        {x:2845,y:2269,w:28,h:28,'attr':{'class':'daloudeng deng9'}},
        {x:2845,y:2310,w:28,h:28,'attr':{'class':'daloudeng deng6'}},
        {x:2880,y:2310,w:28,h:28,'attr':{'class':'daloudeng deng4'}},

        {x:2903,y:2071,w:69,h:12,'attr':{'class':'daloudeng deng2'}},
        {x:2903,y:2143,w:69,h:12,'attr':{'class':'daloudeng deng6'}},
        {x:2903,y:2206,w:69,h:12,'attr':{'class':'daloudeng deng2'}},

        {x:3092,y:2154,w:32,h:8,'attr':{'class':'daloudeng deng7'}},
        {x:3134,y:2154,w:32,h:8,'attr':{'class':'daloudeng deng9'}},
        {x:3177,y:2154,w:32,h:8,'attr':{'class':'daloudeng deng2'}},
        {x:3219,y:2154,w:32,h:8,'attr':{'class':'daloudeng deng4'}},
        {x:3260,y:2154,w:32,h:8,'attr':{'class':'daloudeng deng7'}},
        {x:3092,y:2174,w:32,h:8,'attr':{'class':'daloudeng deng2'}},
        {x:3134,y:2174,w:32,h:8,'attr':{'class':'daloudeng deng3'}},
        {x:3092,y:2209,w:32,h:8,'attr':{'class':'daloudeng deng1'}},
        {x:3134,y:2209,w:32,h:8,'attr':{'class':'daloudeng deng10'}},
        {x:3260,y:2293,w:32,h:8,'attr':{'class':'daloudeng deng1'}},
        {x:3302,y:2293,w:32,h:8,'attr':{'class':'daloudeng deng3'}},
        {x:3387,y:2293,w:32,h:8,'attr':{'class':'daloudeng deng5'}},
        {x:3429,y:2293,w:32,h:8,'attr':{'class':'daloudeng deng10'}},
        {x:3387,y:2332,w:32,h:8,'attr':{'class':'daloudeng deng1'}},
        {x:3429,y:2332,w:32,h:8,'attr':{'class':'daloudeng deng2'}},
        {x:3429,y:2231,w:32,h:8,'attr':{'class':'daloudeng deng5'}},

        {x:1714,y:1588,w:8,h:450,'attr':{'class':'daloudeng deng6'}},
        {x:1735,y:1588,w:8,h:450,'attr':{'class':'daloudeng deng7'}},
        {x:1789,y:1588,w:8,h:518,'attr':{'class':'daloudeng deng3'}},
        {x:1809,y:1588,w:8,h:518,'attr':{'class':'daloudeng deng5'}},

        {x:3827,y:2280,w:354,h:8,'attr':{'class':'daloudeng deng8'}},
        {x:4231,y:2280,w:11,h:8,'attr':{'class':'daloudeng deng10'}},

        {x:3961,y:1858,w:11,h:11,'attr':{'class':'daloudeng deng1'}},
        {x:3985,y:1795,w:11,h:11,'attr':{'class':'daloudeng deng3'}},
        {x:4029,y:1837,w:11,h:11,'attr':{'class':'daloudeng deng5'}},
        {x:4029,y:1858,w:11,h:11,'attr':{'class':'daloudeng deng2'}},

        {x:4141,y:1902,w:341,h:12,'attr':{'class':'daloudeng deng6'}},
        {x:4222,y:1841,w:37,h:10,'attr':{'class':'daloudeng deng8'}},
        {x:4467,y:1757,w:37,h:10,'attr':{'class':'daloudeng deng3'}},
        {x:4467,y:1820,w:37,h:10,'attr':{'class':'daloudeng deng2'}},
        {x:4467,y:1861,w:37,h:10,'attr':{'class':'daloudeng deng1'}},

        {x:4596,y:1806,w:80,h:11,'attr':{'class':'daloudeng deng9'}},
        {x:4596,y:1869,w:188,h:11,'attr':{'class':'daloudeng deng6'}},

        {x:4861,y:1789,w:13,h:17,'attr':{'class':'daloudeng deng5'}},
        {x:4937,y:1724,w:13,h:17,'attr':{'class':'daloudeng deng8'}},

        {x:5083,y:1905,w:15,h:8,'attr':{'class':'daloudeng deng2'}},
        {x:5083,y:1959,w:15,h:8,'attr':{'class':'daloudeng deng4'}},
        {x:5138,y:1994,w:15,h:8,'attr':{'class':'daloudeng deng10'}},
        {x:5194,y:1885,w:15,h:8,'attr':{'class':'daloudeng deng8'}},

        {x:5513,y:1754,w:19,h:10,'attr':{'class':'daloudeng deng2'}},
        {x:5560,y:1696,w:19,h:10,'attr':{'class':'daloudeng deng7'}},
        {x:5606,y:1780,w:19,h:10,'attr':{'class':'daloudeng deng10'}},
        {x:5685,y:1589,w:19,h:10,'attr':{'class':'daloudeng deng2'}},
        {x:5682,y:1589,w:19,h:10,'attr':{'class':'daloudeng deng3'}},

        {x:5716,y:2069,w:18,h:10,'attr':{'class':'daloudeng deng2'}},
        {x:5844,y:1734,w:18,h:10,'attr':{'class':'daloudeng deng1'}},
        {x:5869,y:1771,w:16,h:10,'attr':{'class':'daloudeng deng7'}},
        {x:5910,y:1898,w:25,h:8,'attr':{'class':'daloudeng deng5'}},
        {x:5912,y:2216,w:63,h:8,'attr':{'class':'daloudeng deng3'}},
        {x:5337,y:2307,w:305,h:10,'attr':{'class':'daloudeng deng1'}},
        {x:6593,y:1045,w:67,h:10,'attr':{'class':'daloudeng deng4'}},
        {x:6570,y:1152,w:50,h:10,'attr':{'class':'daloudeng deng7'}},
        {x:6597,y:1376,w:19,h:10,'attr':{'class':'daloudeng deng9'}},
        {x:6628,y:1514,w:19,h:10,'attr':{'class':'daloudeng deng10'}},
        {x:6477,y:1452,w:18,h:10,'attr':{'class':'daloudeng deng3'}},
        {x:6712,y:2148,w:73,h:18,'attr':{'class':'daloudeng deng4'}},
        {x:6712,y:2203,w:73,h:18,'attr':{'class':'daloudeng deng3'}},
        {x:7329,y:1333,w:86,h:10,'attr':{'class':'daloudeng deng1'}},
        {x:7329,y:1417,w:86,h:10,'attr':{'class':'daloudeng deng10'}},
        {x:7329,y:1530,w:86,h:10,'attr':{'class':'daloudeng deng8'}},
        {x:7313,y:1610,w:93,h:10,'attr':{'class':'daloudeng deng7'}},
        {x:7313,y:1676,w:93,h:10,'attr':{'class':'daloudeng deng3'}},
        {x:7313,y:1703,w:93,h:10,'attr':{'class':'daloudeng deng4'}},
        {x:7313,y:1724,w:93,h:10,'attr':{'class':'daloudeng deng8'}},
        {x:7313,y:1799,w:93,h:10,'attr':{'class':'daloudeng deng9'}},
        {x:7313,y:1822,w:93,h:10,'attr':{'class':'daloudeng deng10'}},
        {x:8416,y:1477,w:16,h:16,'attr':{'class':'daloudeng deng4'}},
        {x:8416,y:1530,w:16,h:16,'attr':{'class':'daloudeng deng8'}},
        {x:8165,y:2118,w:15,h:15,'attr':{'class':'daloudeng deng7'}},
        {x:8165,y:2144,w:15,h:15,'attr':{'class':'daloudeng deng4'}},
        {x:8189,y:2118,w:15,h:15,'attr':{'class':'daloudeng deng2'}},
        {x:8189,y:2144,w:15,h:15,'attr':{'class':'daloudeng deng3'}},
        {x:8238,y:2120,w:15,h:15,'attr':{'class':'daloudeng deng1'}},
        {x:8238,y:2145,w:15,h:15,'attr':{'class':'daloudeng deng5'}},
        {x:8572,y:2023,w:15,h:15,'attr':{'class':'daloudeng deng10'}},
        {x:8596,y:2023,w:15,h:15,'attr':{'class':'daloudeng deng8'}},
        {x:8643,y:2023,w:15,h:15,'attr':{'class':'daloudeng deng1'}},
        {x:8667,y:2023,w:15,h:15,'attr':{'class':'daloudeng deng4'}},
        {x:8689,y:2023,w:15,h:15,'attr':{'class':'daloudeng deng3'}},
        {x:8756,y:2023,w:15,h:15,'attr':{'class':'daloudeng deng10'}},
        {x:8780,y:2023,w:15,h:15,'attr':{'class':'daloudeng deng8'}},
        {x:9415,y:1651,w:171,h:16,'attr':{'class':'daloudeng deng7'}},
        {x:9423,y:1807,w:50,h:16,'attr':{'class':'daloudeng deng5'}},
        {x:9525,y:1807,w:50,h:16,'attr':{'class':'daloudeng deng3'}},
        {x:9697,y:1570,w:51,h:16,'attr':{'class':'daloudeng deng7'}},
        {x:8848,y:1370,w:18,h:18,'attr':{'class':'daloudeng deng1'}},
        {x:9840,y:1792,w:30,h:10,'attr':{'class':'daloudeng deng9'}},
        {x:10290,y:1144,w:35,h:7,'attr':{'class':'daloudeng deng2'}},
        {x:10295,y:1427,w:18,h:18,'attr':{'class':'daloudeng deng3'}},
        {x:10324,y:1427,w:18,h:18,'attr':{'class':'daloudeng deng6'}},
        {x:10353,y:1427,w:18,h:18,'attr':{'class':'daloudeng deng7'}},
        {x:10382,y:1427,w:18,h:18,'attr':{'class':'daloudeng deng8'}},
        {x:10435,y:1427,w:18,h:18,'attr':{'class':'daloudeng deng5'}},
        {x:10465,y:1427,w:18,h:18,'attr':{'class':'daloudeng deng8'}},
        {x:10495,y:1427,w:18,h:18,'attr':{'class':'daloudeng deng6'}},
        {x:10437,y:1602,w:18,h:18,'attr':{'class':'daloudeng deng4'}},
        {x:10495,y:1516,w:18,h:18,'attr':{'class':'daloudeng deng2'}},
        {x:10415,y:1795,w:27,h:15,'attr':{'class':'daloudeng deng1'}},
        {x:10477,y:1765,w:27,h:15,'attr':{'class':'daloudeng deng10'}},
        {x:10600,y:1764,w:27,h:15,'attr':{'class':'daloudeng deng4'}},
        {x:10663,y:1764,w:27,h:15,'attr':{'class':'daloudeng deng3'}},
        {x:10620,y:1690,w:178,h:14,'attr':{'class':'daloudeng deng4'}},
        {x:10677,y:1408,w:75,h:7,'attr':{'class':'daloudeng deng5'}},
        {x:10677,y:1426,w:75,h:7,'attr':{'class':'daloudeng deng7'}},
        {x:10708,y:1016,w:15,h:15,'attr':{'class':'daloudeng deng2'}},
        {x:10786,y:1228,w:349,h:10,'attr':{'class':'daloudeng deng1'}},
        {x:11178,y:1228,w:230,h:10,'attr':{'class':'daloudeng deng4'}},
        {x:11054,y:1139,w:18,h:18,'attr':{'class':'daloudeng deng6'}},
        {x:10786,y:1289,w:54,h:10,'attr':{'class':'daloudeng deng8'}},
        {x:10849,y:1289,w:54,h:10,'attr':{'class':'daloudeng deng9'}},
        {x:10911,y:1289,w:54,h:10,'attr':{'class':'daloudeng deng10'}},
        {x:10972,y:1289,w:54,h:10,'attr':{'class':'daloudeng deng3'}},
        {x:10786,y:1344,w:54,h:10,'attr':{'class':'daloudeng deng2'}},
        {x:10911,y:1396,w:54,h:10,'attr':{'class':'daloudeng deng3'}},
        {x:10911,y:1445,w:54,h:10,'attr':{'class':'daloudeng deng1'}},
        {x:10911,y:1495,w:54,h:10,'attr':{'class':'daloudeng deng5'}},
        {x:10911,y:1344,w:54,h:10,'attr':{'class':'daloudeng deng8'}},
        {x:11310,y:1370,w:100,h:10,'attr':{'class':'daloudeng deng10'}},
        {x:11442,y:1303,w:18,h:18,'attr':{'class':'daloudeng deng1'}},
        {x:11477,y:1303,w:18,h:18,'attr':{'class':'daloudeng deng2'}},
        {x:11515,y:1303,w:18,h:18,'attr':{'class':'daloudeng deng4'}},
        {x:11515,y:1527,w:18,h:18,'attr':{'class':'daloudeng deng8'}},
        {x:11600,y:1466,w:18,h:18,'attr':{'class':'daloudeng deng7'}},
        {x:11638,y:1463,w:18,h:18,'attr':{'class':'daloudeng deng9'}},
        {x:11650,y:1827,w:31,h:15,'attr':{'class':'daloudeng deng10'}},
        {x:11650,y:1921,w:31,h:15,'attr':{'class':'daloudeng deng4'}},
        {x:11710,y:1921,w:31,h:15,'attr':{'class':'daloudeng deng2'}},
        {x:11710,y:2204,w:31,h:15,'attr':{'class':'daloudeng deng4'}},
        {x:11745,y:1567,w:55,h:12,'attr':{'class':'daloudeng deng1'}},
        {x:9831,y:2262,w:123,h:10,'attr':{'class':'daloudeng deng8'}},
        //小飞机
        {'img':'xiaofeiji1.png',x:8068,y:256,'attr':{'class':'xiaofeiji1'}},
        {'img':'xiaofeiji2.png',x:2091,y:484,'attr':{'class':'xiaofeiji2'}},
        //摩天轮
        {'img':'anli_motianlun.png',x:2759,y:1145,'attr':{'class':'motianlun'}},
        //中小学建筑
        {'img':'anli_zxxjianzhu.png',x:2700,y:1842,'attr':{'class':'zxxjianzhu'}},

    ]
});

sceneslist.push({
    'box':$('.scene-anlichild'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/anlichild/',                  /*图片根目录*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/

        { isbg:true,w:4742,h:2667,css:{'background':"url('img/anlibox/bg.png')"},"attr":{"class":"bg"}},
        //会议
        /*{"img":"huiyi_yulan.png","isbg":true},*/
        /*{ "img":"_bg.png",isbg:true,w:4742,h:2667,"attr":{"class":"bg"}},*/
        {"x":1376,"y":212,"w":2000,"h":280,"attr":{"class":"huiyi opacity"}},
        {"x":304,"y":772,"w":1160,"h":1420,"attr":{"class":"huiyi opacity"}},
        {"x":3272,"y":772,"w":1160,"h":1420,"attr":{"class":"huiyi opacity"}},
        {"x":1792,"y":772,"w":1160,"h":1420,"attr":{"class":"huiyi opacity"}},
        {"img":"huiyibg.png","attr":{"class":"huiyi"}},
        {"img":"chakanbtn.png","x":802,"y":2000,"attr":{"class":"huiyibtn1 huiyi btn"}},
        {"img":"chakanbtn.png","x":2282,"y":1996,"attr":{"class":"huiyibtn2 huiyi btn"}},
        {"img":"chakanbtn.png","x":3742,"y":1984,"attr":{"class":"huiyibtn2 huiyi btn"}},
       //中小学 zhongxiaoxue
       // {"img":"zhongxiaoxue_yulan.png","attr":{"class":"zhongxiaoxue"},"isbg":true},
        {"x":1376,"y":212,"w":2000,"h":280,"attr":{"class":"zhongxiaoxue opacity"}},
        {"x":316,"y":700,"w":1920,"h":1560,"attr":{"class":"zhongxiaoxue opacity"}},
        {"x":2504,"y":700,"w":1920,"h":1560,"attr":{"class":"zhongxiaoxue opacity"}},
        {"img":"zhongxiaoxuebg.png","attr":{"class":"zhongxiaoxue"}},
        {"img":"chakanbtn.png","x":1530,"y":2044,"attr":{"class":"zhongxiaoxuebtn1 zhongxiaoxue btn"}},
        {"img":"chakanbtn.png","x":3714,"y":2040,"attr":{"class":"zhongxiaoxuebtn2 zhongxiaoxue btn"}},
        //大学 daxue
        //{"img":"daxue_yulan.png","attr":{"class":"daxue"},"isbg":true},
        {"x":1376,"y":212,"w":2000,"h":280,"attr":{"class":"daxue opacity"}},
        {"x":316,"y":700,"w":1920,"h":1560,"attr":{"class":"daxue opacity"}},
        {"x":2504,"y":700,"w":1920,"h":1560,"attr":{"class":"daxue opacity"}},
        {"img":"daxuebg.png","attr":{"class":"daxue"}},
        {"img":"chakanbtn.png","x":1522,"y":2028,"attr":{"class":"daxuebtn1 daxue btn"}},
        {"img":"chakanbtn.png","x":3730,"y":2032,"attr":{"class":"daxuebtn2 daxue btn"}},
        //医院 yiyuan
        {"x":1376,"y":212,"w":2000,"h":280,"attr":{"class":"yiyuan opacity"}},
        {"x":324,"y":704,"w":1920,"h":1560,"attr":{"class":"yiyuan opacity"}},
        {"x":2508,"y":704,"w":1920,"h":1560,"attr":{"class":"yiyuan opacity"}},
        {"img":"yiyuanbg.png","x":4,"attr":{"class":"yiyuan"}},
       //银行 yinhang
       // {"img":"yinhang_yulan.png","attr":{"class":"yinhang"},"isbg":true},
        {"x":1376,"y":212,"w":2000,"h":280,"attr":{"class":"yinhang opacity"}},
        {"x":316,"y":700,"w":1920,"h":1560,"attr":{"class":"yinhang opacity"}},
        {"x":2504,"y":700,"w":1920,"h":1560,"attr":{"class":"yinhang opacity"}},
        {"img":"yinhangbg.png","attr":{"class":"yinhang"}},
        {"img":"chakanbtn.png","x":1538,"y":2048,"attr":{"class":"yinhangbtn1 yinhang btn"}},
        {"img":"chakanbtn.png","x":3738,"y":2036,"attr":{"class":"yinhangbtn2 yinhang btn"}},
        //购物 gouwuzhongxin
        //{"img":"gouwuzhongxin_yulan.png","attr":{"class":"gouwuzhongxin"},"isbg":true},
        {"x":1376,"y":212,"w":2000,"h":280,"attr":{"class":"gouwuzhongxin opacity"}},
        {"x":316,"y":700,"w":1920,"h":1560,"attr":{"class":"gouwuzhongxin opacity"}},
        {"x":2504,"y":700,"w":1920,"h":1560,"attr":{"class":"gouwuzhongxin opacity"}},
        {"img":"gouwuzhongxinbg.png","attr":{"class":"gouwuzhongxin"}},
        {"img":"chakanbtn.png","x":1550,"y":2036,"attr":{"class":"gouwuzhongxinbtn1 gouwuzhongxin btn"}},
        {"img":"chakanbtn.png","x":3722,"y":2032,"attr":{"class":"gouwuzhongxinbtn1 gouwuzhongxin btn"}},
        //厂房 changfang
        //{"img":"changfang_yulan.png","attr":{"class":"changfang"},"isbg":true},
        {"x":1376,"y":212,"w":2000,"h":280,"attr":{"class":"changfang opacity"}},
        {"x":316,"y":700,"w":1920,"h":1560,"attr":{"class":"changfang opacity"}},
        {"x":2504,"y":700,"w":1920,"h":1560,"attr":{"class":"changfang opacity"}},
        {"img":"changfangbg.png","attr":{"class":"changfang"}},
        {"img":"chakanbtn.png","x":1550,"y":2036,"attr":{"class":"changfangbtn1 changfang btn"}},
        {"img":"chakanbtn.png","x":3722,"y":2032,"attr":{"class":"changfangbtn2 changfang btn"}},
        //景区 jingqu
        //{"img":"jqbg.jpg","attr":{"class":"jingqu"},"isbg":true},
        {"x":800,"y":700,"w":3146,"h":1570,"attr":{"class":"jingqu opacity"}},
        {"x":1376,"y":212,"w":2000,"h":280,"attr":{"class":"jingqu opacity"}},
        {"img":"jingqubg.png","attr":{"class":"jingqu"}},
         //地铁 ditie
        //{"img":"ditie_yulan.png","attr":{"class":"ditie"},"isbg":true},
        {"x":800,"y":700,"w":3146,"h":1570,"attr":{"class":"ditie opacity"}},
        {"x":1376,"y":212,"w":2000,"h":280,"attr":{"class":"ditie opacity"}},
        {"img":"ditiebg.png","attr":{"class":"ditie"}},
        {"img":"chakanbtn.png","x":3236,"y":2040,"attr":{"class":"ditiebtn1 ditie btn"}},
        //机场 jichang
        //{"img":"jichang_yulan.png","attr":{"class":"jichang"},"isbg":true},
        {"x":800,"y":700,"w":3146,"h":1570,"attr":{"class":"jichang opacity"}},
        {"x":1376,"y":212,"w":2000,"h":280,"attr":{"class":"jichang opacity"}},
        {"img":"jichangbg.png","attr":{"class":"jichang"}},

        {"x":128,"y":132,w:600,h:138,css:{'background':"url('img/yinyue/fanhui.png')"},"attr":{"class":"fanhui btn bg"}},
    ]
})

initfunlist.push(function(){
    var anli_box = $('.scene-anli');
    var left;
    if (!scene_anli.debug) {
        left = -$.size('w') * 0.3
        anli_box.css('left', left);
    }
    var pos,moveTo,limit = 1024,setlimit,cross_screen = $.isPhone && $.cross_screen;
    if(cross_screen) {
        if (!left) left = 0;
        pos = {x: 0, y: left};
        setlimit = function () {
            if (anli_box.is('.show')) {
                limit = $('.scene-anli .bg').height() - $.size('w');
            }
        }
        moveTo = function (p) {
            if(p.y){
                var d = (pos.y - p.y).toFixed(0);
                if (d != 0) {
                    if (p.y > 0) p.y = 0;
                    else if (limit + p.y < 0) p.y = -limit;
                    anli_box.css('left', p.y);
                    pos.y = p.y;
                    var s = -pos.y / limit;
                    var width = parseInt($('.scene-yinyue .scroll').css('width')) - parseInt($('.scene-yinyue .scroll_index').css('width'));
                    var left = parseInt($('.scene-yinyue .scroll').css('left')) + width * 0.0185;
                    var val = left + width * s * 0.963;
                    $('.scene-yinyue .scroll_index').css('left', val.toFixed(0)+"px");
                }
            }
        }
    }else {
        pos = {x: parseFloat(anli_box.css('left')), y: 0};
        setlimit = function () {
            limit = parseInt($('.scene-anli .bg').css('width')) - $.size('w');
        }
        moveTo = function (p) {
            if(p.x){
                var d = (pos.x - p.x).toFixed(0);
                if (d != 0) {
                    if (p.x > 0) p.x = 0;
                    else if (limit + p.x < 0) p.x = -limit;
                    anli_box.css('left', p.x);
                    pos.x = p.x;
                    var s = -pos.x / limit;
                    var width = parseInt($('.scene-yinyue .scroll').css('width')) - parseInt($('.scene-yinyue .scroll_index').css('width'));
                    var left = parseInt($('.scene-yinyue .scroll').css('left')) + width * 0.0185;
                    var val = left + width * s * 0.963;
                    $('.scene-yinyue .scroll_index').css('left', val.toFixed(0)+"px");
                }
            }
        }
    }
    var isTouch;
    if ($.isPhone) {
        var startPos;
        //触摸事件自定义
        anli_box.one('touchstart',setlimit);
        anli_box.on('touchstart', function (event) {
            if(!isDrop){
                var touch = event.targetTouches[0];     //touches数组对象获得屏幕上所有的touch，取第一个touch
                startPos = {x: pos.x-touch.pageX, y: pos.y-touch.pageY };    //取第一个touch的坐标值
                anli_box.on('touchmove',touchmove);
                anli_box.one('touchend',touchend);
                isTouch = true;
            }
        });
        function touchmove(event) {
            if(!isDrop){
                if (event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
                var touch = event.targetTouches[0];
                var tmp = {x: touch.pageX + startPos.x, y: touch.pageY + startPos.y};
                event.preventDefault();      //阻止触摸事件的默认行为，即阻止滚屏
                moveTo(tmp);
            }else{
                anli_box.off('touchmove',touchmove);
            }
        }
        function touchend() {
            //解绑事件
            isTouch = false;
            anli_box.off('touchmove',touchmove);
        }
        var isDrop = false;
        $('.scene-anli .scroll_index').on('touchstart', function (event){
            anli_box.on('touchmove', dropmove);
            anli_box.one('touchend', dropend);
            isDrop = true;
        })
        function dropmove(event){
            if (event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
            var touch = event.targetTouches[0];
            var left = parseInt($('.scene-anli .scroll').css('left'));
            var width = parseInt($('.scene-anli .scroll').css('width')) - parseInt($('.scene-anli .scroll_index').css('width')) + 1;
            var s = (touch.pageY - left)/width;
            moveTo({y:-limit * s});
        }
        function dropend(){
            anli_box.off('touchmove', dropmove);
            isDrop = false;
        }
        /*重力感应*/
        try {
            if (window.DeviceOrientationEvent && !scene_anli.debug) {
                var alpha;
                window.addEventListener("deviceorientation", orientationHandler, false);
                function orientationHandler(event) {
                    if (anli_box.is('.show') && !isTouch) {
                        var change = limit / 200;
                        var _alpha = event.alpha;
                        if (_alpha) {
                            var _alpha = _alpha.toFixed(1);
                            if (alpha && _alpha) {
                                var tmp = _alpha - alpha;
                                if (tmp > 180) tmp -= 360;
                                else if (tmp < -180) tmp += 360;
                                moveTo({y:pos.y + tmp * change})
                            }
                        }
                        alpha = _alpha;
                    }
                }
            }
        }
        catch (e) {}
    }
    else{
        var startPos;
        //触摸事件自定义
        $('body').on('mousemove', function mousemove(event) {
            if(anli_box.is('.show') && event.pageY/ win.height() > 0.6){
                moveTo({x: -event.pageX / $.size('w') * limit});
            }
        });
    }

    win.resize(function(){
        setlimit();
        if(anli_box){
            var left = anli_box.css('left');
            if (left > 0) left = 0;
            else if (limit + left < 0) left = -limit;
            anli_box.css('left', left);
        }
    });
    setlimit();

    //给地标绑定事件
    $('.scene-anli .btn').pitTouch(function(){
        console.log("进入地标场景");
        var key = $(this).data('id');
        $('.scene-anli').removeClass('show');
        $('.scene-anlichild').addClass('show').attr('type',key);
        $('.scene-yinyue').attr('type','');
    });
    //OK
    $('.scene-anli .btn_ok').pitTouch(function() {
        console.log("关闭提醒");
        $('.scene-anli .shuoming_bg').remove();
        $('.scene-anli .shuoming').remove();
        $('.scene-anli .btn_ok').remove();
    })
    //返回
    $('.scene-anlichild .fanhui').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('返回anli');
            $('.scene-anlichild').removeClass('show');
            $('.scene-anli').addClass('show');
            $('.scene-yinyue').attr('type','anli');
        },300)
    })
    //大学
    $('.scene-anlichild .daxuebtn1').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://h5.baomitu.com/app/8b35b.html";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    $('.scene-anlichild .daxuebtn2').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://h5.baomitu.com/app/64758.html";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    //厂房
    $('.scene-anlichild .changfangbtn1').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://h5.baomitu.com/app/9adcc.html#rd";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    $('.scene-anlichild .changfangbtn2').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://h5.baomitu.com/app/Ahff3Dwv.html?iframe=1";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    //商场
    $('.scene-anlichild .gouwuzhongxinbtn1').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://mp.weixin.qq.com/s?__biz=MjM5NzU5MDM4Mw==&mid=208874836&idx=1&sn=011377cca937fc8d37a8190593d4e116&scene=4#wechat_redirect";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    $('.scene-anlichild .gouwuzhongxinbtn2').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://mp.weixin.qq.com/s?__biz=MjM5NzU5MDM4Mw==&mid=207133181&idx=1&sn=cf31549d77086695cd8d4b220de6500f&scene=4#wechat_redirect";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    //中小学
    $('.scene-anlichild .zhongxiaoxuebtn1').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://mp.weixin.qq.com/s?__biz=MjM5NzU5MDM4Mw==&mid=209576558&idx=1&sn=636d7f6bfcdebf027a15ea45530a1584&scene=4#wechat_redirect";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    $('.scene-anlichild .zhongxiaoxuebtn2').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://mp.weixin.qq.com/s?__biz=MjM5NzU5MDM4Mw==&mid=209639794&idx=2&sn=bd39c03d7557ccb37320abbb85286db0&scene=4#wechat_redirect";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    //会议中心
    $('.scene-anlichild .huiyibtn1').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://mp.weixin.qq.com/s?__biz=MjM5NzU5MDM4Mw==&mid=209134459&idx=1&sn=c115e9221fca9c9e1aa30d88864fe035&scene=1&srcid=1116pNzbRgB8E4lhKJWnboAB#wechat_redirect";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    $('.scene-anlichild .huiyibtn2').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://mp.weixin.qq.com/s?__biz=MjM5NzU5MDM4Mw==&mid=400128057&idx=1&sn=67997a2064b3dcfd762a3622f7d91401&scene=1&srcid=1116mNSTbEMoSW0rdvQeF2j6#wechat_redirect";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    $('.scene-anlichild .huiyibtn3').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://mp.weixin.qq.com/s?__biz=MjM5NzU5MDM4Mw==&mid=402020673&idx=1&sn=c6abcfd405b4dbb917c3b1fc5dbad197&scene=1&srcid=1125E6M6eTtgfzbp03OihUoT#wechat_redirect";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    //地铁
    $('.scene-anlichild .ditiebtn1').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://mp.weixin.qq.com/s?__biz=MjM5NzU5MDM4Mw==&mid=205224722&idx=1&sn=f585da53960e7d9288ffcbbb103af107&scene=1&srcid=0914kZF63w9QucA7D7hZTOZY#wechat_redirect";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    //银行
    $('.scene-anlichild .yinhangbtn1').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://www.ruijie.com.cn/al/jr-wlan/38670";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })
    $('.scene-anlichild .yinhangbtn2').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('跳转');
            var url = "http://www.ruijie.com.cn/al/jr-wlan/38870";
            if($.isPhone){
                location.href = url;
            }else{
                window.open(url);
            }
        },300)
    })

    $('.scene-anli .fanhui_to_index').pitTouch(function () {
        console.log("返回首页");
        $('.scene-anli').removeClass('show');
        $('.scene-index').show();
        window.setTimeout(function () {
            anli_box.trigger('touchend')
        }, 500);
    })

})