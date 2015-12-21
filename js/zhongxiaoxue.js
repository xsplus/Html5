/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-zhongxiaoxue'),       /*场景的标签*/
    'width':569,                            /*场景的宽*/
    'height':321,                           /*场景的高*/
    'path':'img/scene/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {'img':null,x:1,y:1,w:1,h:1,attr:{'class':''}},
    ]
})

initfunlist.push(function(){
    $('').pitTouch(function(){
        $('.scene-').removeClass('show');
        $('.scene-index').addClass('show');
        $(window).resize();
    })
})