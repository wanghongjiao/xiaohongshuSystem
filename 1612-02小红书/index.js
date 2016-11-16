
    
     var foot_a = $("#footer a"),
          foot_div =  $("#footer li div"),
          className1;

    foot_a.on("click", function(){
        console.log(1)
        foot_div.each(function(i){
          //获取当前className
            className1 = foot_div[i].className;
            //判断classname最后一位是否为1
            if(className1.substr(className1.length-1,1)=="1"){
              //若为1,截取除最后一位的字符串赋值给className
              foot_div[i].className = className1.substr(0,className1.length-1);
            }
          });

        //当前背景图改变
        var className2 = $(this).find("div")[0].className+1;
        $(this).find("div").removeClass().addClass(className2);
        localStorage.index = foot_a.index($(this));
    });
