/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-gouwuzhongxin'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/gouwu/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/

        {"img":"changjing.png","x":2104,"y":1097},
        {"img":"wenti.png","x":634,"y":600,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2360,"y":786,"attr":{"class":"wenti"}},
        {"img":"true.png","x":523,"y":1560,"attr":{"class":"strue"}},
        {"img":"false.png","x":523,"y":1943,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":693,"y":666,"attr":{"class":"true"}},
        {"img":"mstrue.png","x":2206,"y":833,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":624,"y":603,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2670,"y":900,"attr":{"class":"false"}},
    ]
})

sceneslist.push({
    'box':$('.scene.scene-gouwuzhongxin'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/scene/common/',          /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/
        {"img":"next.png","x":954,"y":1620,"attr":{"class":"next"}},
        {"img":"ku.png","x":1680,"y":1020,"attr":{"class":"false"}},
        {"img":"xiao.png","x":1680,"y":1020,"attr":{"class":"true"}},
    ]
})

initfunlist.push(function(){
    $('.scene.scene-gouwuzhongxin .strue').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("回答正确");
        setTimeout(function(){
            $('.scene.scene-gouwuzhongxin .wenti').css('display','none');
            $('.scene.scene-gouwuzhongxin .false').css('display','none');
            $('.scene.scene-gouwuzhongxin .strue').css('display','none');
            $('.scene.scene-gouwuzhongxin .sfalse').css('display','none');
            $('.scene.scene-gouwuzhongxin .true').css('display','block');
            $('.scene.scene-gouwuzhongxin .next').css('display','block');
        },300)
    })
    $('.scene.scene-gouwuzhongxin .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("回答错误");
        setTimeout(function(){
            $('.scene.scene-gouwuzhongxin .wenti').css('display','none');
            $('.scene.scene-gouwuzhongxin .true').css('display','none');
            $('.scene.scene-gouwuzhongxin .false').css('display','block');
        },300)
    })
    $('.scene.scene-gouwuzhongxin .next').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("进入下一个场景");
        setTimeout(function(){
            $('.scene.scene-gouwuzhongxin').removeClass('show');
            $('.scene.scene-changfang').show();
        },300)
    })
})