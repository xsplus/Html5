/**
 * Created by theonead on 12/17 0017.
 */
var scene_huiyi = {
    'box':$('.scene.scene-huiyi'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':569,                            /*场景的宽*/
    'height':321,                           /*场景的高*/
    'path':'img/scene/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {'img':'huiyi/1.png',isbg:true},
        {'img':'common/backmain.png',x:1,y:1,w:100,h:50,attr:{'class':'backmain'}},
        {'img':'common/chakananli.png',x:301,y:1,w:100,h:50,attr:{'class':'chakananli'}},
    ]
}

bindfun.push(function(){
    $('.backmain').bind({'touchstart':function(){
        $('.scene-huiyi').removeClass('show');
        $('.scene-main').addClass('show');
        $(window).resize();
    }})
    $('.chakananli').bind({'touchstart':function(){
        $('.scene-huiyi').removeClass('show');
        $('.scene-anli').addClass('show');
        $(window).resize();
    }})
})
