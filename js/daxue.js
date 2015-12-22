/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-daxue'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/daxue/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"changjing.png","x":2104,"y":780,"attr":{"class":"layer"}},
        {"img":"wenzi1.png","x":656,"y":680,"attr":{"class":"wenti"}},
        {"img":"wenzi2.png","x":2196,"y":784,"attr":{"class":"wenti"}},
        {"img":"xuanze.png","x":660,"y":1128,"attr":{"class":"wenti"}},
        {"img":"xuanxiang_btn.png","x":565,"y":1369,"attr":{"class":"btn btn1"}},
        {"img":"xuanxiang_btn.png","x":566,"y":1725,"attr":{"class":"btn btn2"}},
        {"img":"xuanxiang_btn.png","x":564,"y":2076,"attr":{"class":"btn btn3"}},
        {"img":"xuanxiang1.png","x":628,"y":1556,"attr":{"class":"btn btn1"}},
        {"img":"xuanxiang2.png","x":628,"y":1924,"attr":{"class":"btn btn2"}},
        {"img":"xuanxiang3.png","x":628,"y":2284,"attr":{"class":"btn btn3"}},
        {"img":"wenhao.png","x":3321,"y":1156,"attr":{"class":"wenhao"}},
        {"img":"wifi1.png","x":2768,"y":1300,"attr":{"class":"wifi1 wifi_1"}},
        {"img":"wifi2.png","x":2736,"y":1259,"attr":{"class":"wifi1 wifi_2"}},
        {"img":"wifi3.png","x":2706,"y":1218,"attr":{"class":"wifi1 wifi_3"}},
        {"img":"wifi4.png","x":2679,"y":1173,"attr":{"class":"wifi1 wifi_4"}},
        {"img":"gantanhao.png","x":2774,"y":1185,"attr":{"class":"wifi_5"}},
        {"img":"wifi1.png","x":3972,"y":1301,"attr":{"class":"wifi2 wifi_1"}},
        {"img":"wifi2.png","x":3940,"y":1258,"attr":{"class":"wifi2 wifi_2"}},
        {"img":"wifi3.png","x":3910,"y":1216,"attr":{"class":"wifi2 wifi_3"}},
        {"img":"wifi4.png","x":3882,"y":1171,"attr":{"class":"wifi2 wifi_4"}},
        {"img":"gantanhao.png","x":3979,"y":1185,"attr":{"class":"wifi_5"}},
        {"img":"nowenzi1.png","x":656,"y":684,"attr":{"class":"false1"}},
        {"img":"nowenzi2.png","x":2196,"y":780,"attr":{"class":"false1"}},
        {"img":"no2wenzi1.png","x":656,"y":684,"attr":{"class":"false2"}},
        {"img":"no2wenzi2.png","x":2196,"y":780,"attr":{"class":"false2"}},
        {"img":"dengpao.png","x":3325,"y":1090,"attr":{"class":"true dengpao"}},
        {"img":"erji1.png","x":3307,"y":1486,"attr":{"class":"true"}},
        {"img":"erji2.png","x":3964,"y":1460,"attr":{"class":"true"}},
        {"img":"cilun1.png","x":2748,"y":1284,"attr":{"class":"true cilun1"}},
        {"img":"cilun2.png","x":2699,"y":1105,"attr":{"class":"true cilun2"}},
        {"img":"cilun1.png","x":3955,"y":1278,"attr":{"class":"true cilun1"}},
        {"img":"cilun2.png","x":3901,"y":1105,"attr":{"class":"true cilun2"}},
        {"img":"kele.png","x":3436,"y":1692,"attr":{"class":"true"}},
        {"img":"yeswenzi1.png","x":656,"y":684,"attr":{"class":"true"}},
        {"img":"yeswenzi2.png","x":2196,"y":750,"attr":{"class":"true"}},
        {"img":"next.png","x":954,"y":1620,"attr":{"class":"next"}},
        {"img":"ku.png","x":1680,"y":1020,"attr":{"class":"ku"}},
        {"img":"xiao.png","x":1680,"y":1020,"attr":{"class":"xiao"}},
    ]
})

initfunlist.push(function(){
    $('.scene.scene-daxue .btn1').pitTouch(function(){
        $('.scene.scene-daxue').removeClass('true false2').addClass('false1');
        $('.scene.scene-daxue .ku').css('display','block');
    });
    $('.scene.scene-daxue .btn2').pitTouch(function(){
        $('.scene.scene-daxue').removeClass('false1 true').addClass('false2');
        $('.scene.scene-daxue .ku').css('display','block');
    });
    $('.scene.scene-daxue .btn3').pitTouch(function(){
        $('.scene.scene-daxue').removeClass('false1 false2').addClass('true');
        $('.scene.scene-daxue .ku').css('display','none');
        $('.scene.scene-daxue .xiao').css('display','block');
        $('.scene.scene-daxue .next').css('display','block');
    });
    $('.scene.scene-daxue .next').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("进入下一个场景");
        setTimeout(function(){
            $('.scene.scene-daxue').removeClass('show');
            $('.scene.scene-yiyuan').show();
        },300)
    })
})