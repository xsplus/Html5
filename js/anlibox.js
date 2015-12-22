/**
 * Created by theone on 2015/12/22.
 */
sceneslist.push({
    'box':$('.scene.scene-anlibox'),       /*�����ı�ǩ*/
    'debug':false,                            /*�Ƿ�������ģʽ*/
    'width':4742,                            /*�����Ŀ�*/
    'height':2667,                           /*�����ĸ�*/
    'path':'img/anlibox/',                  /*ͼƬ��Ŀ¼*/
    'auto_w':true,                        /*�Ƿ��Զ���Ӧ���*/
    'auto_h':true,                         /*�Ƿ��Զ���Ӧ�߶�*/
    'layers':[                              /*������ͼ������*/
        {"img":"bg.png","isbg":true},
        {"img":"cankao.png","x":3540,"y":87},
        {"img":"fanhui.png","x":128,"y":132},
        {"img":"yinyue.png","x":4380,"y":96},
        {"img":"shenyin.png","x":4493,"y":153},
        {"img":"anli_box.png","x":128,"y":353},
        {"img":"wenti_box.png","x":516,"y":504},
    ]
})

initfunlist.push(function(){

    $('.qidong').pitTouch(function(){
        console.log("������ҳ");
        $(this).addClass('btndoudong');
        setTimeout(function(){
            $('.scene-index').removeClass('show');
            $('.scene-main').addClass('show');
            $(window).resize();
        },300)
    })

    $('.chakan').pitTouch(function(){
        console.log("���밸��ҳ");
        $(this).addClass('btndoudong');
        setTimeout(function(){
            $('.scene-index').removeClass('show');
            $('.scene-anli').addClass('show');
            $(window).resize();
        },300)
    })
})