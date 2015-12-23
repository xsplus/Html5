/**
 * Created by theonead on 12/18 0018.
 */
sceneslist.push({
    'box':$('.scene.scene-loading'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/loading/',                  /*图片根目录*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'show':true,
    'layers':[                              /*场景的图层数据*/
        {"img":"loading.jpg",w:4742,h:2667,"css":{"background-color":"black"},"isbg":true},
        {"img":"load1.png","x":1397,"y":1224,w:1951,h:218},
        {"img":"load2.png","x":1392,"y":1116,w:430,h:430,"attr":{"class":"load2"}},
        {"img":"load3.png","x":1582,"y":1322,w:838,h:22,"attr":{"class":"load3"}},
        /*{"img":"load4.png","x":1582,"y":1297,w:433,h:69,"attr":{"class":"load4"}},*/
        {x:2900,y:1020,w:400,h:200,'attr':{'class':'baifenbi'}},
    ]
})