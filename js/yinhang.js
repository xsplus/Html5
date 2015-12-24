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

        {"img":"changjingbg.png","x":2206,"y":743},
        {"img":"wenti.png","x":740,"y":590,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2208,"y":750,"attr":{"class":"wenti"}},
        {"img":"true.png","x":749,"y":1544,"attr":{"class":"strue"}},
        {"img":"false.png","x":753,"y":1943,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":781,"y":644,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2554,"y":837,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":730,"y":633,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2586,"y":772,"attr":{"class":"false"}},
        {"img":"changjing.png","x":2372,"y":1643,"attr":{"class":"changjing"}},
        {"img":"changjingtrue.png","x":2404,"y":1797,"attr":{"class":"true"}},
    ]
})

sceneslist.push({
    'box':$('.scene.scene-yinhang'),       /*场景的标签*/
    'debug':false,                          /*是否开启调试模式*/
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
    $('.scene.scene-yinhang .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("回答错误");
        setTimeout(function(){
            $('.scene.scene-yinhang .wenti').css('display','none');
            $('.scene.scene-yinhang .true').css('display','none');
            $('.scene.scene-yinhang .false').css('display','block');
        },300)
    })
})