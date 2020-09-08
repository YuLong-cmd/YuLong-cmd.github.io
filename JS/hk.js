var img=document.getElementById("floatdiv");//获取div
//设置div起始点坐标
var x=0,y=0;
//设置div行进速度
var xSpeed=2,ySpeed=1;
//设置图片移动
var w=document.body.clientWidth-200,h=document.body.clientHeight-100;
// 获取文档内部body的一个宽和高，这个宽和高比实际电脑屏幕所看到的会大一部分，因此要减去一部分
function floatdiv(){//该处是函数的定义，但不调用该函数
 //比较图片是否到达边界，如查到达边界 改变方向;如未到达边界
 if(x>w||x<0) xSpeed= -xSpeed;
 if(y>h||y<0) ySpeed= -ySpeed;

 x+=xSpeed;
 y+=ySpeed;

 //设置坐标值，起始坐标+速度
 img.style.top=y+"px";
 img.style.left=x+"px";
setTimeout("floatdiv()",10);//setTimeout该函数每隔十毫秒运行一次floatdiv()
}
floatdiv();//floatdiv();函数的起始点



window.onload = function(){			
	var u1a = document.getElementById("u1");
	var u1li = u1a.getElementsByTagName("li");
	var a = document.getElementById("apDiv10");
	var b = a.getElementsByClassName("tab");
	for (var i = 0; i < u1li.length; i++) {
		u1li[i].index = i;
		u1li[i].onclick = function (){
		for (var i = 0; i < u1li.length; i++) {
			u1li[i].className = "";
			b[i].style.display = "none";
		}
		this.className='act';
		b[this.index].style.display="block";
		}
		for(var m=1;m<u1li.length;m++){
	   u1li[m].className='';
	   b[m].style.display="none";
	  }
	}
};
