var chartScheduleProvinces = echarts.init(document.getElementById('schedule-provinces'));

var optionScheduleProvinces = {
    title: {
        text: '不同省份《缘分》的排片率情况',
        top: 'top',
        left: 'center'
    },
    tooltip: {
        formatter: '{b}: {c}'
    },
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
};

chartScheduleProvinces.setOption(optionScheduleProvinces);

var myChart = echarts.init(document.getElementById('juxing'));

option = {
    title : {
        text: '2017年快递业务量前15位城市情况',
        subtext: '单位/万件'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b}: {c}"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : [
        {
            name:'矩形图',
            type:'treemap',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}"
                    },
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data:[
                {
                    name: '广州',
                    value: '354940.7'
                },
                {
                    name: '上海',
                    value: '279773.8'
                },
                {
                    name: '深圳',
                    value: '234596.4'
                },
                {
                    name: '金华',
                    value: '224906.8'
                },
                {
                    name: '杭州',
                    value: '206469.3'
                },
                {
                    name: '北京',
                    value: '204429.5'
                },
                {
                    name: '东莞',
                    value: '110583.4'
                },
                 {
                    name: '苏州',
                    value: '92439.1'
                },
                {
                    name: '成都',
                    value: '74170.5'
                },
                {
                    name: '泉州',
                    value: '66599'
                },
                {
                    name: '温州',
                    value: '64517.1'
                },
                {
                    name: '武汉',
                    value: '64438.4'
                },
                {
                    name: '南京',
                    value: '57011.7'
                },
                {
                    name: '宁波',
                    value: '56929.8'
                },
                {
                    name: '揭阳',
                    value: '52678.2'
                },


            ]
        }
    ]
};
  myChart.setOption(option);

var chartTrendsOfYuanfen = echarts.init(document.getElementById('trends-of-yuanfen'));
var chartTrendsOfYuanfen_2 = echarts.init(document.getElementById('trends-of-yuanfen-2'));

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
        data: ['3月25日', '3月26日', '3月27日', '3月28日', '3月29日', '3月30日', '3月31日', '4月1日', '4月2日', '4月3日', '4月4日', '4月5日', '4月6日', '4月7日', '4月8日', '4月9日']
    }],
    yAxis: [{
        type: 'value',
        name: '票房',
        axisLine: {
            lineStyle: {
                color: '#5793f3'
            }
        }
    }, {
        type: 'value',
        name: '排片率',
        axisLine: {
            lineStyle: {
                color: '#d14a61'
            }
        }
    }],
    series: [
        // 由于中间有数据缺失，这里忽略了12号和20号的数据
        {
            name: '票房',
            type: 'line',
            showAllSymbol: true,
            yAxisIndex: 0,
            data: [428430, 457721, 412363, 227165, 209777, 197774, 191887, 121017, 57357, 50651, 36999, 13675, 14198, 12172, 4498, 5700]
        },
        {
            name: '排片率',
            type: 'line',
            showAllSymbol: true,
            yAxisIndex: 1,
            data: [9.196855402, 8.763812663, 8.53588914, 9.543859697, 9.280952437, 9.476190549, 9.53192495, 5.61135138, 6.600000042, 6.98350519, 7.266666694, 7.063855499, 7.579120895, 6.921839144, 8.056410288, 7.361764736]
        }
    ],
    color: ['#5793f3', '#d14a61']
};

chartTrendsOfYuanfen.setOption(optionTrensOfYuanfen);
chartTrendsOfYuanfen_2.setOption(optionTrensOfYuanfen);

var chartReasons = echarts.init(document.getElementById('reasons'));

var optionReasons = {
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
                {name: '分批次上映', value: 3},
                {name: '影片获奖', value: 2},
                {name: '配合续集宣传', value: 9},
                {name: '影院的新片较少', value: 56},
                {name: '由电影展组织', value: 1},
                {name: '“怀旧”', value: 6},
                {name: '为了增加收入', value: 18}
            ]
        }
    ]
};

chartReasons.setOption(optionReasons);

var chartBoxes = echarts.init(document.getElementById('boxes-2016'));

