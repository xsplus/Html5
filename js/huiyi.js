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

        {"img":"changjing.png","x":2204,"y":1307},
        {"img":"wenti.png","x":614,"y":650,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2170,"y":786,"attr":{"class":"wenti"}},
        {"img":"true.png","x":583,"y":1580,"attr":{"class":"strue"}},
        {"img":"false.png","x":573,"y":1923,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":623,"y":666,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2206,"y":833,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":624,"y":693,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2700,"y":900,"attr":{"class":"false"}},
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
        {"img":"next.png","x":771,"y":1611,"attr":{"class":"next"}},
        {"img":"ku.png","x":1605,"y":1141,"attr":{"class":"false"}},
        {"img":"weibiao.png","x":1539,"y":337,"attr":{"class":"true"}},
        {"img":"lingjiang.png","x":814,"y":1520,"attr":{"class":"lingjiang"}},
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
