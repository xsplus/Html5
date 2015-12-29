/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-jingqu'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/jingqu/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"changjing.png","x":1851,"y":890},
        {"img":"wenti.png","x":388,"y":614,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":1939,"y":537,"attr":{"class":"wenti"}},
        {"img":"true.png","x":386,"y":1586,"attr":{"class":"strue"}},
        {"img":"false.png","x":390,"y":1963,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":409,"y":614,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2030,"y":580,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":427,"y":623,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2249,"y":629,"attr":{"class":"false"}},
        {"img":"jqtitle.png","x":310,"y":135},
        {"img":"next.png","x":620,"y":1572,"attr":{"class":"next"}},
    ]
})

sceneslist.push({
    'box':$('.scene-jingqu'),       /*场景的标签*/
    'debug':false,                          /*是否开启调试模式*/
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
    $('.scene.scene-jingqu .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        $.error_wav();
        setTimeout(function(){
            $('.scene.scene-jingqu .wenti').css('display','none');
            $('.scene.scene-jingqu .true').css('display','none');
            $('.scene.scene-jingqu .false').css('display','block');
        },300)
    })
})