var optionBoxes = {
    title: {
        text: '2016年电影票房',
        subtext: '同时按新上映与重映、好片与烂片进行对比',
        top: 'top',
        left: 'center'
    },
    tooltip: {},
    legend: {
        selectedMode: 'mutliple',
        itemGap: 5
    },
    series: [
        {
            name: '电影票房',
            type: 'treemap',
            roam: false,
            visibleMin: 300,
            label: {
                show: true,
                formatter: '{b}'
            },
            levels: [
                {
                    itemStyle: {
                        normal: {
                            borderWidth: 0,
                            gapWidth: 5
                        }
                    }
                },
                {
                    itemStyle: {
                        normal: {
                            gapWidth: 1
                        }
                    }
                },
                {
                    colorSaturation: [0.35, 0.5],
                    itemStyle: {
                        normal: {
                            gapWidth: 1,
                            borderColorSaturation: 0.6
                        }
                    }
                }
            ],
            data: [{
                name: '新上映',
                children: [{
                    name: '好片',
                    children: [
                        {name: '美人鱼', value: 684816852}, {name: '疯狂动物城', value: 252757245}, {name: '魔兽', value: 237471311}, {name: '西游记之孙悟空三打白骨精', value: 233766663}, {name: '美国队长3', value: 203145867}, {name: '奇幻森林', value: 162057687}, {name: '叶问3', value: 134961140}, {name: 'X战警：天启', value: 129307891}, {name: '北京遇上西雅图之不二情书', value: 127646219}, {name: '功夫熊猫3', value: 102680344}, {name: '蝙蝠侠大战超人：正义黎明', value: 99890321}, {name: '惊天魔盗团2', value: 83831133}, {name: '愤怒的小鸟', value: 83306127}, {name: '独立日：卷土重来', value: 66700689}, {name: '爱丽丝梦游仙境2：镜中奇遇记', value: 63584084}, {name: '荒野猎人', value: 62209839}, {name: '火锅英雄', value: 58128707}, {name: '伦敦陷落', value: 56933823}, {name: '我的特工爷爷', value: 54090797}, {name: '绝地逃亡', value: 50632165}, {name: '海底总动员2：多莉去哪儿', value: 38720209}, {name: '寒战2', value: 37030970}, {name: '神战：权力之眼', value: 36494905}, {name: '大鱼海棠', value: 35916174}, {name: '谁的青春不迷茫', value: 29837022}, {name: '高跟鞋先生', value: 27695586}, {name: '睡在我上铺的兄弟', value: 21162088}, {name: '忍者神龟2：破影而出', value: 20180122}, {name: '分歧者3：忠诚世界', value: 20108797}, {name: '猎神：冬日之战', value: 17744233}, {name: '泰山归来：险战丛林', value: 16582519}, {name: '火影忍者剧场版：博人传', value: 16042860}, {name: '三人行', value: 15728071}, {name: '超脑48小时', value: 15223189}, {name: '百鸟朝凤', value: 14688865}, {name: '赏金猎人', value: 14347805}, {name: '陆垚知马俐', value: 12758908}, {name: '过年好', value: 8326210}, {name: '冰河追凶', value: 7010865}, {name: '哆啦A梦：新·大雄的日本诞生', value: 6382590}, {name: '圣斗士星矢', value: 6006488}, {name: '幻体：续命游戏', value: 5927687}, {name: '大唐玄奘', value: 5712746}, {name: '年兽大作战', value: 5678009}, {name: '垫底辣妹', value: 5629723}, {name: '刑警兄弟', value: 5448157}, {name: '熊出没之熊心归来', value: 4873564}, {name: '谍影特工', value: 4407530}, {name: '鼠来宝4：萌在囧途', value: 4024821}, {name: '惊天大逆转', value: 3940636}, {name: '地心营救', value: 3909522}, {name: '爱宠大机密', value: 3553941}, {name: '废柴特工', value: 3477958}, {name: '神秘世界历险记3', value: 3188620}, {name: '快手枪手快枪手', value: 3123646}, {name: '星球大战：原力觉醒', value: 3050718}, {name: '灵偶契约', value: 2934025}, {name: '托马斯和朋友们：多多岛之迷失宝藏', value: 2684205}, {name: '摇滚藏獒', value: 2374294}, {name: '天亮之前', value: 2118437}, {name: '再见，在也不见', value: 1895176}, {name: '唐人街探案', value: 1834656}, {name: '纽约纽约', value: 1670122}, {name: '最后的巫师猎人', value: 1457981}, {name: '洛杉矶捣蛋计划', value: 1338662}, {name: '云中行走', value: 1211895}, {name: '猫脸老太太', value: 1055775}, {name: '飞鹰艾迪', value: 934271}, {name: '哪一天我们会飞', value: 914823}, {name: '老炮儿', value: 786611}, {name: '寻龙诀', value: 767883}, {name: '发条城市', value: 695045}, {name: '青蛙王国之冰冻大冒险', value: 635243}, {name: '箭士柳白猿', value: 499005}, {name: '刺猬小子之天生我刺', value: 491308}, {name: '我不是王毛', value: 428633}, {name: '六弄咖啡馆', value: 406761}, {name: '情况不妙', value: 393062}, {name: '红色警戒999', value: 375804}, {name: '白毛女', value: 370957}, {name: '超级保镖', value: 347221}, {name: '巴霍巴利王：开端', value: 336222}, {name: '夺命枪火', value: 288036}, {name: '路边野餐', value: 219569}, {name: '老阿姨', value: 146015}, {name: '亡魂复活', value: 144103}, {name: '山那边有匹马', value: 60917}, {name: '终极胜利', value: 42009}, {name: '果宝特攻之水果大逃亡', value: 39403}, {name: '神探夏洛克', value: 22902}, {name: '不朽的时光', value: 15906}, {name: '我的1000万', value: 15450}, {name: '舌尖上的新年', value: 4227}, {name: '白蛇传', value: 4220}, {name: '我的“狐朋狗友”', value: 3563}, {name: '老警', value: 3366}, {name: '冬', value: 2980}, {name: '通灵神探', value: 1710}, {name: '猿创世界之熊孩子部落', value: 1042}, {name: '孙悟空三打白骨精', value: 330}, {name: '过年', value: 230}, {name: '天黑请闭眼', value: 0}, {name: '王者之剑', value: 0}
                    ]
                }, {
                    name: '烂片',
                    children: [
                        {name: '澳门风云3', value: 215848850}, {name: '卧虎藏龙：青冥宝剑', value: 40332599}, {name: '致青春·原来你还在这里', value: 22703224}, {name: '封神传奇', value: 17352359}, {name: '魔宫魅影', value: 14554731}, {name: '梦想合伙人', value: 13629789}, {name: '女汉子真爱公式', value: 10962401}, {name: '奔爱', value: 7446639}, {name: '所以……和黑粉结婚了', value: 7240453}, {name: '末日迷踪', value: 5891659}, {name: '夜孔雀', value: 5773443}, {name: '我的新野蛮女友', value: 5705239}, {name: '谋杀似水年华', value: 3399344}, {name: '爱情麻辣烫之情定终身', value: 2886834}, {name: '我和我们', value: 2330920}, {name: '我叫MT之山口山战记', value: 2139206}, {name: '蒸发太平洋', value: 1896389}, {name: '钢刀', value: 1859963}, {name: '筷仙', value: 1831509}, {name: '青蛙总动员', value: 1640634}, {name: '妖医', value: 1518056}, {name: '床下有人3', value: 1514985}, {name: '蜜月酒店杀人事件', value: 1350404}, {name: '笔仙诡影', value: 1253991}, {name: '马小乐之玩具也疯狂', value: 1242470}, {name: '泰迪熊之玩具大战', value: 1182593}, {name: '恐怖将映', value: 1179159}, {name: '糖果世界大冒险', value: 1111528}, {name: '太空熊猫英雄归来', value: 1043332}, {name: '斗龙战士之星印罗盘', value: 1026017}, {name: '超能太阳鸭', value: 1022856}, {name: '恶人报喜', value: 1014813}, {name: '死亡游戏', value: 943559}, {name: '阿里巴巴2所罗门封印', value: 931161}, {name: '宝贝当家', value: 923686}, {name: '诡娃', value: 828486}, {name: '水果宝贝之水果总动员', value: 699464}, {name: '不速之客', value: 665336}, {name: '恐怖禁忌之红旗袍', value: 651326}, {name: '死亡笔记', value: 648770}, {name: '记忆碎片', value: 588290}, {name: '我们毕业啦', value: 547425}, {name: '泡沫之夏', value: 537088}, {name: '大火种', value: 532506}, {name: '笔仙撞碟仙', value: 520504}, {name: '魔轮', value: 486274}, {name: '致我们终将到来的爱情', value: 435910}, {name: '整形师·脸', value: 430916}, {name: '恭喜发财之谈钱说爱', value: 382868}, {name: '半熟少女', value: 380844}, {name: '妄想症', value: 360142}, {name: '动植物大战', value: 351550}, {name: '真相禁区', value: 327157}, {name: '丑小鸭历险记', value: 318876}, {name: '失眠男女', value: 316813}, {name: '我的老婆是明星', value: 275895}, {name: '喜乐长安', value: 264609}, {name: '张震讲故事之合租屋', value: 255650}, {name: '小蚂蚁之环球大冒险', value: 224165}, {name: '恐怖照相机', value: 220814}, {name: '魔都凶音', value: 206291}, {name: '恶灵之门', value: 199496}, {name: '轩辕大帝', value: 198600}, {name: '致命怪谈', value: 158245}, {name: '龙拳小子', value: 157576}, {name: '隔壁惊魂', value: 155056}, {name: '临时约定', value: 140513}, {name: '极限挑战之皇家宝藏', value: 135136}, {name: '夏有乔木雅望天堂', value: 97913}, {name: '海洋之恋', value: 88130}, {name: '回乡逗儿', value: 84799}, {name: '南口1937', value: 70945}, {name: '午夜寻访录', value: 69383}, {name: '别开门', value: 61698}, {name: '消失爱人', value: 59989}, {name: '少年师爷之大禹宝藏', value: 58341}, {name: '恐怖爱情故事之死亡公路', value: 55045}, {name: '练胆儿', value: 53153}, {name: '708090之深圳恋歌', value: 51280}, {name: '古田会议', value: 46987}, {name: '同城邂逅', value: 46921}, {name: '那件疯狂的小事叫爱情', value: 37000}, {name: '当我们年轻的时候', value: 34535}, {name: '谎言大爆炸', value: 31035}, {name: '男神抱抱', value: 30729}, {name: '咕噜咕噜美人鱼', value: 27167}, {name: '提款机', value: 26079}, {name: '绝战', value: 23760}, {name: '当流星划过天际', value: 21396}, {name: '党的女儿尹灵芝', value: 17250}, {name: '一家老小向前冲', value: 14561}, {name: '国酒', value: 14300}, {name: '女神时代', value: 11311}, {name: '毒中毒', value: 11190}, {name: '自我救赎', value: 7150}, {name: '水滴之梦', value: 3220}, {name: '恶棍天使', value: 3125}, {name: '荒村怨灵', value: 2105}, {name: '索命暹罗之按摩师', value: 1000}, {name: '小小校长', value: 375}, {name: '非同小可', value: 250}, {name: '爸爸我来救你了', value: 75}, {name: '山花烂漫时', value: 65}, {name: '风口青春', value: 60}, {name: '情花谷', value: 0}, {name: '爱在深秋', value: 0}
                    ]
                }]
            }, {
                name: '重映',
                children: [{
                    name: '好片',
                    children: [
                        {name: '线索', value: 3087000}, {name: '缘份', value: 2467986}, {name: '近在咫尺的爱恋', value: 228497}, {name: '判我有罪', value: 200817}, {name: '鸿门宴传奇', value: 122501}, {name: '寻找心中的你', value: 100961}, {name: '国家利益', value: 77228}, {name: '麦兜当当伴我心', value: 35830}, {name: '我的诗篇', value: 28879}, {name: '北京遇上西雅图', value: 21562}, {name: '智取威虎山', value: 10000}, {name: '爱丽丝梦游仙境', value: 6799}, {name: '心迷宫', value: 6350}, {name: '龙凤呈祥', value: 4268}, {name: '十万个冷笑话', value: 950}, {name: '喜马拉雅天梯', value: 574}, {name: '麦田', value: 495}, {name: '邻家特工', value: 469}, {name: '大闹天宫', value: 380}, {name: '被偷走的那五年', value: 326}, {name: '北京爱情故事', value: 283}, {name: '丛林有情狼', value: 267}, {name: '二子开店', value: 230}, {name: '本命年', value: 230}, {name: '敢死队', value: 214}, {name: '如果·爱', value: 205}, {name: '锦衣卫', value: 200}, {name: '杀生', value: 191}, {name: '大城小事', value: 72}, {name: '闺蜜', value: 60}, {name: '叶问2：宗师传奇', value: 59}, {name: '警察故事2013', value: 55}, {name: '一路惊喜', value: 42}, {name: '我的唐朝兄弟', value: 24}, {name: '恋爱通告', value: 20}, {name: '精英部队2：大敌当前', value: 20}, {name: '神奇侠侣', value: 5}, {name: '决战刹马镇', value: 0}, {name: '大块头有大智慧', value: 0}, {name: '大电影2.0之两个傻瓜的荒唐事', value: 0}, {name: '天地逃生', value: 0}, {name: '完美的爱', value: 0}, {name: '新天生一对', value: 0}, {name: '无人驾驶', value: 0}, {name: '最爱', value: 0}, {name: '武侠', value: 0}, {name: '永无止境', value: 0}, {name: '深夜前的五分钟', value: 0}, {name: '玩命追踪', value: 0}, {name: '赵氏孤儿', value: 0}, {name: '非常营救', value: 0}
                    ]
                }, {
                    name: '烂片',
                    children: [
                        {name: '天空的微笑', value: 3060000}, {name: '水墨大别山', value: 2314280}, {name: '摩尔庄园3：魔幻列车大冒险', value: 245937}, {name: '再见我们的十年', value: 162900}, {name: '潜艇总动员3', value: 87000}, {name: '开罗宣言', value: 35063}, {name: '购物女王', value: 32312}, {name: '李三娘', value: 6695}, {name: '王化买父', value: 750}, {name: '京城81号', value: 616}, {name: '爱我就陪我看电影', value: 587}, {name: '意外的恋爱时光', value: 452}, {name: '奔跑吧！兄弟', value: 445}, {name: '回到爱开始的地方', value: 246}, {name: '我是谁2015', value: 210}, {name: '闯堂兔', value: 210}, {name: '闯堂兔2：疯狂马戏团', value: 136}, {name: '宅男总动员', value: 115}, {name: '怖偶', value: 78}, {name: '通灵之六世古宅', value: 68}, {name: '三更车库', value: 63}, {name: '时光恋人', value: 60}, {name: '小时代', value: 40}, {name: '画壁', value: 30}, {name: '丑男大翻身', value: 20}, {name: '我们恋爱吧', value: 20}, {name: '龙骑侠', value: 10}, {name: '三笑之才子佳人', value: 0}, {name: '不爱不散', value: 0}, {name: '分手木马计', value: 0}, {name: '双喜临门', value: 0}, {name: '天际浩劫', value: 0}, {name: '床下有人2', value: 0}, {name: '我只要我们在一起', value: 0}, {name: '我是中国人', value: 0}, {name: '玛德2号', value: 0}, {name: '璀璨的婚礼', value: 0}, {name: '白狐', value: 0}, {name: '荒岛情未了', value: 0}, {name: '落经山', value: 0}, {name: '谍·莲花', value: 0}, {name: '赛尔号大电影之寻找凤凰神兽', value: 0}, {name: '边区造', value: 0}, {name: '门', value: 0}
                    ]
                }]
            }]
        }
    ]
};

