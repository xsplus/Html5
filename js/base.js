/**
 * Created by Administrator on 2015/12/21 0021.
 */
var win = $(window);

//存储场景ID
var sceneID = '';
$.fn.show = function (before, after, fn, transition) {
    var t = $(this);
    t.addClass('show').css({'transform': before, 'transition': transition});
    sceneID = t;
    if(after){
        window.setTimeout(function () {
            t.css('transform', after);
            var time = parseFloat(t.css('transition-duration')) * 1000;
            window.setTimeout(fn, time);
        }, 1000)
    }else if(fn) fn();
}
var u = navigator.userAgent;
console.log(u)
var sceneslist = [],initfunlist = [],loadingfun;
function scenes_init(cross_screen){
    var u = navigator.userAgent;
    $.isPhone = "ontouchend" in document && u.indexOf('Firefox') < 0 && u.indexOf('Chrome') < 0 ? true : false;
    if($.isPhone){
        $.fn.pitTouch = function(fn){
            $(this).on('touchstart',fn);
        }
    }else{
        $.fn.pitTouch = function(fn){
            $(this).on('click',fn);
        }
    }
    if($.isPhone && cross_screen){
        $('body').addClass('phone').height(win.width());
        win.resize(function() {
            $('body').height(win.width());
        })
        $.size = function(k) {
            if (k == 'h')return win.width();
            else if (k == 'w') return win.height();
            else return {h: win.width(), w: win.height()};
        }
    }else {
        $.size = function (k) {
            if (k == 'h')  return win.height();
            else if (k == 'w') return win.width();
            else  return {h: win.height(), w: win.width()};
        }
    }
    $.cross_screen = cross_screen;
}
function createScenes(scenes,cross_screen) {
    scenes_init(cross_screen);
    var load_sum = 0, load_n = 0;
    for (var i = 0; i < scenes.length; i++) {
        (function (scene) {
            scene = $.extend({
                'path': '', /*图片根目录*/
                'debug': false, /*是否开启调试模式*/
                'auto_w': true, /*是否自动适应宽度*/
                'auto_h': true, /*是否自动适应高度*/
                'show': false,
                'layers': []                             /*场景的图层数据*/
            }, scene)
            if (scene.debug) {
                scene.box.addClass('debug').append("<div class='pos_box'></div>").on({
                    'mousemove': function (e) {
                        $(this).children('.pos_box').css({'left': e.pageX + 10, 'top': e.pageY + 10}).html('x:' + e.pageX + '<br>' + 'y:' + e.pageY);
                    }
                });
                var auto_create_btn = $('<button class="auto_create_btn">生成代码</button>');
                auto_create_btn.on('click',function(){
                    var layers = '\n';
                    for (var j = 0; j < scene.layers.length; j++) {
                        var layer = {}
                        if(scene.layers[j].img) layer.img = scene.layers[j].img;
                        if(scene.layers[j].tag) layer.tag = scene.layers[j].tag;
                        var x = parseInt(scene.layers[j].obj.css('left'));
                        if(x) layer.x = x;
                        var y = parseInt(scene.layers[j].obj.css('top'));
                        if(y) layer.y = y;
                        if(scene.layers[j].attr) {
                            layer.attr = scene.layers[j].attr;
                            if(layer.attr.class)layer.attr.class = layer.attr.class.replace(' layer','');
                        }
                        if(scene.layers[j].css) layer.css = scene.layers[j].css;
                        if(scene.layers[j].isbg) layer.isbg = true;
                        layers += JSON.stringify(layer) + ',\n';
                    }
                    console.log(layers);
                })
                scene.box.append(auto_create_btn);
                $('html,body').css('overflow','scroll');
            }
            var scale = {w: 1, h: 1},offset = {x: 0, y: 0}, bg_style = {scale: 1, offsetX: 0, offsetY: 0};
            /*记录长和宽的比例*/
            var layers_n = 0;
            for (var j = 0; j < scene.layers.length; j++) {
                (function (layer) {
                    layer = $.extend({ attr:{}, tag:'div', x:0, y:0, w:0, h:0 },layer);
                    layer.attr.class = layer.attr.class ? layer.attr.class + ' layer' : 'layer';
                    var obj = $('<' + layer.tag + '/>').attr(layer.attr).css(layer.css);
                    scene.layers[j].obj = obj;
                    if (layer.img) {
                        var img = new Image();
                        img.src = scene.path + layer.img;
                        load_sum++;
                        img.onload = function () {
                            if(!layer.w) layer.w = img.width;
                            if(!layer.h) layer.h = img.height;
                            obj.css({ 'background-image': 'url(' + scene.path + layer.img + ')'});
                            if(scene.debug){
                                drawobj(layer.x, layer.y, layer.w, layer.h);
                            }
                            load_n++;
                            loadingfun(load_n,load_sum);
                            if(++layers_n >= scene.layers.length){
                                resize();
                            }
                        }
                    }else{
                        layers_n++;
                        if(scene.debug){
                            drawobj(layer.x, layer.y, layer.w, layer.h);
                        }
                    }
                    scene.box.append(obj);
                    if(scene.debug && !layer.isbg){
                        var startPos,z_index = 999999;
                        //触摸事件自定义
                        obj.on('mousedown', function (event) {
                            startPos = {x: layer.x-event.pageX, y:layer.y-event.pageY };    //取第一个touch的坐标值
                            scene.box.on('mousemove',mousemove);
                            scene.box.one('mouseup',mouseup);
                            obj.addClass('moving');
                        });
                        obj.css('z-index',z_index).dblclick(function(){
                            obj.css('z-index',--z_index)
                        })
                        function mousemove(event) {
                            layer.x = event.pageX + startPos.x;
                            layer.y = event.pageY + startPos.y;
                            event.preventDefault();      //阻止触摸事件的默认行为，即阻止滚屏
                            obj.css({'left': layer.x, 'top': layer.y})
                        }
                        function mouseup(event) {
                            //解绑事件
                            event.preventDefault();
                            scene.box.off('mousemove',mousemove);
                            obj.removeClass('moving');
                        }
                    }
                    var autoSize;
                    if (scene.auto_h && scene.auto_w) {
                        if(layer.isbg){
                            autoSize = function () { drawobj(layer.x + bg_style.offsetX, layer.y + bg_style.offsetY, layer.w * bg_style.scale, layer.h * bg_style.scale); }
                        }else{
                            autoSize = function () { drawobj(layer.x * scale + offset.x, layer.y * scale + offset.y, layer.w * scale, layer.h * scale); }
                        }
                    } else {
                        autoSize = function () { drawobj(layer.x * scale,layer.y * scale,layer.w * scale,layer.h * scale); }
                    }
                    if (autoSize && !scene.debug) obj.on('autoSize', autoSize)
                    function drawobj(x,y,w,h) {
                        obj.css({'left': x, 'top': y, 'width': w, 'height': h});
                    }
                })(scene.layers[j])
            }
            function resize() {
                var size = $.size();
                if (scene.auto_h) {
                    if (scene.auto_w) {
                        var scaleW = size.w / scene.width;
                        var scaleH = size.h / scene.height;
                        if (scaleW > scaleH) {
                            var tmp = (scaleW - scaleH) / 2;
                            offset = {x: tmp * scene.width, y: 0};
                            bg_style = {scale: scaleW, offsetX: 0, offsetY: -tmp * scene.height};
                            scale = scaleH;
                        } else {
                            var tmp = (scaleH - scaleW) / 2;
                            offset = {x: 0, y: tmp * scene.height};
                            bg_style = {scale: scaleH, offsetX: -tmp * scene.width, offsetY: 0};
                            scale = scaleW;
                        }
                    } else {
                        scale = size.h / scene.height;
                    }
                } else if (scene.auto_w) {
                    scale = size.h / scene.width;
                }
                scene.box.children('.layer').trigger('autoSize');
            }
            win.resize(function(){
                if (!scene.debug) resize()
            });
            if (scene.show){
                scene.box.addClass('show');
                resize();
            }
        })(scenes[i])
    }
}