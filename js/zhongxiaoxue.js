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

        {"img":"changjingbg.png","x":2480,"y":1175},
        {"img":"wenti.png","x":768,"y":626,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2472,"y":814,"attr":{"class":"wenti"}},
        {"img":"true.png","x":751,"y":1548,"attr":{"class":"strue"}},
        {"img":"false.png","x":751,"y":1927,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":663,"y":566,"attr":{"class":"true daantrue"}},
        {"img":"mstrue.png","x":2520,"y":821,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":750,"y":607,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":3190,"y":804,"attr":{"class":"false"}},
        {"img":"changjing.png","x":2792,"y":1333,"attr":{"class":"changjing"}},
        {"img":"changjingtrue.png","x":2813,"y":1337,"attr":{"class":"true"}},
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
        {"img":"next.png","x":1054,"y":1620,"attr":{"class":"next"}},
        {"img":"ku.png","x":1968,"y":1140,"attr":{"class":"false"}},
        {"img":"weibiao.png","x":1893,"y":390,"attr":{"class":"true"}},
        {"img":"lingjiang.png","x":814,"y":1520,w:860,h:792,"attr":{"class":"lingjiang"}},
    ]
})

initfunlist.push(function(){
    $('.scene.scene-zhongxiaoxue .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("回答错误");
        setTimeout(function(){
            $('.scene.scene-zhongxiaoxue .wenti').css('display','none');
            $('.scene.scene-zhongxiaoxue .true').css('display','none');
            $('.scene.scene-zhongxiaoxue .false').css('display','block');
        },300)
    })
})