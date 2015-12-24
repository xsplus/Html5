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

        {"img":"changjingbg.png","x":1954,"y":827},
        {"img":"wenti.png","x":624,"y":650,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2100,"y":766,"attr":{"class":"wenti"}},
        {"img":"true.png","x":573,"y":1560,"attr":{"class":"strue"}},
        {"img":"false.png","x":573,"y":1923,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":673,"y":656,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2606,"y":833,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":634,"y":653,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2670,"y":900,"attr":{"class":"false"}},
        {"img":"changjing.png","x":2184,"y":1727,"attr":{"class":"changjing"}},
        {"img":"changjingtrue.png","x":2204,"y":1877,"attr":{"class":"true"}},
    ]
})

sceneslist.push({
    'box':$('.scene.scene-yinhang'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/common/',          /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"next.png","x":954,"y":1620,"attr":{"class":"next"}},
        {"img":"ku.png","x":1848,"y":1180,"attr":{"class":"false"}},
        {"img":"weibiao.png","x":1785,"y":370,"attr":{"class":"true"}},
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