/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene-daxue'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/daxue/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"changjing.png","x":2160,"y":708,"attr":{"class":"layer"}},
        {"img":"wenti.png","x":380,"y":604,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2336,"y":520,"attr":{"class":"wenti"}},
        {"img":"xuanxiang_btn.png","x":397,"y":1345,"attr":{"class":"btn btn1"}},
        {"img":"xuanxiang_btn.png","x":394,"y":1713,"attr":{"class":"btn btn2"}},
        {"img":"xuanxiang_btn.png","x":398,"y":2072,"attr":{"class":"btn strue"}},
        {"img":"xuanxiang1.png","x":412,"y":1500,"attr":{"class":"btn btn1"}},
        {"img":"xuanxiang2.png","x":436,"y":1876,"attr":{"class":"btn btn2"}},
        {"img":"xuanxiang3.png","x":435,"y":2228,"attr":{"class":"btn strue"}},
        {"img":"wenhao.png","x":3445,"y":1200,"attr":{"class":"wenhao"}},
        {"img":"wifi1.png","x":2712,"y":1232,"attr":{"class":"wifi1 wifi_1"}},
        {"img":"wifi2.png","x":2684,"y":1179,"attr":{"class":"wifi1 wifi_2"}},
        {"img":"wifi3.png","x":2650,"y":1122,"attr":{"class":"wifi1 wifi_3"}},
        {"img":"wifi4.png","x":2619,"y":1081,"attr":{"class":"wifi1 wifi_4"}},
        {"img":"gantanhao.png","x":2722,"y":1133,"attr":{"class":"wifi_5"}},
        {"img":"wifi1.png","x":4040,"y":1257,"attr":{"class":"wifi2 wifi_1"}},
        {"img":"wifi2.png","x":4004,"y":1186,"attr":{"class":"wifi2 wifi_2"}},
        {"img":"wifi3.png","x":3974,"y":1140,"attr":{"class":"wifi2 wifi_3"}},
        {"img":"wifi4.png","x":3946,"y":1087,"attr":{"class":"wifi2 wifi_4"}},
        {"img":"gantanhao.png","x":4047,"y":1157,"attr":{"class":"wifi_5"}},
        {"img":"daanfalse1.png","x":440,"y":636,"attr":{"class":"false1"}},
        {"img":"msfalse1.png","x":2556,"y":504,"attr":{"class":"false1"}},
        {"img":"daanfalse2.png","x":436,"y":644,"attr":{"class":"false2"}},
        {"img":"msfalse2.png","x":2532,"y":492,"attr":{"class":"false2"}},
        {"img":"dengpao.png","x":3365,"y":1154,"attr":{"class":"true dengpao"}},
        {"img":"erji1.png","x":3364,"y":1416,"attr":{"class":"true"}},
        {"img":"erji2.png","x":4016,"y":1362,"attr":{"class":"true"}},
        {"img":"cilun1.png","x":2656,"y":1262,"attr":{"class":"true cilun1"}},
        {"img":"cilun2.png","x":2599,"y":1077,"attr":{"class":"true cilun2"}},
        {"img":"cilun1.png","x":3943,"y":1262,"attr":{"class":"true cilun1"}},
        {"img":"cilun2.png","x":3885,"y":1077,"attr":{"class":"true cilun2"}},
        {"img":"kele.png","x":3488,"y":1630,"attr":{"class":"true"}},
        {"img":"daantrue.png","x":428,"y":632,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2304,"y":450,"attr":{"class":"true"}},
        {"img":"dxtitle.png","x":310,"y":145},
        {"img":"next.png","x":620,"y":1572,"attr":{"class":"next"}},
    ]
})

sceneslist.push({
    'box':$('.scene-daxue'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/common/',          /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"pre.png","x":620,"y":1872,"attr":{"class":"prev"}},
        {"img":"ku.png","x":1608,"y":1148,"attr":{"class":"false"}},
        {"img":"weibiao.png","x":1541,"y":370,"attr":{"class":"true"}},
        {"img":"lingjiang.png","x":734,"y":1520,"attr":{"class":"lingjiang"}},
    ]
})

initfunlist.push(function(){
    $('.scene-daxue .btn1').pitTouch(function(){
        $('.scene-daxue .btn1').addClass('btndoudong');
        $('.scene.scene-daxue').removeClass('true false2').addClass('false1');
        $.error_wav();
    });
    $('.scene-daxue .btn2').pitTouch(function(){
        $('.scene-daxue .btn2').addClass('btndoudong');
        $('.scene.scene-daxue').removeClass('false1 true').addClass('false2');
        $.error_wav();
    });
})