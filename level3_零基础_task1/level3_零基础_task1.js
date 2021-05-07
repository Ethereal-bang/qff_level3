var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
  ];
  
  var aqiList = document.getElementById("aqi-list");

  var temp;
    for (var i = 0; i < aqiData.length; i++) {
        for (var j = i+1; j < aqiData.length; j++) {
            if(aqiData[i][1] < aqiData[j][1]) {
                temp = aqiData[i][1];
                aqiData[i][1] = aqiData[j][1];
                aqiData[j][1] = temp;
            }
        }
    }
  //筛选数组并创建子节点
    var j = 1;    //排名
    
    console.log(aqiList)
    for (var i = 0; i <aqiData.length; i++) {
        if(aqiData[i][1] > 60) {
          var li = document.createElement('li');
          li.innerHTML = '第' + j + '名：' + aqiData[i][0] +',' + aqiData[i][1];
          j++;
          
          aqiList.appendChild(li)
        }
    }

  (function () {  //自执行函数
    /*
    在注释下方编写代码
    遍历读取aqiData中各个城市的数据
    将空气质量指数大于60的城市显示到aqi-list的列表中
    */
    
  //将数组由大到小排序
    
  })();