Page({
  data:{
    // text:"这是一个页面"
    dataPlans:[],
    groups:[],
    stateArr:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // this.getNetData();
    this.getlocalData();
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  gotoDetail:function(e){
       wx.navigateTo({
          // url:'../detail/detail?id='+'123'
           url:'../DataPlanDetail/DataPlanDetail'
      })
  },
  getlocalData:function(){

    var localData = {
    "success": true,
    "locations": [
        {
            "id": 3,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/TaiwanFlagNew.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 102,
            "hasPromo": false,
            "continent": "ASIA",
            "mcc": "466",
            "isHit": true,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Taiwan.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "台湾",
            "description": null,
            "dataPlans": [
                {
                    "id": "53946",
                    "locationId": 3,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 102,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/TaiwanFlagNew.png",
                    "operator": "Fareastone",
                    "netstandard": "4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "台湾包天流量套餐",
                    "shortName": "红茶SIM卡-台湾套餐",
                    "description": "• 套餐提供无限数据流量。其中300MB为4G高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "466"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 1,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/HongkongFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 60,
            "hasPromo": false,
            "continent": "ASIA",
            "mcc": "454",
            "isHit": true,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/HongKong.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "香港",
            "description": null,
            "dataPlans": [
                {
                    "id": "53944",
                    "locationId": 1,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 60,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/HongkongFlag.png",
                    "operator": "CSL",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "香港包天流量套餐",
                    "shortName": "红茶SIM卡-香港套餐(润讯)",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "454"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 49,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/JapanFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 74,
            "hasPromo": false,
            "continent": "ASIA",
            "mcc": "440",
            "isHit": true,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Japan.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "日本",
            "description": null,
            "dataPlans": [
                {
                    "id": "53952",
                    "locationId": 49,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 74,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/JapanFlag.png",
                    "operator": "NTT",
                    "netstandard": "4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "日本包天流量套餐",
                    "shortName": "红茶SIM卡-日本套餐",
                    "description": "• 套餐提供无限数据流量。其中300MB为4G高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "440"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 55,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/IndonesiaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 9,
            "hasPromo": false,
            "continent": "ASIA",
            "mcc": "510",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Indonesia.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "印度尼西亚",
            "description": null,
            "dataPlans": [
                {
                    "id": "53943",
                    "locationId": 55,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 9,
                    "expirationDays": 15,
                    "promoBannerUrl": "",
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/IndonesiaFlag.png",
                    "operator": "Indosat",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "25.00元/天",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "印度尼西亚包天流量套餐",
                    "shortName": "红茶SIM卡-印尼套餐",
                    "description": "• 套餐提供无限数据流量。其中300MB为4G高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买；<br>• 巴厘岛等地部分区域信号覆盖能力有限。",
                    "mcc": [
                        "510"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 9,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/KoreaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 47,
            "hasPromo": false,
            "continent": "ASIA",
            "mcc": "450",
            "isHit": true,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Korea.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "韩国",
            "description": null,
            "dataPlans": [
                {
                    "id": "53951",
                    "locationId": 9,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 47,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/KoreaFlag.png",
                    "operator": "KT",
                    "netstandard": "4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "韩国包天流量套餐",
                    "shortName": "红茶SIM卡-韩国套餐",
                    "description": "• 套餐提供无限数据流量。其中300MB为4G高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "450"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 6,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/ThailandFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 45,
            "hasPromo": false,
            "continent": "ASIA",
            "mcc": "520",
            "isHit": true,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Thailand.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "泰国",
            "description": null,
            "dataPlans": [
                {
                    "id": "53953",
                    "locationId": 6,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 45,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/ThailandFlag.png",
                    "operator": "AIS",
                    "netstandard": "4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "泰国包天流量套餐",
                    "shortName": "红茶SIM卡-泰国套餐",
                    "description": "• 套餐提供无限数据流量。其中300MB为4G高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买；<br>• 普吉岛和苏梅岛等地部分区域信号覆盖能力有限。",
                    "mcc": [
                        "520"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 7,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/AmericaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 41,
            "hasPromo": false,
            "continent": "AMERCIA",
            "mcc": "310",
            "isHit": true,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/America.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "美国",
            "description": null,
            "dataPlans": [
                {
                    "id": "53857",
                    "locationId": 7,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 41,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/AmericaFlag.png",
                    "operator": "ATT",
                    "netstandard": "4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "美国包天流量套餐",
                    "shortName": "红茶SIM卡-美国套餐(MB)",
                    "description": "• 套餐提供无限数据流量。其中300MB为4G高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买；<br>• 本套餐不适用于塞班岛、关岛等地区。",
                    "mcc": [
                        "310"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 22,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/FranceFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 2,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "208",
            "isHit": true,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/France.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "法国",
            "description": null,
            "dataPlans": [
                {
                    "id": "53986",
                    "locationId": 22,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 2,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/FranceFlag.png",
                    "operator": "Orange",
                    "netstandard": "2G,3G,4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "法国包天流量套餐",
                    "shortName": "红茶SIM卡-法国",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "208"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 48,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/UKFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 8,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "234",
            "isHit": true,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/UK.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "英国",
            "description": null,
            "dataPlans": [
                {
                    "id": "53960",
                    "locationId": 48,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 8,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/UKFlag.png",
                    "operator": "H3G UK",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "英国包天流量套餐",
                    "shortName": "红茶SIM卡-英国",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "234"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 29,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/ItaliaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 2,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "222",
            "isHit": true,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Italia.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "意大利",
            "description": null,
            "dataPlans": [
                {
                    "id": "53980",
                    "locationId": 29,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 2,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/ItaliaFlag.png",
                    "operator": "H3G Italy",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "意大利包天流量套餐",
                    "shortName": "红茶SIM卡-意大利",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "222"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 27,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/IrelandFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 1,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "272",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Ireland.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "爱尔兰",
            "description": null,
            "dataPlans": [
                {
                    "id": "53981",
                    "locationId": 27,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 1,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/IrelandFlag.png",
                    "operator": "Meteor Mobile",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "爱尔兰包天流量套餐",
                    "shortName": "红茶SIM卡-爱尔兰",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "272"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 20,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/EstoniaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 3,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "248",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Estonia.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "爱沙尼亚",
            "description": null,
            "dataPlans": [
                {
                    "id": "53988",
                    "locationId": 20,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 3,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/EstoniaFlag.png",
                    "operator": "Tele2",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "爱沙尼亚包天流量套餐",
                    "shortName": "红茶SIM卡-爱沙尼亚",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "248"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 13,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/AustriaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 5,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "232",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Austria.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "奥地利",
            "description": null,
            "dataPlans": [
                {
                    "id": "53995",
                    "locationId": 13,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 5,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/AustriaFlag.png",
                    "operator": "Hutchison Drei Austria",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "奥地利包天流量套餐",
                    "shortName": "红茶SIM卡-奥地利",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "232"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 15,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/BulgariaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "284",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Bulgaria.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "保加利亚",
            "description": null,
            "dataPlans": [
                {
                    "id": "53993",
                    "locationId": 15,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/BulgariaFlag.png",
                    "operator": "Telenor (Globul Bulgaria)",
                    "netstandard": "2G,3G,4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "保加利亚包天流量套餐",
                    "shortName": "红茶SIM卡-保加利亚",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "284"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 14,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/BelgiumFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 2,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "206",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Belgium.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "比利时",
            "description": null,
            "dataPlans": [
                {
                    "id": "53994",
                    "locationId": 14,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 2,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/BelgiumFlag.png",
                    "operator": "Belgacom",
                    "netstandard": "2G,3G,4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "比利时包天流量套餐",
                    "shortName": "红茶SIM卡-比利时",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "206"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 38,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/PolandFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 1,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "260",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Poland.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "波兰",
            "description": null,
            "dataPlans": [
                {
                    "id": "53970",
                    "locationId": 38,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 1,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/PolandFlag.png",
                    "operator": "P4",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "波兰包天流量套餐",
                    "shortName": "红茶SIM卡-波兰",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "260"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 26,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/IcelandFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 5,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "274",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Iceland.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "冰岛",
            "description": null,
            "dataPlans": [
                {
                    "id": "53982",
                    "locationId": 26,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 5,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/IcelandFlag.png",
                    "operator": "Nova",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "冰岛包天流量套餐",
                    "shortName": "红茶SIM卡-冰岛",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "274"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 19,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/DenmarkFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 1,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "238",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Denmark.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "丹麦",
            "description": null,
            "dataPlans": [
                {
                    "id": "53989",
                    "locationId": 19,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 1,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/DenmarkFlag.png",
                    "operator": "Hi3G Access",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "丹麦包天流量套餐",
                    "shortName": "红茶SIM卡-丹麦",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "238"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 23,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/GermanyFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 30,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "262",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Germany.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "德国",
            "description": null,
            "dataPlans": [
                {
                    "id": "53985",
                    "locationId": 23,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 30,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/GermanyFlag.png",
                    "operator": "Telefonica",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "德国包天流量套餐",
                    "shortName": "红茶SIM卡-德国",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "262"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 21,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/FinlandFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "244",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Finland.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "芬兰",
            "description": null,
            "dataPlans": [
                {
                    "id": "53987",
                    "locationId": 21,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/FinlandFlag.png",
                    "operator": "Elisa",
                    "netstandard": "2G,3G,4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "芬兰包天流量套餐",
                    "shortName": "红茶SIM卡-芬兰",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "244"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 30,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/KazakhstanFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "ASIA",
            "mcc": "401",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Kazakhstan.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "哈萨克斯坦",
            "description": null,
            "dataPlans": [
                {
                    "id": "53978",
                    "locationId": 30,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/KazakhstanFlag.png",
                    "operator": "Tele2 - Mobile Telecom-Service",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "哈萨克斯坦包天流量套餐",
                    "shortName": "红茶SIM卡-哈萨克斯坦",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "401"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 36,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/HollandFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "204",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Holland.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "荷兰",
            "description": null,
            "dataPlans": [
                {
                    "id": "53972",
                    "locationId": 36,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/HollandFlag.png",
                    "operator": "KPN",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "荷兰包天流量套餐",
                    "shortName": "红茶SIM卡-荷兰",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "204"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 35,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/MontenegroFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 2,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "297",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Montenegro.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "黑山",
            "description": null,
            "dataPlans": [
                {
                    "id": "53973",
                    "locationId": 35,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 2,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/MontenegroFlag.png",
                    "operator": "MTEL",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "黑山包天流量套餐",
                    "shortName": "红茶SIM卡-黑山",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "297"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 18,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/CzechRepublicFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "230",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/CzechRepublic.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "捷克",
            "description": null,
            "dataPlans": [
                {
                    "id": "53990",
                    "locationId": 18,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/CzechRepublicFlag.png",
                    "operator": "O2 Czech Republic",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "捷克包天流量套餐",
                    "shortName": "红茶SIM卡-捷克",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "230"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 16,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/CroatiaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "219",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Croatia.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "克罗地亚",
            "description": null,
            "dataPlans": [
                {
                    "id": "53992",
                    "locationId": 16,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/CroatiaFlag.png",
                    "operator": "Tele2",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "克罗地亚包天流量套餐",
                    "shortName": "红茶SIM卡-克罗地亚",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "219"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 31,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/LatviaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 1,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "247",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Latvia.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "拉脱维亚",
            "description": null,
            "dataPlans": [
                {
                    "id": "53977",
                    "locationId": 31,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 1,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/LatviaFlag.png",
                    "operator": "Bite",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "拉脱维亚包天流量套餐",
                    "shortName": "红茶SIM卡-拉脱维亚",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "247"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 32,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/LithuaniaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "246",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Lithuania.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "立陶宛",
            "description": null,
            "dataPlans": [
                {
                    "id": "53976",
                    "locationId": 32,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/LithuaniaFlag.png",
                    "operator": "Bite",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "立陶宛包天流量套餐",
                    "shortName": "红茶SIM卡-立陶宛",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "246"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 33,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/LuxembourgFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "270",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Luxembourg.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "卢森堡",
            "description": null,
            "dataPlans": [
                {
                    "id": "53975",
                    "locationId": 33,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/LuxembourgFlag.png",
                    "operator": "Tango Mobile",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "卢森堡包天流量套餐",
                    "shortName": "红茶SIM卡-卢森堡",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "270"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 40,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/RomaniaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "226",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Romania.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "罗马尼亚",
            "description": null,
            "dataPlans": [
                {
                    "id": "53968",
                    "locationId": 40,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/RomaniaFlag.png",
                    "operator": "T-Mobile (ex-Cosmote)",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "罗马尼亚包天流量套餐",
                    "shortName": "红茶SIM卡-罗马尼亚",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "226"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 51,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/MalasyiaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 6,
            "hasPromo": false,
            "continent": "ASIA",
            "mcc": "502",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Malaysia.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "马来西亚",
            "description": null,
            "dataPlans": [
                {
                    "id": "53950",
                    "locationId": 51,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 6,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/MalasyiaFlag.png",
                    "operator": "Cellcom",
                    "netstandard": "4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "马来西亚包天流量套餐",
                    "shortName": "红茶SIM卡-马来西亚套餐",
                    "description": "• 套餐提供无限数据流量。其中300MB为4G高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "502"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 37,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/NorwayFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "242",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Norway.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "挪威",
            "description": null,
            "dataPlans": [
                {
                    "id": "53971",
                    "locationId": 37,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/NorwayFlag.png",
                    "operator": "KPN",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "挪威包天流量套餐",
                    "shortName": "红茶SIM卡-挪威",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "242"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 39,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/PortugalFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 5,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "268",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Portugal.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "葡萄牙",
            "description": null,
            "dataPlans": [
                {
                    "id": "53969",
                    "locationId": 39,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 5,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/PortugalFlag.png",
                    "operator": "NOS (ex-Optimus)",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "葡萄牙包天流量套餐",
                    "shortName": "红茶SIM卡-葡萄牙",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "268"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 45,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/SwitzerlandFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 1,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "228",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Switzerland.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "瑞士",
            "description": null,
            "dataPlans": [
                {
                    "id": "53963",
                    "locationId": 45,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 1,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/SwitzerlandFlag.png",
                    "operator": "Salt Mobile",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "瑞士包天流量套餐",
                    "shortName": "红茶SIM卡-瑞士",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "228"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 17,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/CyprusFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "280",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Cyprus.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "塞浦路斯",
            "description": null,
            "dataPlans": [
                {
                    "id": "53991",
                    "locationId": 17,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/CyprusFlag.png",
                    "operator": "MTN Cyprus",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "塞浦路斯包天流量套餐",
                    "shortName": "红茶SIM卡-塞浦路斯",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "280"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 41,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/SlovakiaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "231",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Slovakia.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "斯洛伐克",
            "description": null,
            "dataPlans": [
                {
                    "id": "53967",
                    "locationId": 41,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/SlovakiaFlag.png",
                    "operator": "O2 Slovakia",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "斯洛伐克包天流量套餐",
                    "shortName": "红茶SIM卡-斯洛伐克",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "231"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 42,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/SloveniaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "293",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Slovenia.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "斯洛文尼亚",
            "description": null,
            "dataPlans": [
                {
                    "id": "53966",
                    "locationId": 42,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/SloveniaFlag.png",
                    "operator": "Telekom Slovenije",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "斯洛文尼亚包天流量套餐",
                    "shortName": "红茶SIM卡-斯洛文尼亚",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "293"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 46,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/TurkeyFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 2,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "286",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Turkey.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "土耳其",
            "description": null,
            "dataPlans": [
                {
                    "id": "53962",
                    "locationId": 46,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 2,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/TurkeyFlag.png",
                    "operator": "Avea",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "土耳其包天流量套餐",
                    "shortName": "红茶SIM卡-土耳其",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "286"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 47,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/UkraineFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "255",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Ukraine.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "乌克兰",
            "description": null,
            "dataPlans": [
                {
                    "id": "53961",
                    "locationId": 47,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/UkraineFlag.png",
                    "operator": "Astelit",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "乌克兰包天流量套餐",
                    "shortName": "红茶SIM卡-乌克兰",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "255"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 24,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/GreeceFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 0,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "202",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Greece.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "希腊",
            "description": null,
            "dataPlans": [
                {
                    "id": "53984",
                    "locationId": 24,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 0,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/GreeceFlag.png",
                    "operator": "Wind",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "希腊包天流量套餐",
                    "shortName": "红茶SIM卡-希腊",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "202"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 43,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/SpainFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 3,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "214",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Spain.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "西班牙",
            "description": null,
            "dataPlans": [
                {
                    "id": "53965",
                    "locationId": 43,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 3,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/SpainFlag.png",
                    "operator": "Xfera",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "西班牙包天流量套餐",
                    "shortName": "红茶SIM卡-西班牙",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "214"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 4,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/SingaporeFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 10,
            "hasPromo": false,
            "continent": "ASIA",
            "mcc": "525",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Singapore.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "新加坡",
            "description": null,
            "dataPlans": [
                {
                    "id": "53947",
                    "locationId": 4,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 10,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/SingaporeFlag.png",
                    "operator": "Starhub",
                    "netstandard": "4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "新加坡包天流量套餐",
                    "shortName": "红茶SIM卡-新加坡套餐",
                    "description": "• 套餐提供无限数据流量。其中300MB为4G高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "525"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 25,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/HungaryFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 3,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "216",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Hungary.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "匈牙利",
            "description": null,
            "dataPlans": [
                {
                    "id": "53983",
                    "locationId": 25,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 3,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/HungaryFlag.png",
                    "operator": "T-Mobile (Magyar Telekom)",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "匈牙利包天流量套餐",
                    "shortName": "红茶SIM卡-匈牙利",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "216"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 28,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/IsraelFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 1,
            "hasPromo": false,
            "continent": "ASIA",
            "mcc": "425",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Israel.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "以色列",
            "description": null,
            "dataPlans": [
                {
                    "id": "53979",
                    "locationId": 28,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 1,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/IsraelFlag.png",
                    "operator": "Hot Mobile",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "以色列包天流量套餐",
                    "shortName": "红茶SIM卡-以色列",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "425"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 52,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/AustriliaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 13,
            "hasPromo": false,
            "continent": "OCEANIA",
            "mcc": "505",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Australia.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "澳大利亚",
            "description": null,
            "dataPlans": [
                {
                    "id": "53849",
                    "locationId": 52,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 13,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/AustriliaFlag.png",
                    "operator": "Telstra",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "35.00元/天",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "澳大利亚套餐漫游卡",
                    "shortName": "红茶SIM卡-澳大利亚套餐(MB)",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "505"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 5,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/ChinaFlag.png",
            "dataPlanCount": 3,
            "dataPlanMinPrice": 100,
            "dataPlanTotalPurchasedCount": 193,
            "hasPromo": false,
            "continent": "ASIA",
            "mcc": "460",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/China.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "1.00元起",
            "name": "中国大陆",
            "description": null,
            "dataPlans": [
                {
                    "id": "53848",
                    "locationId": 5,
                    "price": 100,
                    "promoPrice": null,
                    "purchasedCount": 111,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/ChinaFlag.png",
                    "operator": "ChinaUnicom",
                    "netstandard": "4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "中国测试套餐(4G)(10M)",
                    "shortName": "红茶SIM卡-中国套餐(4G)",
                    "description": "本套餐为4G网络套餐。本套餐用于国内测试,每个订单只有10MB可用流量，流量用尽后则无法上网。",
                    "mcc": [
                        "460"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                },
                {
                    "id": "53846",
                    "locationId": 5,
                    "price": 500,
                    "promoPrice": null,
                    "purchasedCount": 74,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/ChinaFlag.png",
                    "operator": "ChinaUnicom",
                    "netstandard": "4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "中国测试套餐(30MB高速)",
                    "shortName": "红茶SIM卡-中国测试套餐(30M)",
                    "description": "• 套餐提供无限数据流量。其中30MB为4G高速流量，超过后则予以限速;<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买；<br>• 该服务仅支持中国大陆地区。",
                    "mcc": [
                        "460"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                },
                {
                    "id": "53847",
                    "locationId": 5,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 8,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/ChinaFlag.png",
                    "operator": "ChinaUnicom",
                    "netstandard": "4G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "中国测试套餐(100MB高速)",
                    "shortName": "红茶SIM卡-中国测试套餐(100M)",
                    "description": "• 套餐提供无限数据流量。其中100MB为4G高速流量，超过后则予以限速;<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款;<br>• 在境外信号良好区域，该套餐支持无网购买;<br>• 该服务仅支持中国大陆地区。",
                    "mcc": [
                        "460"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 44,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/SwedenFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 1,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "240",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Sweden.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "瑞典",
            "description": null,
            "dataPlans": [
                {
                    "id": "53964",
                    "locationId": 44,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 1,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/SwedenFlag.png",
                    "operator": "Hi3G Access",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "瑞典包天流量套餐",
                    "shortName": "红茶SIM卡-瑞典",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "240"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        },
        {
            "id": 34,
            "duration": 1,
            "logoUrl": "http://images.redteamobile.com/images/locations/logos/MaltaFlag.png",
            "dataPlanCount": 1,
            "dataPlanMinPrice": 990,
            "dataPlanTotalPurchasedCount": 1,
            "hasPromo": false,
            "continent": "EUROPE",
            "mcc": "278",
            "isHit": false,
            "coverUrl": "http://images.redteamobile.com/images/locations/covers/Malta.jpg",
            "promoSlogan": "ON SALE",
            "locationType": 1,
            "locationTariff": "9.90元起",
            "name": "马耳他",
            "description": null,
            "dataPlans": [
                {
                    "id": "53974",
                    "locationId": 34,
                    "price": 990,
                    "promoPrice": null,
                    "purchasedCount": 1,
                    "expirationDays": 15,
                    "promoBannerUrl": null,
                    "minDays": 1,
                    "maxDays": 7,
                    "logoUrl": "http://images.redteamobile.com/images/locations/logos/MaltaFlag.png",
                    "operator": "GO Malta",
                    "netstandard": "2G,3G",
                    "status": "ACTIVE",
                    "duration": 1,
                    "tariff": "",
                    "type": 1,
                    "dataVolume": -1,
                    "name": "马耳他包天流量套餐",
                    "shortName": "红茶SIM卡-马耳他",
                    "description": "• 套餐提供无限数据流量。其中300MB高速流量，超过后则予以限速；<br>• 第一次激活后套餐开始计时，每24小时计为使用1天。期间无论启用与否会持续计时直至购买天数用完为止；<br>• 购买后需在15天内激活，逾期作废不予退款；<br>• 在境外信号良好区域，该服务支持无网购买。",
                    "mcc": [
                        "278"
                    ],
                    "bulkDiscount": [],
                    "directedApps": []
                }
            ]
        }
    ]};
    this.getStateArr(localData.locations);
   
  },
  
  getStateArr:function(dataPlans){
      var arr = ['热门'];
     
      for(var i=0;i<dataPlans.length;i++){
          var dataPlan = dataPlans[i];
          if(arr.toString().indexOf(dataPlan.continent)>-1){

          }else{
               
              arr.push(dataPlan.continent);
          
          }
      }
      console.log(arr);
    
     
      this.getHotArr(dataPlans,arr);
  },
  getHotArr:function(dataPlans,stateArr){
      var arr = [];
       
      for(var i=0;i<stateArr.length;i++){
          var str = stateArr[i];
          var obj = {};
          obj.dataPlans = [];
        
        

          for(var j=0;j<dataPlans.length;j++){
                var dataPlan = dataPlans[j];
               
                if(str == '热门'){
                 
                    if(dataPlan.isHit){
                        obj.continent = '热门';
                        obj.dataPlans.push(dataPlan);
                    }
                                        
                   
                }else{
                     if(str == dataPlan.continent){
                    
                            switch(dataPlan.continent){
                                case 'ASIA'  :
                                    obj.continent = '亚洲'
                                    break;
                                case 'AMERCIA'  :
                                    obj.continent = '美洲'
                                    break;
                                case 'EUROPE'  :
                                    obj.continent = '欧洲'
                                    break;
                                case 'OCEANIA'  :
                                    obj.continent = '大洋洲'
                                    break;
                                default:
                                    break;
                            }
                            // obj.continent = str;
                            obj.dataPlans.push(dataPlan);
                        }
                }
               
                                    
                
          }
          
          arr.push(obj);
          
      }
      
      console.log(arr);
    

       this.setData({
            dataPlans:arr
        });
  
    
     

  },
  getNetData:function(){
    var page =this;
    wx.request({
      // url:'https://api.douban.com/v2/movie/in_theaters',
      url:'https://einstein.redtea.io/dataPlan/rtAccount/allLocations',
      method:'POST',
       header: {
        // 'Content-Type': 'application/json',
        //  'md5sum' : 'b62e453ff5bb1f5d55081bd076ca664c'
        'Accept-Language' : 'zh-Hans-CN;q=1, en-CN;q=0.9, zh-Hant-CN;q=0.8',
        'Content-Type' : 'application/json',
        // 'User-Agent' : 'RedteaMobile/1.0.4 (iPhone; iOS 10.0.2; Scale/2.00)',
        'md5sum':'b62e453ff5bb1f5d55081bd076ca664c'
      },
      data:{
          agentId:'1000',
          deviceId:'AZCDD20160519081052',
          token:'KBFHEIOBEFIENHEKAPJIBBGGJIKOMMFD',
          uid:'a4b5df98-424a-4502-b10a-9b2e65817e91'
      },
      success:function(res){
        // var subjects = res.data.subjects.lists;
        // page.setData({movies:subjects});
        console.log(res.data);
      }
    })
  }
})