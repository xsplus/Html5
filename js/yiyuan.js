/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-yiyuan'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/yiyuan/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/

        {"img":"changjingbg.png","x":2558,"y":819},
        {"img":"wenti.png","x":720,"y":568,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2642,"y":766,"attr":{"class":"wenti"}},
        {"img":"true.png","x":739,"y":1552,"attr":{"class":"strue"}},
        {"img":"false.png","x":737,"y":1951,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":717,"y":572,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2594,"y":714,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":754,"y":623,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2624,"y":868,"attr":{"class":"false"}},
        {"img":"changjing.png","x":2930,"y":1342,"attr":{"class":"changjing"}},
        {"img":"changjingtrue.png","x":2936,"y":1326,"attr":{"class":"true"}},

    ]
})

sceneslist.push({
    'box':$('.scene.scene-yiyuan'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
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
    $('.scene.scene-yiyuan .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("回答错误");
        setTimeout(function(){
            $('.scene.scene-yiyuan .wenti').css('display','none');
            $('.scene.scene-yiyuan .true').css('display','none');
            $('.scene.scene-yiyuan .false').css('display','block');
        },300)
    })
})