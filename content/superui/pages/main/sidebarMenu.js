(function ($) {
    $.fn.sidebarMenu = function (options) {
        options = $.extend({}, $.fn.sidebarMenu.defaults, options || {});
        var target = $(this);
        target.addClass('nav');
        target.addClass('nav-list');
        if (options.data) {
            init(target, options.data);
        }
        else {
            if (!options.url) return;
            $.getJSON(options.url, options.param, function (data) {
                init(target, data);
            });
        }
        var url = window.location.pathname;
        function init(target, data) {
            $.each(data, function (i, item) {
                //如果标签是isHeader
                var header = $('<li class="heading"></li>');
                if (item.isHeader != null && item.isHeader === true) {
                    var h3 = $('<h3 class="uppercase"></h3>');
                    h3.append(item.text);
                    header.append(h3);
                    target.append(header);
                    return;
                }
                //如果不是header

                var li = $('<li class="nav-item "></li>');
                var a = $('<a></a>');
                var icon = $('<i></i>');
               
                icon.addClass(item.icon);
                var isOpen = item.isOpen;
              
                var text = $(' <span class="title"></span>');
                text.addClass('menu-text').text(item.text);
                a.append(icon);
                a.append(text);
                if (isOpen === true) {
                    li.addClass("open");
                }
                if (item.children && item.children.length > 0) {
                    a.attr('href', 'javascript:void(0)');
                    a.addClass("nav-link");
                    a.addClass('nav-toggle');
                    var arrow = $('<span></span>');
                    arrow.addClass('arrow');
                    a.append(arrow);
                    li.append(a);
                    var menus = $('<ul></ul>');
                    menus.addClass('sub-menu');
                    if (isOpen===true) {
                        menus.css("display", "block");
                    } else {
                        menus.css("display", "none");
                    }
                    init(menus, item.children);
                    li.append(menus);
                }
                else {

                    if (item.targetType != null && item.targetType === "blank") //代表打开新页面
                    {
                        a.attr("href", item.url);
                        a.attr("target", "_blank");

                    }
                    else if (item.targetType != null && item.targetType === "ajax") { //代表ajax方式打开页面
                        a.attr("href", item.url);
                        a.addClass("ajaxify");
                    }
                     else if (item.targetType != null && item.targetType === "iframe-tab") {
                        var href = 'addTabs({id:\'' + item.id + '\',title: \'' + item.text + '\',close: true,url: \'' + item.url + '\'});';
                        a.attr('onclick', href);
                     }
                     else if (item.targetType != null && item.targetType === "iframe") { //代表单iframe页面
                        a.attr("href", item.url);
                        a.addClass("iframeOpen");
                        $("#iframe-main").addClass("tab_iframe");
                    } else {
                         a.attr("href", item.url);
                         a.addClass("iframeOpen");
                         $("#iframe-main").addClass("tab_iframe");
                    }
                    a.addClass("nav-link");
                    var badge = $("<span></span>");
                    // <span class="badge badge-success">1</span>
                    if (item.tip != null && item.tip > 0) {
                        badge.addClass("badge").addClass("badge-success").text(item.tip);
                    }
                    a.append(badge);
                    li.append(a);
                }
                target.append(li);
            });
        }
    }

    $.fn.sidebarMenu.defaults = {
        url: null,
        param: null,
        data: null
    };
})(jQuery);

//sidebar - menu组件封装
//在页面上面直接调用sidebar - menu的方法
