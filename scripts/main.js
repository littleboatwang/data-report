var chartScheduleProvinces = echarts.init(document.getElementById('schedule-provinces'));

var optionScheduleProvinces = {
    title: {
        text: '不同省份《缘分》的排片率情况',
        top: 'top',
        left: 'center'
    },
    tooltip: {},
    visualMap: {
        type: 'continuous',
        min: 0,
        max: 15,
        calculable: true,
        realtime: false,
        color: ['#006edd', '#e0ffff']
    },
    series: [
        {
            name: '《缘分》排片率',
            type: 'map',
            map: 'china',
            data: [
                {name: '安徽', value: 10.69497499},
                {name: '北京', value:	5.052631586},
                {name: '福建', value:	8.878846191},
                {name: '甘肃', value:	9.691358078},
                {name: '广东', value:	7.43012604},
                {name: '广西', value:	11.68532122},
                {name: '贵州', value:	12.10466672},
                {name: '海南', value: 5.616666794},
                {name: '河北', value:	11.28636375},
                {name: '河南', value: 10.88792282},
                {name: '黑龙江', value: 8.941935533},
                {name: '湖北', value:	9.453554551},
                {name: '湖南', value:	10.15017311},
                {name: '吉林', value:	8.408450768},
                {name: '江苏', value:	7.630065412},
                {name: '江西', value:	9.805113704},
                {name: '辽宁', value:	7.889108925},
                {name: '内蒙古', value: 8.122449128},
                {name: '宁夏', value:	8.538888984},
                {name: '青海', value:	14.00344839},
                {name: '山东', value:	6.96136371},
                {name: '山西', value:	9.448760374},
                {name: '陕西', value:	8.741025675},
                {name: '上海', value:	8.538547591},
                {name: '四川', value:	9.084914885},
                {name: '天津', value:	6.760975624},
                {name: '西藏', value:	3.030000019},
                {name: '新疆', value:	7.985294107},
                {name: '云南', value:	7.853125035},
                {name: '浙江', value: 7.789024413},
                {name: '重庆', value:	13.50795462},
                {name: '香港', value: 4.599999905},
                {name: '澳门', value:	7.174999923}
            ]
        }
    ]
}

chartScheduleProvinces.setOption(optionScheduleProvinces);


var chartTrendsOfYuanfen = echarts.init(document.getElementById('trends-of-yuanfen'));

var optionTrensOfYuanfen = {
    title: {
        text: '《缘分》的日票房和排片率走势图',
        top: 'top',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['票房', '排片率'],
        bottom: 'bottom',
        left: 'center'
    },
    xAxis: [{
        type: 'category',
        boundryGap: false,
        data: ['3月25日', '3月26日', '3月27日', '3月28日', '3月29日', '3月30日', '4月1日', '4月2日', '4月3日', '4月4日', '4月5日', '4月6日', '4月7日', '4月8日', '4月9日']
    }],
    yAxis: [{
        type: 'value',
        name: '票房'
    }, {
        type: 'value',
        name: '排片率'
    }],
    series: [
        // 由于中间有数据缺失，这里忽略了12号和20号的数据
        {
            name: '票房',
            type: 'line',
            yAxisIndex: 0,
            data: [428430, 457721, 412363, 227165, 209777, 197774, 191887, 121017, 57357, 50651, 36999, 13675, 14198, 12172, 4498, 5700]
        },
        {
            name: '排片率',
            type: 'line',
            yAxisIndex: 1,
            data: [9.196855402, 8.763812663, 8.53588914, 9.543859697, 9.280952437, 9.476190549, 9.53192495, 5.61135138, 6.600000042, 6.98350519, 7.266666694, 7.063855499, 7.579120895, 6.921839144, 8.056410288, 7.361764736]
        }
    ]
};

chartTrendsOfYuanfen.setOption(optionTrensOfYuanfen);


var chartReasons = echarts.init(document.getElementById('reasons'));

optionReasons = {
    title: {
        text: '2016年上半年电影重映背后的原因',
        top: 'top',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        data: []
    },
    series: [
        {
            name: '原因',
            type: 'pie',
            radius: '55%',
            data: [
                {name: '1', value: 3},
                {name: '2', value: 2},
                {name: '3', value: 9},
                {name: '4', value: 56},
                {name: '5', value: 1},
                {name: '6', value: 6},
                {name: '7', value: 18}
            ]
        }
    ]
}

chartReasons.setOption(optionReasons);


var chartBoxes = echarts.init(document.getElementById('boxes-2016'));

optionBoxes = {
    title: {
        text: '2016年电影票房',
        subtext: '同时按新上映与重映、好片与烂片进行对比',
        top: 'top',
        left: 'center'
    },
    series: [
        {

        }
    ]
}

chartBoxes.setOption(optionBoxes);
