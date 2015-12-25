/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-yinhang'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/yinhang/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/

        {"img":"changjingbg.png","x":1866,"y":759},
        {"img":"wenti.png","x":388,"y":586,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":1888,"y":770,"attr":{"class":"wenti"}},
        {"img":"true.png","x":381,"y":1564,"attr":{"class":"strue"}},
        {"img":"false.png","x":385,"y":1943,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":421,"y":616,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2082,"y":837,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":378,"y":617,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2150,"y":800,"attr":{"class":"false"}},
        {"img":"changjing.png","x":2060,"y":1675,"attr":{"class":"changjing"}},
        {"img":"changjingtrue.png","x":2072,"y":1825,"attr":{"class":"true"}},
    ]
})

sceneslist.push({
    'box':$('.scene-yinhang'),       /*场景的标签*/
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
    $('.scene.scene-yinhang .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        $.error_wav();
        setTimeout(function(){
            $('.scene.scene-yinhang .wenti').css('display','none');
            $('.scene.scene-yinhang .true').css('display','none');
            $('.scene.scene-yinhang .false').css('display','block');
        },300)
    })
})