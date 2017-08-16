var scheduleProvinces = echarts.init(document.getElementById('schedule-provinces'));

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

scheduleProvinces.setOption(optionScheduleProvinces);




var option = {
    title: {
        text: '不同省份《缘分》的排片率',
        top: 'top',
        left: 'center'
    },
    tooltip: {},
    legend: {
        show: false,
        data: ['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
