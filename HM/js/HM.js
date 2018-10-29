

//获取一组带超链接的图像

var imagesA=document.getElementById("images").children;

console.log(imagesA);


//----------利用计时器间隔1s,显示1张图像，其余图像隐藏。
var currentNo=0;
function changImg(){
    //排他原理，去掉同类，突出自己。
    for(var i=0; i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        console.log(imagesA[i]);
    }
     //再突出自己
    imagesA[currentNo].className="displayImg";
    //换个元素，为下一次计时器调用做准备
    if(currentNo<7){currentNo++;}
    else{
        currentNo=0;
    }
    // console.log(currentNo);
}

var timer=window.setInterval(changImg,1000);

//为按钮添加鼠标移入移出暂停事件
function stopChange(){
    window.clearInterval(timer);
}
function starChange(){
     timer=window.setInterval(changImg,1000)
}

var imagesdiv=document.getElementById("images");
console.log(imagesdiv);
imagesdiv.addEventListener('mouseover',stopChange);
imagesdiv.addEventListener('mouseout',starChange);


