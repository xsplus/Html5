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
        {"img":"cankao.png","x":3540,"y":87,attr:{'class':'cankao btn'}},
        {"img":"fanhui.png","x":128,"y":132,attr:{'class':'fanhui btn'}},
        {"img":"yinyue.png","x":4380,"y":96,attr:{'class':'yinyue btn'}},
        {"img":"shengyin.png","x":4493,"y":153,attr:{'class':'shengyin play'}},
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

    $(".yinyue").append('<audio loop autoplay><source src="mp3/music.mp3" type="audio/mpeg"></audio>').pitTouch(function(){
        if($(".shengyin").is('.play')){
            $('.yinyue audio').get(0).pause();
            $(".shengyin").removeClass('play');
        }else{
            console.log($(".shengyin"));
            $('.yinyue audio').get(0).play();
            $(".shengyin").addClass('play');
        }
    });
})