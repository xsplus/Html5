/**
 * Created by Administrator on 12/16 0016.
 */
sceneslist.push({
    'box':$('.scene-yinyue'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/yinyue/',                  /*图片根目录*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"yinyue.png","x":4380,"y":96,"attr":{"class":"yinyue btn"}},
        {"img":"shengyin.png","x":4493,"y":153,"attr":{"class":"shengyin play"}},
    ]
})

initfunlist.push(function(){

    $(".yinyue").append('<audio loop autoplay><source src="music/music.mp3" type="audio/mpeg"></audio>');
    $(".yinyue").append('<audio><source src="music/error.wav" type="audio/mpeg"></audio>');
    $(".yinyue").append('<audio><source src="music/success.wav" type="audio/mpeg"></audio>');
    $(".yinyue,.shengyin").pitTouch(function(){
        if($(".shengyin").is('.play')){
            $('.yinyue audio').get(0).pause();
            $(".shengyin").removeClass('play');
            console.log("g");
        }else{
            $('.yinyue audio').get(0).play();
            $(".shengyin").addClass('play');
            console.log("k");
        }
    });

    $.error_wav = function(){
        if($(".shengyin").is('.play')){
            $('.yinyue audio').get(1).play();
        }
    }
    $.success_wav = function(){
        if($(".shengyin").is('.play')){
            $('.yinyue audio').get(2).play();
        }
    }
})
