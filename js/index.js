/**
 * Created by Administrator on 12/16 0016.
 */
var scene_index = {
    'box':$('.scene.scene-index'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/index/',                  /*图片根目录*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {'img':'bg.png',isbg:true},
        {'img':'btn1.png',x:1792,y:1670,attr:{'class':'qidong'}},
        {'img':'btn2.png',x:1685,y:2122,attr:{'class':'chakan'}},
        {'img':'title.png',x:722,y:366},
    ]
}

var bindfun = [];

bindfun.push(function(){
    $('.qidong').on({'touchstart':function(){
        console.log("进入主页");
        $('.scene-index').removeClass('show');
        $('.scene-main').addClass('show');
        $(window).resize();
    }})

    $('.chakan').on({'touchstart':function(){
        console.log("进入案例页");
        $('.scene-index').removeClass('show');
        $('.scene-anli').addClass('show');
        $(window).resize();
    }})
})