chartBoxes.setOption(optionBoxes);

var chartAverageOfBoxes = echarts.init(document.getElementById('average-of-boxes'));

var optionAverageOfBoxes = {
    title: {
        text: '新旧电影日平均票房',
        top: 'top',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {}
        }
    },
    legend: {
        data: ['新上映', '重映'],
        bottom: 'bottom',
        left: 'center'
    },
    xAxis: [{
        type: 'category',
        boundryGap: false,
        data: ['2月1日', '2月2日', '2月3日', '2月4日', '2月5日', '2月6日', '2月7日', '2月8日', '2月9日', '2月10日', '2月11日', '2月12日', '2月13日', '2月14日', '2月15日', '2月16日', '2月17日', '2月18日', '2月19日', '2月20日', '2月21日', '2月22日', '2月23日', '2月24日', '2月25日', '2月26日', '2月27日', '2月28日', '2月29日', '3月1日', '3月2日', '3月3日', '3月4日', '3月5日', '3月6日', '3月7日', '3月8日', '3月9日', '3月10日', '3月11日', '3月12日', '3月13日', '3月14日', '3月15日', '3月16日', '3月17日', '3月18日', '3月19日', '3月20日', '3月21日', '3月22日', '3月23日', '3月24日', '3月25日', '3月26日', '3月27日', '3月28日', '3月29日', '3月30日', '3月31日', '4月1日', '4月2日', '4月3日', '4月4日', '4月5日', '4月6日', '4月7日', '4月8日', '4月9日', '4月10日', '4月11日', '4月12日', '4月13日', '4月14日', '4月15日', '4月16日', '4月17日', '4月18日', '4月19日', '4月20日', '4月21日', '4月22日', '4月23日', '4月24日', '4月25日', '4月26日', '4月27日', '4月28日', '4月29日', '4月30日', '5月1日', '5月2日', '5月3日', '5月4日', '5月5日', '5月6日', '5月7日', '5月8日', '5月9日', '5月10日', '5月11日', '5月12日', '5月13日', '5月14日', '5月15日', '5月16日', '5月17日', '5月18日', '5月19日', '5月20日', '5月21日', '5月22日', '5月23日', '5月24日', '5月25日', '5月26日', '5月27日', '5月28日', '5月29日', '5月30日', '5月31日', '6月1日', '6月2日', '6月3日', '6月4日', '6月5日', '6月6日', '6月7日', '6月8日', '6月9日', '6月10日', '6月11日', '6月12日', '6月13日', '6月14日', '6月15日', '6月16日', '6月17日', '6月18日', '6月19日', '6月20日', '6月21日', '6月22日', '6月23日', '6月24日', '6月25日', '6月26日', '6月27日', '6月28日', '6月29日', '6月30日']
    }],
    yAxis: [{
        type: 'value',
        name: '票房'
    }],
    series: [{
        name: '新上映',
        type: 'line',
        data: [1748.288147, 1680.837158, 1581.85775, 1908.424218, 1910.05149, 1869.275251, 1405.451425, 22776.89084, 19435.96764, 18732.81702, 26507.0285, 25162.41338, 23957.03251, 24107.34193, 12771.52723, 11249.98177, 5636.397654, 4901.751736, 4838.967699, 5896.089922, 5231.754964, 3594.841215, 2362.178604, 2079.039717, 1839.671743, 2112.780257, 3136.036501, 2566.614223, 1104.396697, 960.220414, 864.4697115, 863.0155075, 4650.63476, 6866.736139, 5434.157467, 2305.670281, 3771.39569, 2109.4966, 1846.091219, 3294.60351, 6340.20752, 5501.573889, 1904.050473, 1685.4471, 1519.143126, 1351.498471, 3147.461765, 5181.432789, 4169.715863, 1410.394181, 1348.504267, 1215.190793, 1184.205463, 3978.736572, 5822.584957, 4383.552322, 1359.902102, 1241.553779, 1130.831491, 1056.821861, 3313.513814, 4388.567106, 4848.562716, 3530.998102, 1313.901007, 1153.36285, 1048.343261, 2113.021995, 3275.667208, 2737.868719, 1134.319011, 1083.202794, 1001.15763, 974.9531926, 2398.268122, 3761.74967, 3131.096618, 1211.935628, 1145.093591, 1060.683928, 1017.893911, 2590.57088, 3913.663571, 3318.603563, 1215.832062, 1177.280627, 1079.155002, 1025.707938, 4216.788075, 4826.57253, 5481.428479, 3742.638647, 1562.430412, 1502.22157, 1493.986009, 5892.6, 8092.643912, 6259.804384, 2313.449964, 2010.100786, 1650.018563, 1580.86092, 2036.885572, 3374.7255, 2651.212452, 1038.330054, 957.9640099, 879.1575454, 774.2539332, 2832.042264, 3296.21673, 2678.905388, 822.821135, 772.6945618, 707.7826374, 652.5822314, 1643.800706, 2919.051975, 2412.356276, 759.7541788, 955.5447652, 2815.646584, 701.6036807, 3169.04878, 4548.619936, 3692.530826, 1635.719062, 2490.066026, 9523.572723, 11011.6415, 8403.798318, 5540.915263, 3095.010054, 2076.46994, 1791.27091, 1606.295844, 1462.82615, 2137.718671, 3739.126776, 3187.953416, 1168.275879, 1125.980219, 1050.751529, 1084.463411, 5488.17656, 6808.040348, 5782.041912, 2679.315959, 2518.197552, 2403.389556, 2542.506588]
    }, {
        name: '重映',
        type: 'line',
        data: [61.37931034, 128.6785714, 40.9, 7.681818182, 23.11363636, 23.65217391, 113.3269231, 500.4791667, 289.0217391, 378.9574468, 2111.685714, 25.3125, 16.5625, 20071.42857, 20357.14286, 20562.5, 21375, 19250, 19500, 19250, 19375, 19250, 19437.5, 20142.85714, 20285.71429, 20812.5, 21062.5, 20071.42857, 20800, 20875, 18142.85714, 22500, 24000, 230.8410758, 441.2054795, 437.8062827, 814.5213675, 917.8631579, 2823.393939, 7805.714286, 338.2931034, 432.3625, 504.7559055, 1162.189781, 1208.206897, 1270.205357, 1425.971154, 852.694704, 856.2278481, 680.4503597, 506.6111111, 417.0902141, 400.266055, 748.6784074, 1430.85641, 701.5625, 726.8652695, 676.0610169, 1534.89011, 89.30952381, 139.908046, 360.6976744, 203.7181208, 215.8148148, 11.02702703, 119.0344828, 264.3684211, 0, 95.67873303, 148.2909836, 174.1135371, 88.45539906, 20000, NaN, NaN, NaN, NaN, NaN, 18000, 117.0543933, 135.7694611, 111.5130719, 99.26608187, 68.83076923, 48.17554859, 33.29655172, 117.8263473, 83.28703704, NaN, 202.2429907, 15000, 15000, NaN, 14000, NaN, NaN, 5675, NaN, 878, NaN, NaN, NaN, 0, 200.8, 965.8333333, NaN, NaN, NaN, 1850.571429, NaN, NaN, 10000, NaN, NaN, NaN, NaN, NaN, 7255, NaN, NaN, NaN, 3320, 1090, NaN, NaN, NaN, NaN, 105.9344978, 131.3477089, 137.0092025, 90.93373494, 83.07430341, 142.1774194, 40.71111111]
    }]};

