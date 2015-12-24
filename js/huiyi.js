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

        {"img":"changjing.png","x":2460,"y":1211},
        {"img":"wenti.png","x":730,"y":614,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2410,"y":778,"attr":{"class":"wenti"}},
        {"img":"true.png","x":751,"y":1540,"attr":{"class":"strue"}},
        {"img":"false.png","x":737,"y":1923,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":727,"y":610,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2410,"y":825,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":728,"y":641,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":3044,"y":852,"attr":{"class":"false"}},
        {"img":"wenhao.png","x":3294,"y":1745,"attr":{"class":"false wenhaodoudong"}},
        {"img":"wenhao.png","x":3024,"y":1745,"attr":{"class":"false wenhaodoudong"}},
        {"img":"wenhao.png","x":3154,"y":1870,"attr":{"class":"false wenhaodoudong"}},
    ]
})

sceneslist.push({
    'box':$('.scene.scene-huiyi'),       /*场景的标签*/
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
    $('.scene.scene-huiyi .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("回答错误");
        setTimeout(function(){
            $('.scene.scene-huiyi .wenti').css('display','none');
            $('.scene.scene-huiyi .true').css('display','none');
            $('.scene.scene-huiyi .false').css('display','block');
        },300)
    })
})
