/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-yiyuan'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/yiyuan/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/

        {"img":"changjingbg.png","x":2242,"y":859},
        {"img":"wenti.png","x":376,"y":548,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2422,"y":838,"attr":{"class":"wenti"}},
        {"img":"true.png","x":367,"y":1572,"attr":{"class":"strue"}},
        {"img":"false.png","x":373,"y":1959,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":373,"y":576,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2330,"y":658,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":394,"y":595,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2364,"y":872,"attr":{"class":"false"}},
        {"img":"changjing.png","x":2614,"y":1378,"attr":{"class":"changjing"}},
        {"img":"changjingtrue.png","x":2620,"y":1370,"attr":{"class":"true"}},
        {"img":"yytitle.png","x":310,"y":190},
        {"img":"next.png","x":620,"y":1572,"attr":{"class":"next"}},

    ]
})

sceneslist.push({
    'box':$('.scene-yiyuan'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/common/',          /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"pre.png","x":620,"y":1872,"attr":{"class":"prev"}},
        {"img":"ku.png","x":1608,"y":1148,"attr":{"class":"false"}},
        {"img":"weibiao.png","x":1541,"y":1100,"attr":{"class":"true weibiao"}},
        {"img":"lingjiang.png","x":734,"y":1520,"attr":{"class":"lingjiang"}},
    ]
})

initfunlist.push(function(){
    $('.scene.scene-yiyuan .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        $.error_wav();
        setTimeout(function(){
            $('.scene.scene-yiyuan .wenti').css('display','none');
            $('.scene.scene-yiyuan .true').css('display','none');
            $('.scene.scene-yiyuan .false').css('display','block');
        },300)
    })
})