/**
 * Created by Administrator on 12/16 0016.
 */
var scene_index = {
    'box':$('.scene.scene-index'),       /*场景的标签*/
    'width':569,                            /*场景的宽*/
    'height':321,                           /*场景的高*/
    'path':'img/index/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {'img':'1.png',x:0,y:0},
        {'img':null,x:75,y:240,w:170,h:38,attr:{'class':'qidong'}},
        {'img':null,x:310,y:240,w:170,h:38,tag:'a'},
    ]
}

var bindfun = [];

bindfun.push(function(){
    $('.qidong').bind({'touchstart':function(){
        $('.scene-index').removeClass('show');
        $('.scene-main').addClass('show');
        $(window).resize();
    }})
})
