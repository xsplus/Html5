/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-gouwuzhongxin'),       /*场景的标签*/
    'debug':false,                         /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/gouwu/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/

        {"img":"changjingbg.png","x":2202,"y":1121,"w":2135,"h":1184},
        {"img":"wenti.png","x":374,"y":600,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2200,"y":774,"attr":{"class":"wenti"}},
        {"img":"true.png","x":371,"y":1572,"attr":{"class":"strue"}},
        {"img":"false.png","x":375,"y":1959,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":385,"y":598,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2234,"y":717,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":316,"y":587,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2530,"y":764,"attr":{"class":"false"}},
        {"img":"changjing.png","x":3464,"y":1382,"attr":{"class":"changjing"}},
        {"img":"changjingtrue.png","x":3380,"y":1386,"attr":{"class":"true"}},
        {"img":"gwtitle.png","x":310,"y":190},
        {"img":"next.png","x":620,"y":1572,"attr":{"class":"next"}},
    ]
})

sceneslist.push({
    'box':$('.scene-gouwuzhongxin'),       /*场景的标签*/
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
    $('.scene.scene-gouwuzhongxin .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        $.error_wav();
        setTimeout(function(){
            $('.scene.scene-gouwuzhongxin .wenti').css('display','none');
            $('.scene.scene-gouwuzhongxin .true').css('display','none');
            $('.scene.scene-gouwuzhongxin .false').css('display','block');
        },300)
    })
})