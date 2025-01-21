var date = new Date();
var today=String(date.getMonth()+1)+","+String(date.getDate())
var ZHONGDASHIJIANJINIANRI=["09,18","12,13"]
if(ZHONGDASHIJIANJINIANRI.includes(today)){
    document.querySelectorAll("*").forEach(function(ele){
        ele.style.filter='grayscale(1)'
    })
}
console.log("正常工作。缅怀先烈，珍惜和平。")