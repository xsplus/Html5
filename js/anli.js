/**
 * Created by theonead on 12/17 0017.
 */
var scene_anli = {
    'box':$('.scene.scene-anli'),       /*场景的标签*/
    'width':4742,                            /*场景的宽*/
    'height':2667,                           /*场景的高*/
    'path':'img/anli/',                    /*默认路径*/
    'auto_w':true,                        /*是否自动适应宽度*/
    'auto_h':true,                         /*是否自动适应高度*/
    'touch':true,
    'layers':[                              /*场景的图层数据*/
        {'img':'bg_anliji.png',isbg:true},
        //案例按钮
        {'img':'btn_huiyi.png',x:50,y:50,attr:{'class':'btn_wailian','data-id':1}},
        {'img':'btn_zhongxiaoxue.png',x:50,y:50,attr:{'class':'btn_wailian','data-id':1}},
        {'img':'btn_daxue.png.png',x:50,y:50,attr:{'class':'btn_wailian','data-id':1}},
        {'img':'btn_yiyuan.png',x:50,y:50,attr:{'class':'btn_wailian','data-id':1}},
        {'img':'btn_yinhang.png',x:50,y:50,attr:{'class':'btn_wailian','data-id':1}},
        {'img':'btn_gouwu.png',x:50,y:50,attr:{'class':'btn_wailian','data-id':1}},
        {'img':'btn_changfang.png',x:50,y:50,attr:{'class':'btn_wailian','data-id':1}},
        {'img':'btn_jingqu.png',x:50,y:50,attr:{'class':'btn_wailian','data-id':1}},
        {'img':'btn_ditie.png',x:50,y:50,attr:{'class':'btn_wailian','data-id':1}}
        //tip
        {'img':'tip.png',x:50,y:50,attr:{'class':'tip'}}
    ]
}
