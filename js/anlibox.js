/**
 * Created by theone on 2015/12/22.
 */
sceneslist.push({
    'box':$('.scene.scene-anlibox'),
    'debug':false,
    'width':4742,
    'height':2667,
    'path':'img/anlibox/',
    'auto_w':true,
    'auto_h':true,
    'layers':[
        {"img":"bg.png","isbg":true},
        {"img":"anli_box.png","x":128,"y":353},
        {"img":"wenti_box.png","x":516,"y":504},
        {"img":"cankao.png","x":3540,"y":87,attr:{'class':'cankao'}},
        {"img":"fanhui.png","x":128,"y":132,attr:{'class':'fanhui'}},
        {"img":"yinyue.png","x":4380,"y":96,attr:{'class':'yinyue'}},
        {"img":"shenyin.png","x":4493,"y":153,attr:{'class':'shenyin'}},
    ]
})

initfunlist.push(function(){

    $('.fanhui').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('返回main');
            sceneID.removeClass('show');
            $('.scene.scene-anlibox').removeClass('show');
            $('.scene-main').addClass('show');
            $(window).resize();
        },300)
    })

    $('.cankao').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('查看参考案例');
            sceneID.removeClass('show');
            $('.scene.scene-anlibox').removeClass('show');
            $('.scene-anli').addClass('show');
            $(window).resize();
        },300)
    })
})