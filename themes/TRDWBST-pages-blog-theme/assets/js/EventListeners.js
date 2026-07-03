function autoChangeTabTitieWhileLeaving(){
    document.addEventListener("visibilitychange",function(){
        var _originTitle=document.title
        let _time
        if(document.hidden){
            document.title="你干甚去啊 | "+_originTitle
            clearTimeout(_time)
        }else{
            document.title="欢迎回来 | "+_originTitle
            _time=setTimeout(function(){
                document.title=_originTitle
            },5000)
        }
    })
}