/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-ditie'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/ditie/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/

        {"img":"changjing.png","x":2174,"y":887},
        {"img":"wenti.png","x":624,"y":650,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2400,"y":686,"attr":{"class":"wenti"}},
        {"img":"true.png","x":573,"y":1560,"attr":{"class":"strue"}},
        {"img":"false.png","x":573,"y":1923,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":673,"y":716,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2306,"y":833,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":684,"y":653,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2620,"y":700,"attr":{"class":"false"}},
    ]
})

initfunlist.push(function(){
    $('.strue').pitTouch(function(){
        //$(this).addClass('btndoudong');
        console.log("回答正确");
        setTimeout(function(){
            $('.scene.scene-ditie .wenti').css('display','none');
            $('.scene.scene-ditie .false').css('display','none');
            $('.scene.scene-ditie .true').css('display','block');
        },300)
    })
    $('.sfalse').pitTouch(function(){
        //$(this).addClass('btndoudong');
        console.log("回答错误");
        setTimeout(function(){
            $('.scene.scene-ditie .wenti').css('display','none');
            $('.scene.scene-ditie .true').css('display','none');
            $('.scene.scene-ditie .false').css('display','block');
        },300)
    })
})