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
        {"img":"wenti_box.png","x":276,"y":459,"attr":{"class":"wenti_box"}},
        {"img":"mao.png","x":120,"y":115,"attr":{"class":"mao"}},
        {"img":"cankao.png","x":3540,"y":87,"attr":{"class":"cankao btn"}},
        {"img":"guanbi.png","x":2200,"y":112,"attr":{"class":"fanhui btn"}},
        {"img":"again.png","x":648,"y":2060,"attr":{"class":"again btn"}},
        {"img":"gonggao.png","x":1744,"y":2056,"attr":{"class":"gonggao btn"}},
        {"img":"xuexi.png","x":2860,"y":2056,"attr":{"class":"xuexi btn"}},
        {"img":"jiangbei.png","x":468,"y":488,"attr":{"class":"jiangbei"}},
        {w:4742,h:2667,"attr":{"class":"fenxiangtishi"},"css":{"background":"rgba(0,0,0,0.8)"},isbg:true},
        {"img":"fenxiangtishi.png","attr":{"class":"fenxiangtishi"}},
    ]
})

initfunlist.push(function(){
    $('.scene-anlibox .fanhui').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('关闭当前场景，返回main');
            sceneID.removeClass('show');
            $('.scene-yinyue').addClass('filter');
            $('.scene.scene-anlibox').removeClass('show');
            $('.scene-main').addClass('show');
        },300)
    })

    $('.scene-anlibox .cankao').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('查看参考案例');
            sceneID.removeClass('show');
            $('.scene.scene-anlibox').removeClass('show');
            $('.scene-anli').show().trigger('touchstart').trigger('touchend');
        },300)
    })

    $(".scene-anlibox .again").pitTouch(function(){
        window.location.reload();
    });
    $('.scene-anlibox .gonggao').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('分享提示');
            $('.fenxiangtishi').show();
        },300)
    })
    $('.fenxiangtishi').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('关闭分享提示');
            $('.fenxiangtishi').remove();
        },300)
    })
    $('.scene-anlibox .xuexi').pitTouch(function(){
        $(this).addClass('btndoudong');
        setTimeout(function(){
            console.log('查看参考案例');
            $('.scene-anlibox').removeClass('show');
            $('.scene-anli').show();
        },300)
    })
})