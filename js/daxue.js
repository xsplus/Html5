/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene-daxue'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/daxue/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"changjing.png","x":2524,"y":704,"attr":{"class":"layer"}},
        {"img":"wenzi1.png","x":760,"y":632,"attr":{"class":"wenti"}},
        {"img":"wenzi2.png","x":2708,"y":884,"attr":{"class":"wenti"}},
        {"img":"xuanze.png","x":764,"y":1080,"attr":{"class":"wenti"}},
        {"img":"xuanxiang_btn.png","x":749,"y":1361,"attr":{"class":"btn btn1"}},
        {"img":"xuanxiang_btn.png","x":750,"y":1721,"attr":{"class":"btn btn2"}},
        {"img":"xuanxiang_btn.png","x":750,"y":2080,"attr":{"class":"btn strue"}},
        {"img":"xuanxiang1.png","x":808,"y":1556,"attr":{"class":"btn btn1"}},
        {"img":"xuanxiang2.png","x":812,"y":1916,"attr":{"class":"btn btn2"}},
        {"img":"xuanxiang3.png","x":811,"y":2284,"attr":{"class":"btn strue"}},
        {"img":"wenhao.png","x":3657,"y":1104,"attr":{"class":"wenhao"}},
        {"img":"wifi1.png","x":2880,"y":1284,"attr":{"class":"wifi1 wifi_1"}},
        {"img":"wifi2.png","x":2856,"y":1231,"attr":{"class":"wifi1 wifi_2"}},
        {"img":"wifi3.png","x":2826,"y":1162,"attr":{"class":"wifi1 wifi_3"}},
        {"img":"wifi4.png","x":2803,"y":1105,"attr":{"class":"wifi1 wifi_4"}},
        {"img":"gantanhao.png","x":2894,"y":1149,"attr":{"class":"wifi_5"}},
        {"img":"wifi1.png","x":4184,"y":1341,"attr":{"class":"wifi2 wifi_1"}},
        {"img":"wifi2.png","x":4148,"y":1274,"attr":{"class":"wifi2 wifi_2"}},
        {"img":"wifi3.png","x":4118,"y":1216,"attr":{"class":"wifi2 wifi_3"}},
        {"img":"wifi4.png","x":4078,"y":1167,"attr":{"class":"wifi2 wifi_4"}},
        {"img":"gantanhao.png","x":4191,"y":1217,"attr":{"class":"wifi_5"}},
        {"img":"nowenzi1.png","x":796,"y":648,"attr":{"class":"false1"}},
        {"img":"nowenzi2.png","x":2756,"y":888,"attr":{"class":"false1"}},
        {"img":"no2wenzi1.png","x":796,"y":664,"attr":{"class":"false2"}},
        {"img":"no2wenzi2.png","x":2716,"y":876,"attr":{"class":"false2"}},
        {"img":"dengpao.png","x":3713,"y":1106,"attr":{"class":"true dengpao"}},
        {"img":"erji1.png","x":3307,"y":1486,"attr":{"class":"true"}},
        {"img":"erji2.png","x":3964,"y":1460,"attr":{"class":"true"}},
        {"img":"cilun1.png","x":2940,"y":1308,"attr":{"class":"true cilun1"}},
        {"img":"cilun2.png","x":2871,"y":1125,"attr":{"class":"true cilun2"}},
        {"img":"cilun1.png","x":4211,"y":1282,"attr":{"class":"true cilun1"}},
        {"img":"cilun2.png","x":4141,"y":1089,"attr":{"class":"true cilun2"}},
        {"img":"kele.png","x":3436,"y":1692,"attr":{"class":"true"}},
        {"img":"yeswenzi1.png","x":792,"y":644,"attr":{"class":"true"}},
        {"img":"yeswenzi2.png","x":2760,"y":766,"attr":{"class":"true"}},
    ]
})

sceneslist.push({
    'box':$('.scene.scene-daxue'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/common/',          /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"next.png","x":1054,"y":1620,"attr":{"class":"next"}},
        {"img":"ku.png","x":1968,"y":1140,"attr":{"class":"false"}},
        {"img":"weibiao.png","x":1893,"y":390,"attr":{"class":"true"}},
        {"img":"lingjiang.png","x":814,"y":1520,w:860,h:792,"attr":{"class":"lingjiang"}},
    ]
})

initfunlist.push(function(){
    $('.scene-daxue .btn1').pitTouch(function(){
        $('.scene-daxue .btn1').addClass('btndoudong');
        $('.scene.scene-daxue').removeClass('true false2').addClass('false1');
    });
    $('.scene-daxue .btn2').pitTouch(function(){
        $('.scene-daxue .btn2').addClass('btndoudong');
        $('.scene.scene-daxue').removeClass('false1 true').addClass('false2');
    });
})