chartAverageOfBoxes.setOption(optionAverageOfBoxes);

var chartBoxesOldMovies = echarts.init(document.getElementById('boxes-old-movies'));

var optionBoxesOldMovies = {
    title: {
        text: '2016年重映电影的票房情况',
        top: 'top',
        left: 'center'
    },
    tooltip: {},
    legend: {
        selectedMode: 'mutliple',
        itemGap: 5
    },
    series: [
        {
            name: '重映电影',
            type: 'treemap',
            roam: false,
            visibleMin: 300,
            label: {
                show: true,
                formatter: '{b}'
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff'
                }
            },
            itemStyle: {
                normal: {
                    gapWidth: 2
                }
            },
            data: [
                {name: '线索', value: 3087000},
                {name: '天空的微笑', value: 3060000},
                {name: '缘份', value: 2467986},
                {name: '水墨大别山', value: 2314280},
                {name: '摩尔庄园3：魔幻列车大冒险', value: 245937},
                {name: '近在咫尺的爱恋', value: 228497},
                {name: '判我有罪', value: 200817},
                {name: '再见我们的十年', value: 162900},
                {name: '鸿门宴传奇', value: 122501},
                {name: '寻找心中的你', value: 100961},
                {name: '潜艇总动员3', value: 87000},
                {name: '国家利益', value: 77228},
                {name: '麦兜当当伴我心', value: 35830},
                {name: '开罗宣言', value: 35063},
                {name: '购物女王', value: 32312},
                {name: '我的诗篇', value: 28879},
                {name: '北京遇上西雅图', value: 21562},
                {name: '智取威虎山', value: 10000},
                {name: '爱丽丝梦游仙境', value: 6799},
                {name: '李三娘', value: 6695},
                {name: '心迷宫', value: 6350},
                {name: '龙凤呈祥', value: 4268},
                {name: '十万个冷笑话', value: 950},
                {name: '王化买父', value: 750},
                {name: '京城81号', value: 616},
                {name: '爱我就陪我看电影', value: 587},
                {name: '喜马拉雅天梯', value: 574},
                {name: '麦田', value: 495},
                {name: '邻家特工', value: 469},
                {name: '意外的恋爱时光', value: 452},
                {name: '奔跑吧！兄弟', value: 445},
                {name: '大闹天宫', value: 380},
                {name: '被偷走的那五年', value: 326},
                {name: '北京爱情故事', value: 283},
                {name: '丛林有情狼', value: 267},
                {name: '回到爱开始的地方', value: 246},
                {name: '二子开店', value: 230},
                {name: '本命年', value: 230},
                {name: '敢死队', value: 214},
                {name: '我是谁2015', value: 210},
                {name: '闯堂兔', value: 210},
                {name: '如果·爱', value: 205},
                {name: '锦衣卫', value: 200},
                {name: '杀生', value: 191},
                {name: '闯堂兔2：疯狂马戏团', value: 136},
                {name: '宅男总动员', value: 115},
                {name: '怖偶', value: 78},
                {name: '大城小事', value: 72},
                {name: '通灵之六世古宅', value: 68},
                {name: '三更车库', value: 63},
                {name: '时光恋人', value: 60},
                {name: '闺蜜', value: 60},
                {name: '叶问2：宗师传奇', value: 59},
                {name: '警察故事2013', value: 55},
                {name: '一路惊喜', value: 42},
                {name: '小时代', value: 40},
                {name: '画壁', value: 30},
                {name: '我的唐朝兄弟', value: 24},
                {name: '丑男大翻身', value: 20},
                {name: '我们恋爱吧', value: 20},
                {name: '恋爱通告', value: 20},
                {name: '精英部队2：大敌当前', value: 20},
                {name: '龙骑侠', value: 10},
                {name: '神奇侠侣', value: 5},
                {name: '三笑之才子佳人', value: 0},
                {name: '不爱不散', value: 0},
                {name: '分手木马计', value: 0},
                {name: '双喜临门', value: 0},
                {name: '天际浩劫', value: 0},
                {name: '床下有人2', value: 0},
                {name: '我只要我们在一起', value: 0},
                {name: '我是中国人', value: 0},
                {name: '玛德2号', value: 0},
                {name: '璀璨的婚礼', value: 0},
                {name: '白狐', value: 0},
                {name: '荒岛情未了', value: 0},
                {name: '落经山', value: 0},
                {name: '谍·莲花', value: 0},
                {name: '赛尔号大电影之寻找凤凰神兽', value: 0},
                {name: '边区造', value: 0},
                {name: '门', value: 0},
                {name: '决战刹马镇', value: 0},
                {name: '大块头有大智慧', value: 0},
                {name: '大电影2.0之两个傻瓜的荒唐事', value: 0},
                {name: '天地逃生', value: 0},
                {name: '完美的爱', value: 0},
                {name: '新天生一对', value: 0},
                {name: '无人驾驶', value: 0},
                {name: '最爱', value: 0},
                {name: '武侠', value: 0},
                {name: '永无止境', value: 0},
                {name: '深夜前的五分钟', value: 0},
                {name: '玩命追踪', value: 0},
                {name: '赵氏孤儿', value: 0},
                {name: '非常营救', value: 0}
            ]
        }
    ]
};

chartBoxesOldMovies.setOption(optionBoxesOldMovies);
