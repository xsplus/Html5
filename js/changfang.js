/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-changfang'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/changfang/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"changjing.png","x":2144,"y":961,w:2141,h:982,"attr":{"class":"changjing"}},
        {"img":"gongren.png","x":3824,"y":1767,"attr":{"class":"gongren"}},
        {"img":"wenti.png","x":564,"y":650,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2160,"y":586,"attr":{"class":"wenti"}},
        {"img":"true.png","x":573,"y":1545,"attr":{"class":"strue"}},
        {"img":"false.png","x":573,"y":1933,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":563,"y":686,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2206,"y":650,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":674,"y":653,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2370,"y":1050,"attr":{"class":"false"}},
        {"img":"changjingfalse.png","x":2154,"y":1530,w:2150,h:780},
    ]
})

sceneslist.push({
    'box':$('.scene.scene-changfang'),       /*场景的标签*/
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
    $('.scene.scene-changfang .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("回答错误");
        setTimeout(function(){
            $('.scene.scene-changfang .wenti').css('display','none');
            $('.scene.scene-changfang .true').css('display','none');
            $('.scene.scene-changfang .changjing').css('display','none');
            $('.scene.scene-changfang .false').css('display','block');
        },300)
    })
})