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

        {"img":"changjing.png","x":2104,"y":877},
        {"img":"wenti.png","x":624,"y":650,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2260,"y":586,"attr":{"class":"wenti"}},
        {"img":"true.png","x":533,"y":1560,"attr":{"class":"strue"}},
        {"img":"false.png","x":573,"y":1923,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":623,"y":616,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2206,"y":700,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":674,"y":653,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2570,"y":650,"attr":{"class":"false"}},
        {"img":"next.png","x":954,"y":1620,"attr":{"class":"next"}},
        {"img":"ku.png","x":1680,"y":1020,"attr":{"class":"false"}},
        {"img":"xiao.png","x":1680,"y":1020,"attr":{"class":"true"}},
    ]
})

initfunlist.push(function(){
    $('.scene.scene-changfang .strue').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("回答正确");
        setTimeout(function(){
            $('.scene.scene-changfang .wenti').css('display','none');
            $('.scene.scene-changfang .false').css('display','none');
            $('.scene.scene-changfang .strue').css('display','none');
            $('.scene.scene-changfang .sfalse').css('display','none');
            $('.scene.scene-changfang .true').css('display','block');
            $('.scene.scene-changfang .next').css('display','block');
        },300)
    })
    $('.scene.scene-changfang .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("回答错误");
        setTimeout(function(){
            $('.scene.scene-changfang .wenti').css('display','none');
            $('.scene.scene-changfang .true').css('display','none');
            $('.scene.scene-changfang .false').css('display','block');
        },300)
    })
    $('.scene.scene-changfang .next').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("进入下一个场景");
        setTimeout(function(){
            $('.scene.scene-changfang').removeClass('show');
            $('.scene.scene-jingqu').show();
        },300)
    })
})