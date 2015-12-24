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
        {"img":"changjing.png","x":2199,"y":878},
        {"img":"wenti.png","x":736,"y":602,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2307,"y":525,"attr":{"class":"wenti"}},
        {"img":"true.png","x":742,"y":1562,"attr":{"class":"strue"}},
        {"img":"false.png","x":746,"y":1959,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":749,"y":614,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2458,"y":564,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":783,"y":627,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2957,"y":545,"attr":{"class":"false"}},
    ]
})

sceneslist.push({
    'box':$('.scene.scene-jingqu'),       /*场景的标签*/
    'debug':true,                          /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/common/',          /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"next.png","x":1054,"y":1620,"attr":{"class":"next"}},
        {"img":"ku.png","x":1968,"y":1140,"attr":{"class":"false"}},
        {"img":"weibiao.png","x":1893,"y":390,"attr":{"class":"true"}},
        {"img":"lingjiang.png","x":814,"y":1520,w:860,h:792,"attr":{"class":"lingjiang"}},
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