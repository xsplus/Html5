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

        {"img":"changjing.png","x":2204,"y":807},
        {"img":"wenti.png","x":614,"y":580,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2560,"y":786,"attr":{"class":"wenti"}},
        {"img":"true.png","x":533,"y":1520,"attr":{"class":"strue"}},
        {"img":"false.png","x":533,"y":1923,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":663,"y":616,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2306,"y":690,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":624,"y":603,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2670,"y":900,"attr":{"class":"false"}},
    ]
})

initfunlist.push(function(){
    $('.strue').pitTouch(function(){
        //$(this).addClass('btndoudong');
        console.log("回答正确");
        setTimeout(function(){
            $('.scene.scene-yiyuan .wenti').css('display','none');
            $('.scene.scene-yiyuan .false').css('display','none');
            $('.scene.scene-yiyuan .true').css('display','block');
        },300)
    })
    $('.sfalse').pitTouch(function(){
        //$(this).addClass('btndoudong');
        console.log("回答错误");
        setTimeout(function(){
            $('.scene.scene-yiyuan .wenti').css('display','none');
            $('.scene.scene-yiyuan .true').css('display','none');
            $('.scene.scene-yiyuan .false').css('display','block');
        },300)
    })
})