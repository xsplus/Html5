/**
 * Created by Administrator on 12/16 0016.
 */
sceneslist.push({
    'box':$('.scene.scene-index'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/index/',                  /*图片根目录*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {'img':'bg.gif',w:4742,h:2667,isbg:true},
        {'img':'btn1.png',x:1792,y:1670,attr:{'class':'qidong'}},
        {'img':'btn2.png',x:1675,y:2092,attr:{'class':'chakan'}},
        {'img':'title.png',x:722,y:366,attr:{'class':'title'}},
    ]
})

initfunlist.push(function(){

    $('.qidong').pitTouch(function(){
        console.log("进入主页");
        $(this).addClass('btndoudong');
        setTimeout(function(){
            $('.scene-index').removeClass('show');
            $('.scene-main').show().trigger('touchstart').trigger('touchend');
        },300)
    })

    $('.chakan').pitTouch(function(){
        console.log("进入案例页");
        $(this).addClass('btndoudong');
        setTimeout(function(){
            $('.scene-index').removeClass('show');
            $('.scene-anli').show().trigger('touchstart').trigger('touchend');
        },300)
    })
})
