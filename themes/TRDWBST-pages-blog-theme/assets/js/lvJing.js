var date = new Date();
var today=String(date.getMonth()+1)+","+String(date.getDate())
var ZHONGDASHIJIANJINIANRI=["07,07","09,18","12,13"]
if(ZHONGDASHIJIANJINIANRI.includes(today)){
    document.querySelectorAll("*").forEach(function(ele){
        ele.style.filter='grayscale(1)'
    })
}