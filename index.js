// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));
console.log(Array.isArray(b));


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
 a.map(function(item,index,array){
 console.log(item*2);
 })


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
 document.writeln(colors.join(" "));
 document.writeln(colors.join("+"));
 document.writeln(colors.join());

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function compare(val1,val2){
	if(val1<val2){
		return -1;
	}
	else if(val1>val2){
		return 1;
	}
	else{
		return 0;
	}
  }
  document.write(a.sort(compare).reverse());

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
 var varl={};
 var l=a.length;
 for(var i=0;i<l;i++){
	 if(!varl[a[i]]){
		 varl[a[i]]=1;
	 }else{
		 varl[a[i]]++;
	 }
 }
  var keys=Object.keys(varl);
  var maxnum=0,maxele;
  var j=keys.length;
  for(var i=0;i<j;i++){
	  if(varl[keys[i]]>maxnum){
		  maxnum=varl[keys[i]];
		  maxele=keys[i];
	  }
  }
  document.write(maxele); 
