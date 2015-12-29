/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-huiyi'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/huiyi/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/

        {"img":"changjing.png","x":2184,"y":1231},
        {"img":"wenti.png","x":374,"y":618,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2142,"y":702,"attr":{"class":"wenti"}},
        {"img":"true.png","x":379,"y":1580,"attr":{"class":"strue"}},
        {"img":"false.png","x":381,"y":1959,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":351,"y":598,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2150,"y":825,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":360,"y":645,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2708,"y":832,"attr":{"class":"false"}},
        {"img":"wenhao.png","x":3298,"y":1693,"attr":{"class":"false wenhaodoudong"}},
        {"img":"wenhao.png","x":3020,"y":1685,"attr":{"class":"false wenhaodoudong"}},
        {"img":"wenhao.png","x":3166,"y":1810,"attr":{"class":"false wenhaodoudong"}},
        {"img":"hytitle.png","x":310,"y":190},
        {"img":"next.png","x":620,"y":1572,"attr":{"class":"next"}},
    ]
})

sceneslist.push({
    'box':$('.scene-huiyi'),       /*场景的标签*/
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
    $('.scene.scene-huiyi .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        $.error_wav();
        setTimeout(function(){
            $('.scene.scene-huiyi .wenti').css('display','none');
            $('.scene.scene-huiyi .true').css('display','none');
            $('.scene.scene-huiyi .false').css('display','block');
        },300)
    })
})
