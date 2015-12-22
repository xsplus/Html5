/**
 * Created by theone on 2015/12/22.
 */
sceneslist.push({
    'box':$('.scene.scene-anlibox'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/anlibox/',                  /*图片根目录*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"bg.png","isbg":true},
        {"img":"cankao.png","x":3540,"y":87},
        {"img":"fanhui.png","x":128,"y":132},
        {"img":"yinyue.png","x":4380,"y":96},
        {"img":"shenyin.png","x":4493,"y":153},
        {"img":"anli_box.png","x":128,"y":353},
        {"img":"wenti_box.png","x":516,"y":504},
    ]
})

initfunlist.push(function(){

    $('.qidong').pitTouch(function(){
        console.log("进入主页");
        $(this).addClass('btndoudong');
        setTimeout(function(){
            $('.scene-index').removeClass('show');
            $('.scene-main').addClass('show');
            $(window).resize();
        },300)
    })

    $('.chakan').pitTouch(function(){
        console.log("进入案例页");
        $(this).addClass('btndoudong');
        setTimeout(function(){
            $('.scene-index').removeClass('show');
            $('.scene-anli').addClass('show');
            $(window).resize();
        },300)
    })
})