/**
 * Created by Administrator on 12/16 0016.
 */
var scene_index = {
    'box':$('.scene.scene-index'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':569,                            /*场景的宽*/
    'height':321,                           /*场景的高*/
    'path':'img/index/',                  /*图片根目录*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {'img':'1.png',isbg:true},
        {'img':null,x:75,y:240,w:170,h:38,attr:{'class':'qidong'}},
        {'img':null,x:310,y:240,w:170,h:38,attr:{'class':'chakan'}},
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
