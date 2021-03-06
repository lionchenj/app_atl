var country = [
    {"ac":"+86","en": "China", "name": "中国" },
    {"ac":"+852","en": "Hongkong", "name": "香港特别行政区" },
    {"ac":"+853","en": "Macao", "name": "澳门特别行政区" },
    {"ac":"+886","en": "Taiwan", "name": "台湾" },
    {"ac":"+66","en": "Thailand", "name": "泰国" },
    {"ac":"+971","en": "United Arab Emirates", "name": "阿拉伯联合酋长国" },
    {"ac":"+44","en": "United Kiongdom", "name": "英国" },
    {"ac":"+1","en": "United States of America", "name": "美国" },
    {"ac":"+244","en":"Angola","name":"安哥拉"},
    {"ac":"+93","en":"Afghanistan","name":"阿富汗"},
    {"ac":"+355","en":"Albania","name":"阿尔巴尼亚"},
    {"ac":"+213","en":"Algeria","name":"阿尔及利亚"},
    {"ac":"+376","en":"Andorra","name":"安道尔共和国"},
    {"ac":"+264","en":"Anguilla","name":"安圭拉岛"},
    {"ac":"+1268","en":"Barbuda Antigua","name":"安提瓜和巴布达"},
    {"ac":"+54","en":"Argentina","name":"阿根廷"},
    {"ac":"+374","en":"Armenia","name":"亚美尼亚"},
    {"ac":"+61","en":"Australia","name":"澳大利亚"},
    {"ac":"+43","en":"Austria","name":"奥地利"},
    {"ac":"+994","en":"Azerbaijan","name":"阿塞拜疆"},
    {"ac":"+1242","en":"Bahamas","name":"巴哈马"},
    {"ac":"+973","en":"Bahrain","name":"巴林"},
    {"ac":"+880","en":"Bangladesh","name":"孟加拉国"},
    {"ac":"+1246","en":"Barbados","name":"巴巴多斯"},
    {"ac":"+375","en":"Belarus","name":"白俄罗斯"},
    {"ac":"+32","en":"Belgium","name":"比利时"},
    {"ac":"+501","en":"Belize","name":"伯利兹"},
    {"ac":"+229","en":"Benin","name":"贝宁"},
    {"ac":"+441","en":"Bermuda Is.","name":"百慕大群岛"},
    {"ac":"+591","en":"Bolivia","name":"玻利维亚"},
    {"ac":"+267","en":"Botswana","name":"博茨瓦纳"},
    {"ac":"+55","en":"Brazil","name":"巴西"},
    {"ac":"+673","en":"Brunei","name":"文莱"},
    {"ac":"+359","en":"Bulgaria","name":"保加利亚"},
    {"ac":"+226","en":"Burkina-faso","name":"布基纳法索"},
    {"ac":"+95","en":"Burma","name":"缅甸"},
    {"ac":"+257","en":"Burundi","name":"布隆迪"},
    {"ac":"+237","en":"Cameroon","name":"喀麦隆"},
    {"ac":"+1","en":"Canada","name":"加拿大"},
    {"ac":"+236","en":"Central African Republic","name":"中非共和国"},
    {"ac":"+235","en":"Chad","name":"乍得"},
    {"ac":"+56","en":"Chile","name":"智利"},
    {"ac":"+57","en":"Colombia","name":"哥伦比亚"},
    {"ac":"+242","en":"Congo","name":"刚果"},
    {"ac":"+682","en":"Cook Is.","name":"库克群岛"},
    {"ac":"+506","en":"Costa Rica","name":"哥斯达黎加"},
    {"ac":"+53","en":"Cuba","name":"古巴"},
    {"ac":"+357","en":"Cyprus","name":"塞浦路斯"},
    {"ac":"+420","en":"Czech Republic","name":"捷克"},
    {"ac":"+45","en":"Denmark","name":"丹麦"},
    {"ac":"+253","en":"Djibouti","name":"吉布提"},
    {"ac":"+1849","en":"Dominica Rep.","name":"多米尼加共和国"},
    {"ac":"+593","en":"Ecuador","name":"厄瓜多尔"},
    {"ac":"+20","en":"Egypt","name":"埃及"},
    {"ac":"+503","en":"EI Salvador","name":"萨尔瓦多"},
    {"ac":"+372","en":"Estonia","name":"爱沙尼亚"},
    {"ac":"+251","en":"Ethiopia","name":"埃塞俄比亚"},
    {"ac":"+679","en":"Fiji","name":"斐济"},
    {"ac":"+358","en":"Finland","name":"芬兰"},
    {"ac":"+33","en":"France","name":"法国"},
    {"ac":"+594","en":"French Guiana","name":"法属圭亚那"},
    {"ac":"+241","en":"Gabon","name":"加蓬"},
    {"ac":"+220","en":"Gambia","name":"冈比亚"},
    {"ac":"+995","en":"Georgia","name":"格鲁吉亚"},
    {"ac":"+49","en":"Germany","name":"德国"},
    {"ac":"+233","en":"Ghana","name":"加纳"},
    {"ac":"+350","en":"Gibraltar","name":"直布罗陀"},
    {"ac":"+30","en":"Greece","name":"希腊"},
    {"ac":"+233","en":"Grenada","name":"格林纳达"},
    {"ac":"+1671","en":"Guam","name":"关岛"},
    {"ac":"+502","en":"Guatemala","name":"危地马拉"},
    {"ac":"+224","en":"Guinea","name":"几内亚"},
    {"ac":"+592","en":"Guyana","name":"圭亚那"},
    {"ac":"+509","en":"Haiti","name":"海地"},
    {"ac":"+504","en":"Honduras","name":"洪都拉斯"},
    {"ac":"+36","en":"Hungary","name":"匈牙利"},
    {"ac":"+354","en":"Iceland","name":"冰岛"},
    {"ac":"+91","en":"India","name":"印度"},
    {"ac":"+62","en":"Indonesia","name":"印度尼西亚"},
    {"ac":"+98","en":"Iran","name":"伊朗"},
    {"ac":"+964","en":"Iraq","name":"伊拉克"},
    {"ac":"+353","en":"Ireland","name":"爱尔兰"},
    {"ac":"+972","en":"Israel","name":"以色列"},
    {"ac":"+39","en":"Italy","name":"意大利"},
    {"ac":"+1876","en":"Jamaica","name":"牙买加"},
    {"ac":"+81","en":"Japan","name":"日本"},
    {"ac":"+962","en":"Jordan","name":"约旦"},
    {"ac":"+855","en":"Kampuchea (Cambodia )","name":"柬埔寨"},
    {"ac":"+7","en":"Kazakstan","name":"哈萨克斯坦"},
    {"ac":"+254","en":"Kenya","name":"肯尼亚"},
    {"ac":"+82","en":"Korea","name":"韩国"},
    {"ac":"+965","en":"Kuwait","name":"科威特"},
    {"ac":"+996","en":"Kyrgyzstan","name":"吉尔吉斯坦"},
    {"ac":"+856","en":"Laos","name":"老挝"},
    {"ac":"+371","en":"Latvia","name":"拉脱维亚"},
    {"ac":"+961","en":"Lebanon","name":"黎巴嫩"},
    {"ac":"+266","en":"Lesotho","name":"莱索托"},
    {"ac":"+231","en":"Liberia","name":"利比里亚"},
    {"ac":"+218","en":"Libya","name":"利比亚"},
    {"ac":"+423","en":"Liechtenstein","name":"列支敦士登"},
    {"ac":"+370","en":"Lithuania","name":"立陶宛"},
    {"ac":"+352","en":"Luxembourg","name":"卢森堡"},
    {"ac":"+261","en":"Madagascar","name":"马达加斯加"},
    {"ac":"+265","en":"Malawi","name":"马拉维"},
    {"ac":"+60","en":"Malaysia","name":"马来西亚"},
    {"ac":"+960","en":"Maldives","name":"马尔代夫"},
    {"ac":"+1670","en":"Mali","name":"马里"},
    {"ac":"+356","en":"Malta","name":"马耳他"},
    {"ac":"+230","en":"Mauritius","name":"毛里求斯"},
    {"ac":"+52","en":"Mexico","name":"墨西哥"},
    {"ac":"+373","en":"Moldova","name":"摩尔多瓦"},
    {"ac":"+377","en":"Monaco","name":"摩纳哥"},
    {"ac":"+976","en":"Mongolia","name":"蒙古"},
    {"ac":"+1664","en":"Montserrat Is.","name":"蒙特塞拉特岛"},
    {"ac":"+212","en":"Morocco","name":"摩洛哥"},
    {"ac":"+258","en":"Mozambique","name":"莫桑比克"},
    {"ac":"+264","en":"Namibia","name":"纳米比亚"},
    {"ac":"+674","en":"Nauru","name":"瑙鲁"},
    {"ac":"+977","en":"Nepal","name":"尼泊尔"},
    {"ac":"+31","en":"Netherlands","name":"荷兰"},
    {"ac":"+64","en":"New Zealand","name":"新西兰"},
    {"ac":"+505","en":"Nicaragua","name":"尼加拉瓜"},
    {"ac":"+227","en":"Niger","name":"尼日尔"},
    {"ac":"+234","en":"Nigeria","name":"尼日利亚"},
    {"ac":"+850","en":"North Korea","name":"朝鲜"},
    {"ac":"+47","en":"Norway","name":"挪威"},
    {"ac":"+968","en":"Oman","name":"阿曼"},
    {"ac":"+92","en":"Pakistan","name":"巴基斯坦"},
    {"ac":"+507","en":"Panama","name":"巴拿马"},
    {"ac":"+675","en":"Papua New Cuinea","name":"巴布亚新几内亚"},
    {"ac":"+595","en":"Paraguay","name":"巴拉圭"},
    {"ac":"+51","en":"Peru","name":"秘鲁"},
    {"ac":"+63","en":"Philippines","name":"菲律宾"},
    {"ac":"+48","en":"Poland","name":"波兰"},
    {"ac":"+689","en":"French Polynesia","name":"法属玻利尼西亚"},
    {"ac":"+351","en":"Portugal","name":"葡萄牙"},
    {"ac":"+1787","en":"Puerto Rico","name":"波多黎各"},
    {"ac":"+974","en":"Qatar","name":"卡塔尔"},
    {"ac":"+40","en":"Romania","name":"罗马尼亚"},
    {"ac":"+7","en":"Russia","name":"俄罗斯"},
    {"ac":"+1758","en":"Saint Lueia","name":"圣卢西亚"},
    {"ac":"+1784","en":"Saint Vincent","name":"圣文森特岛"},
    {"ac":"+223","en":"San Marino","name":"圣马力诺"},
    {"ac":"+239","en":"Sao Tome and Principe","name":"圣多美和普林西比"},
    {"ac":"+966","en":"Saudi Arabia","name":"沙特阿拉伯"},
    {"ac":"+221","en":"Senegal","name":"塞内加尔"},
    {"ac":"+248","en":"Seychelles","name":"塞舌尔"},
    {"ac":"+232","en":"Sierra Leone","name":"塞拉利昂"},
    {"ac":"+65","en":"Singapore","name":"新加坡"},
    {"ac":"+421","en":"Slovakia","name":"斯洛伐克"},
    {"ac":"+386","en":"Slovenia","name":"斯洛文尼亚"},
    {"ac":"+677","en":"Solomon Is.","name":"所罗门群岛"},
    {"ac":"+252","en":"Somali","name":"索马里"},
    {"ac":"+27","en":"South Africa","name":"南非"},
    {"ac":"+34","en":"Spain","name":"西班牙"},
    {"ac":"+94","en":"Sri Lanka","name":"斯里兰卡"},
    {"ac":"+249","en":"Sudan","name":"苏丹"},
    {"ac":"+597","en":"Suriname","name":"苏里南"},
    {"ac":"+268","en":"Swaziland","name":"斯威士兰"},
    {"ac":"+46","en":"Sweden","name":"瑞典"},
    {"ac":"+41","en":"Switzerland","name":"瑞士"},
    {"ac":"+963","en":"Syria","name":"叙利亚"},
    {"ac":"+992","en":"Tajikstan","name":"塔吉克斯坦"},
    {"ac":"+255","en":"Tanzania","name":"坦桑尼亚"},
    {"ac":"+228","en":"Togo","name":"多哥"},
    {"ac":"+676","en":"Tonga","name":"汤加"},
    {"ac":"+1868","en":"Trinidad and Tobago","name":"特立尼达和多巴哥"},
    {"ac":"+216","en":"Tunisia","name":"突尼斯"},
    {"ac":"+90","en":"Turkey","name":"土耳其"},
    {"ac":"+993","en":"Turkmenistan","name":"土库曼斯坦"},
    {"ac":"+256","en":"Uganda","name":"乌干达"},
    {"ac":"+380","en":"Ukraine","name":"乌克兰"},
    {"ac":"+598","en":"Uruguay","name":"乌拉圭"},
    {"ac":"+998","en":"Uzbekistan","name":"乌兹别克斯坦"},
    {"ac":"+58","en":"Venezuela","name":"委内瑞拉"},
    {"ac":"+84","en":"Vietnam","name":"越南"},
    {"ac":"+967","en":"Yemen","name":"也门"},
    {"ac":"+338","en":"Yugoslavia","name":"南斯拉夫"},
    {"ac":"+263","en":"Zimbabwe","name":"津巴布韦"},
    {"ac":"+243","en":"Zaire","name":"扎伊尔"},
    {"ac":"+260","en":"Zambia","name":"赞比亚"}
];

// module.exports.country = country