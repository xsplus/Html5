/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-ditie'),       /*场景的标签*/
    'debug':false,                          /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/ditie/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"changjingbg.png","x":2162,"y":907},
        {"img":"wenti.png","x":324,"y":578,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2156,"y":604,"attr":{"class":"wenti"}},
        {"img":"true.png","x":389,"y":1588,"attr":{"class":"strue"}},
        {"img":"false.png","x":383,"y":1963,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":381,"y":612,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2226,"y":612,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":368,"y":613,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2324,"y":672,"attr":{"class":"false"}},
        {"img":"wifi.png","x":3652,"y":1284,"attr":{"class":"wifi"}},
    ]
})

sceneslist.push({
    'box':$('.scene-ditie'),       /*场景的标签*/
    'debug':false,                          /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/common/',          /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"next.png","x":620,"y":1572,"attr":{"class":"next"}},
        {"img":"ku.png","x":1608,"y":1148,"attr":{"class":"false"}},
        {"img":"weibiao.png","x":1541,"y":370,"attr":{"class":"true"}},
        {"img":"lingjiang.png","x":734,"y":1520,"attr":{"class":"lingjiang"}},
    ]
})

initfunlist.push(function(){
    $('.scene.scene-ditie .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        $.error_wav();
        setTimeout(function(){
            $('.scene.scene-ditie .wenti').css('display','none');
            $('.scene.scene-ditie .true').css('display','none');
            $('.scene.scene-ditie .false').css('display','block');
        },300)

    })
})