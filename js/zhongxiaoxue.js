/**
 * Created by theonead on 12/17 0017.
 */
sceneslist.push({
    'box':$('.scene.scene-zhongxiaoxue'),       /*场景的标签*/
    'debug':false,                            /*是否开启调试模式*/
    'width':4742,
    'height':2667,
    'path':'img/scene/zhongxiaoxue/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'layers':[                              /*场景的图层数据*/

        {"img":"changjing.png","x":2104,"y":1207},
        {"img":"wenti.png","x":664,"y":650,"attr":{"class":"wenti"}},
        {"img":"wentims.png","x":2060,"y":786,"attr":{"class":"wenti"}},
        {"img":"true.png","x":563,"y":1560,"attr":{"class":"strue"}},
        {"img":"false.png","x":563,"y":1923,"attr":{"class":"sfalse"}},
        {"img":"daantrue.png","x":623,"y":606,"attr":{"class":"true daantrue"}},
        {"img":"mstrue.png","x":2156,"y":833,"attr":{"class":"true"}},
        {"img":"daanfalse.png","x":674,"y":603,"attr":{"class":"false"}},
        {"img":"msfalse.png","x":2870,"y":900,"attr":{"class":"false"}},
        {"img":"next.png","x":954,"y":1620,"attr":{"class":"next"}},
        {"img":"ku.png","x":1680,"y":1020,"attr":{"class":"false"}},
        {"img":"xiao.png","x":1680,"y":1020,"attr":{"class":"true"}},
    ]
})

initfunlist.push(function(){
    $('.scene.scene-zhongxiaoxue .strue').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("中小学回答正确");
        setTimeout(function(){
            $('.scene.scene-zhongxiaoxue .wenti').css('display','none');
            $('.scene.scene-zhongxiaoxue .false').css('display','none');
            $('.scene.scene-zhongxiaoxue .strue').css('display','none');
            $('.scene.scene-zhongxiaoxue .sfalse').css('display','none');
            $('.scene.scene-zhongxiaoxue .true').css('display','block');
            $('.scene.scene-zhongxiaoxue .next').css('display','block');
        },300)
    })
    $('.scene.scene-zhongxiaoxue .sfalse').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("回答错误");
        setTimeout(function(){
            $('.scene.scene-zhongxiaoxue .wenti').css('display','none');
            $('.scene.scene-zhongxiaoxue .true').css('display','none');
            $('.scene.scene-zhongxiaoxue .false').css('display','block');
        },300)
    })
    $('.scene.scene-zhongxiaoxue .next').pitTouch(function(){
        $(this).addClass('btndoudong');
        console.log("进入下一个场景");
        setTimeout(function(){
            $('.scene.scene-zhongxiaoxue').removeClass('show');
            $('.scene.scene-daxue').show();
        },300)
    })
})