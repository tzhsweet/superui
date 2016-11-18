
var Dashboard = function () {

    return {
        initChat1: function () {
            $('#statistics_1').highcharts({
                title: {
                    text: '2015年订单销量',
                    x: 0 //center
                },
                subtitle: {
                    text: '订单销量',
                    x: 0
                },
                xAxis: {
                    categories: ['1月', '2月', '3月', '4月', '5月', '6月',
                                 '7月', '8月', '9月', '10月', '11月', '12月']
                },
                yAxis: {
                    title: {
                        text: '(万)元'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '元'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'SuperUI',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'SuperShop',
                    data: [1, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'SuperMgr',
                    data: [2, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'SuperShop企业版',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }]
            });
        },
        initChat2: function () {
            $('#statistics_2').highcharts({
                title: {
                    text: '2015年利润统计',
                    x: 0 //center
                },
                subtitle: {
                    text: '利润销量',
                    x: 0
                },
                xAxis: {
                    categories: ['1月', '2月', '3月', '4月', '5月', '6月',
                                 '7月', '8月', '9月', '10月', '11月', '12月']
                },
                yAxis: {
                    title: {
                        text: '(万)元'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '元'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'SuperUI',
                    data: [1.0, 2.9, 3.5, 4.5, 5.2, 6.5, 4.2, 3.5, 2.3, 1.3, 2.9, 1.6]
                }, {
                    name: 'SuperShop',
                    data: [1, 0.8, 5.7, 1.3, 1.0, 2.0, 2.8, 2.1, 2.1, 1.1, 8.6, 2.5]
                }, {
                    name: 'SuperMgr',
                    data: [2, 0.6, 3.5, 8.4, 1.5, 1.0, 1.6, 1.9, 1.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'SuperShop企业版',
                    data: [3.9, 4.2, 5.7, 8.5, 1.9, 1.2, 1.0, 1.6, 1.2, 1.3, 6.6, 4.8]
                }]
            });
        },

        init: function () {
            this.initChat1();
            this.initChat2();
        }
    };

}();

jQuery(document).ready(function () {
    Dashboard.init(); // init metronic core componets
});
