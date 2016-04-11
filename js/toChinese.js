/**
 * Created by towersxu on 16/4/10.
 */
Number.prototype.toChineseNumber = function () {
  var str = '',
    Iu = ['', '十', '百', '千'],
    Iu2 = ['万','十','百','千'],
    Iu3 = ['亿','十','百','千','万'],
    num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
    n = this.valueOf(),
    sfn = function(str,n,Iu){
      var qun = [];
      while (n > 0) {
        qun.push(n % 10);
        n = Math.floor(n / 10);
      }
      for (var i = 0; i < qun.length&&i<Iu.length; i++) {
        var iu = '',
          nu = '';
        if (qun[i] !== 0) {
          iu = Iu[i];
          nu = num[qun[i]];
        } else {
          qun[i - 1] ? nu = '零' : nu = '';
          if(i === 0){
            iu = Iu[i]
          }
        }
        str = nu + iu + str;
      }
      return str;
    };

  str = sfn(str,n%10000,Iu);
  if(n>=10000){
    str = sfn(str,(Math.floor(n/10000))%10000,Iu2);
  }
  if(n>=100000000){
    str = sfn(str,(Math.floor(n/100000000))%100000,Iu3);
  }
  return str;
};
var a = 123006789;
console.log(a.toChineseNumber());