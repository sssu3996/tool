// 将方法封装到对象身上
var kits = {};

kits.dispatchZero = function () {
    if (num < 10) {
        num = '0' + num;
    }
    return num;
}

// 获取时间
kits.formatDate = function () {
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

    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;

};

// 获取随机数
kits.randomInt = function () {
    return Math.floor(Math.random() * (m - n + 1) + n);
}

// 常见的给id的方式1
//  当前时间戳 + 大的随机数
kits.getId = function () {
    // 返回一个不容易重复的id
    let date = new Date();
    // 从1970年1月1日到现在为止的毫秒总数
    let time = date.getTime();

    // 然后再得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
    let r = this.randomInt(10000, 99999);
    // 把两个数字连起来
    let id = time + '' + r;
    return id;
}
