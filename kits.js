// 将方法封装到对象身上
var kits = {};

// 给数值小于0的数字，在前面加上一个 0
kits.dispatchZero = function(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
};

// 获取时间
kits.formatDate = function() {
  var date = new Date();
  // 把年月日时分秒获取
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = this.dispatchZero(month);
  var day = date.getDate();
  day = this.dispatchZero(day);
  var hour = date.getHours();
  hour = this.dispatchZero(hour);
  var minutes = date.getMinutes();
  minutes = this.dispatchZero(minutes);
  var seconds = date.getSeconds();
  seconds = this.dispatchZero(seconds);

  return (
    year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds
  );
};

// 获取随机整数
kits.randomInt = function(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};

// 常见的给id的方式1
//  当前时间戳 + 大的随机数
kits.getId = function() {
  // 返回一个不容易重复的id
  let date = new Date();
  // 从1970年1月1日到现在为止的毫秒总数
  let time = date.getTime();

  // 然后再得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
  let r = this.randomInt(10000, 99999);
  // 把两个数字连起来
  let id = time + "" + r;
  return id;
};

//   获取一个随机的十六进制的颜色
kits.randomHexColor = function() {
  let arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];
  let str = "#";
  let num = 0;
  for (let i = 0; i < 6; i++) {
    // num = parseInt(Math.random() * 16);

    num = this.randomInt(0, 15);
    str += arr[num];
  }
  return str;
};

//  获取一个随机的rgb格式的颜色
kits.randomRGBColor = function() {
  let r = this.randomInt(0, 255);
  let g = this.randomInt(0, 255);
  let b = this.randomInt(0, 255);
  return "rgb(" + r + "," + g + "," + b + ")";
};

// 将一个数组(arr)以指定的键(key)存储到localStorage里面
kits.saveLocalDataArray = function(key, arr) {
  let json = JSON.stringify(arr);
  localStorage.setItem(key, json);
};

// 从locatStorage根据指定的键（key）获取一个数组
kits.getLocalDataArray = function(key, arr) {
  let date = localStorage.getItem(key, arr);
  let Arr = JSON.parse(date);
  if (!Arr) {
    Arr = [];
  }
  return Arr;
};

// appendDataIntoArray(key,data)  向localStorage里面指定键(key)的数组数据追加一个数据对象（data）
kits.appendDataIntoArray = function(key, data) {
  arr = this.getLocalDataArray(key, arr);
  arr = arr || [];
  arr.unshift(data);
  this.saveLocalDataArray(key, arr);
};

// deleteLocalDataById(key,id)   根据对应的id从localStorage中指定键(key)的数组中删除一条数据
kits.deleteLocalDataById = function(key, id) {
  arr = this.getLocalDataArray(key, arr);
  arr = arr || [];
  arr.forEach((e, i) => {
    // console.log(e.id);
    // console.log(id.id);
    if (e.id == id.id) {
      arr.splice(0, 1);
    }
  });
  this.saveLocalDataArray(key, arr);
};

// modifyLocalDataById(key,id,data)  根据id修改localStorage里面的指定键(key)的数组数据
kits.modifyLocalDataById = function(key, id, data) {
  arr = this.getLocalDataArray(key, arr);
  arr = arr || [];
  arr.forEach((e, i) => {
    if (e.id == id.id) {
      e.id = data.id;
      e.content = data.content;
    }
  });
  this.saveLocalDataArray(key, arr);
};
