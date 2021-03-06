/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box': $('.scene-changfang'), /*场景的标签*/
    'debug': false, /*是否开启调试模式*/
    'width': 4742,
    'height': 2667,
    'path': 'img/scene/changfang/', /*默认路径*/
    'auto_w': true, /*是否自动适应宽度*/
    'auto_h': true, /*是否自动适应高度*/
    'layers': [/*场景的图层数据*/
        {"img": "changjing.png", "x": 2156, "y": 961, w: 2141, h: 982, "attr": {"class": "changjing"}},
        {"img": "gongren.png", "x": 3824, "y": 1767, "attr": {"class": "gongren"}},
        {"img": "wenti.png", "x": 312, "y": 606, "attr": {"class": "wenti"}},
        {"img": "wentims.png", "x": 2160, "y": 586, "attr": {"class": "wenti"}},
        {"img": "true.png", "x": 385, "y": 1589, "attr": {"class": "strue"}},
        {"img": "false.png", "x": 389, "y": 1961, "attr": {"class": "sfalse"}},
        {"img": "daantrue.png", "x": 335, "y": 606, "attr": {"class": "true"}},
        {"img": "mstrue.png", "x": 2194, "y": 630, "attr": {"class": "true"}},
        {"img": "daanfalse.png", "x": 402, "y": 625, "attr": {"class": "false"}},
        {"img": "msfalse.png", "x": 2314, "y": 874, "attr": {"class": "false"}},
        {"img": "changjingfalse.png", "x": 2154, "y": 1530, w: 2150, h: 780},
        {"img": "cftitle.png", "x": 310, "y": 190},
        {"img":"next.png","x":620,"y":1572,"attr":{"class":"next"}},
    ]
})

sceneslist.push({
    'box':$('.scene-changfang'),       /*场景的标签*/
    'debug':false,                           /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/common/',          /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"pre.png","x":620,"y":1872,"attr":{"class":"prev"}},
        {"img":"ku.png","x":1608,"y":1148,"attr":{"class":"false"}},
        {"img":"weibiao.png","x":1541,"y":1100,"attr":{"class":"true weibiao"}},
        {"img":"lingjiang.png","x":734,"y":1520,"attr":{"class":"lingjiang"}},
    ]
})

initfunlist.push(function(){
    $('.scene.scene-changfang .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        $.error_wav();
        setTimeout(function(){
            $('.scene.scene-changfang .wenti').css('display','none');
            $('.scene.scene-changfang .true').css('display','none');
            $('.scene.scene-changfang .changjing').css('display','none');
            $('.scene.scene-changfang .false').css('display','block');
        },300)
    })
})