/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-ditie'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/ditie/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"changjingbg.png","x":2174,"y":887},
        {"img":"wenti.png","x":564,"y":650,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2200,"y":700,"attr":{"class":"wenti"}},
        {"img":"true.png","x":573,"y":1560,"attr":{"class":"strue"}},
        {"img":"false.png","x":563,"y":1943,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":673,"y":616,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2306,"y":700,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":684,"y":653,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2620,"y":700,"attr":{"class":"false"}},
        {"img":"wifi.png","x":3700,"y":1320,"attr":{"class":"wifi"}},
    ]
})

sceneslist.push({
    'box':$('.scene.scene-ditie'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/common/',          /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"ku.png","x":1848,"y":1180,"attr":{"class":"false"}},
        {"img":"weibiao.png","x":1785,"y":370,"attr":{"class":"true"}},
        {"img":"next.png","x":954,"y":1620,"attr":{"class":"next"}},
        {"img":"lingjiang.png","x":814,"y":1520,w:860,h:792,"attr":{"class":"lingjiang"}},
    ]
})

initfunlist.push(function(){
    $('.scene.scene-ditie .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("回答错误");
        setTimeout(function(){
            $('.scene.scene-ditie .wenti').css('display','none');
            $('.scene.scene-ditie .true').css('display','none');
            $('.scene.scene-ditie .false').css('display','block');
        },300)
    })
})