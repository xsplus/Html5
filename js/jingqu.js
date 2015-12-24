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
        {"img":"changjing.png","x":1843,"y":898},
        {"img":"wenti.png","x":396,"y":642,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2131,"y":509,"attr":{"class":"wenti"}},
        {"img":"true.png","x":278,"y":1542,"attr":{"class":"strue"}},
        {"img":"false.png","x":278,"y":1899,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":397,"y":642,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2158,"y":512,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":399,"y":643,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2133,"y":501,"attr":{"class":"false"}},
    ]
})

sceneslist.push({
    'box':$('.scene.scene-jingqu'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/common/',          /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"next.png","x":771,"y":1611,"attr":{"class":"next"}},
        {"img":"ku.png","x":1605,"y":1141,"attr":{"class":"false"}},
        {"img":"weibiao.png","x":1539,"y":337,"attr":{"class":"true"}},
        {"img":"lingjiang.png","x":814,"y":1520,"attr":{"class":"lingjiang"}},
    ]
})

initfunlist.push(function(){
    $('.scene.scene-jingqu .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("回答错误");
        setTimeout(function(){
            $('.scene.scene-jingqu .wenti').css('display','none');
            $('.scene.scene-jingqu .true').css('display','none');
            $('.scene.scene-jingqu .false').css('display','block');
        },300)
    })
})