/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-zhongxiaoxue'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/zhongxiaoxue/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/

        {"img":"changjingbg.png","x":2188,"y":1203},
        {"img":"wenti.png","x":376,"y":558,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2480,"y":738,"attr":{"class":"wenti"}},
        {"img":"true.png","x":371,"y":1552,"attr":{"class":"strue"}},
        {"img":"false.png","x":375,"y":1951,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":355,"y":606,"attr":{"class":"true daantrue"}},
        {"img":"mstrue.png","x":2444,"y":817,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":390,"y":599,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2806,"y":772,"attr":{"class":"false"}},
        {"img":"changjing.png","x":2492,"y":1365,"attr":{"class":"changjing"}},
        {"img":"changjingtrue.png","x":2513,"y":1361,"attr":{"class":"true"}},
    ]
})

sceneslist.push({
    'box':$('.scene.scene-zhongxiaoxue'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
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
    $('.scene.scene-zhongxiaoxue .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        $.error_wav();
        setTimeout(function(){
            $('.scene.scene-zhongxiaoxue .wenti').css('display','none');
            $('.scene.scene-zhongxiaoxue .true').css('display','none');
            $('.scene.scene-zhongxiaoxue .false').css('display','block');
        },300)
    })
})