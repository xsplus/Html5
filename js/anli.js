/**
 * Created by theonead on 12/17 0017.
 */
var scene_anli = {
    'box':$('.scene.scene-anli'),       /*场景的标签*/
    'debug':false,
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/anli/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'touch':true,
    'layers':[                              /*场景的图层数据*/
        {'img':'bg_anliji.png',isbg:true},
        //案例按钮
        {'img':'btn_huiyi.png',x:765,y:889,attr:{'class':'btn_wailian','data-id':1}},
        {'img':'btn_zhongxiaoxue.png',x:1636,y:889,attr:{'class':'btn_wailian','data-id':2}},
        {'img':'btn_daxue.png',x:2504,y:889,attr:{'class':'btn_wailian','data-id':3}},
        {'img':'btn_yiyuan.png',x:3371,y:889,attr:{'class':'btn_wailian','data-id':4}},
        {'img':'btn_yinhang.png',x:572,y:1280,attr:{'class':'btn_wailian','data-id':5}},
        {'img':'btn_gouwu.png',x:1317,y:1280,attr:{'class':'btn_wailian','data-id':6}},
        {'img':'btn_changfang.png',x:2066,y:1280,attr:{'class':'btn_wailian','data-id':7}},
        {'img':'btn_jingqu.png',x:2818,y:1280,attr:{'class':'btn_wailian','data-id':8}},
        {'img':'btn_ditie.png',x:3565,y:1280,attr:{'class':'btn_wailian','data-id':9}},
        //tip
        {'img':'tip.png',x:1870,y:1880,attr:{'class':'tip'}}
    ]
}

bindfun.push(function(){
    $('.btn_wailian').pitTouch(function(){
        console.log("进入案例详情页");
        $(this).addClass('btndoudong');
        var id = $(this).data('id');
        setTimeout(function(){
            switch (id){
                case 1:
                    window.location.href="http://www.baidu.com";
                    break;
                case 2:
                    window.location.href="http://www.baidu.com";
                    break;
                case 3:
                    window.location.href="http://www.baidu.com";
                    break;
                case 4:
                    window.location.href="http://www.baidu.com";
                    break;
                case 5:
                    window.location.href="http://www.baidu.com";
                    break;
                case 6:
                    window.location.href="http://www.baidu.com";
                    break;
                case 7:
                    window.location.href="http://www.baidu.com";
                    break;
                case 8:
                    window.location.href="http://www.baidu.com";
                    break;
                case 9:
                    window.location.href="http://www.baidu.com";
                    break;
            }
        }, 500);
    });
})