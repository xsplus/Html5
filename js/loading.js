/**
 * Created by theonead on 12/18 0018.
 */
var scene_loading = {
    'box':$('.scene.scene-loading'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/loading/',                  /*图片根目录*/
    'auto_w':false,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'show':true,
    'layers':[                              /*场景的图层数据*/
        {/*'img':'loading.png',*/x:0,y:0,w:4742,h:2667,'css':{'background-color':'black'}},
        {'img':'load1.png',x:1395,y:1164},
        {'img':'load2.png',x:1392,y:1116,'attr':{'class':'load2'}},
        {'img':'load3.png',x:1480,y:1296,'attr':{'class':'load3'}},
        {'img':'load4.png',x:1564,y:1295,'attr':{'class':'load4'}},
        {x:3172,y:1036,'attr':{'class':'baifenbi'},'css':{'color':'white','font-size':'28px','font-weight':900}},
    ]
}