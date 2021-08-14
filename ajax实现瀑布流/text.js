function ajax(options){
     var method = options.method || 'GET';
     var url = options.url || "";
     var data = options.data || "";
     var isAysnc = options.isAysnc !== undefined ? options.isAysnc:true;
    //  成功的回调函数
     var success = options.success || function(){};
    //  错误的回调函数
    var error = options.error || function(){}
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else if(window.ActiveXObject){
        xhr = new ActiveXObject('Microsoft.XMLHttpRequest');
    }else{
        return alert('该浏览器不支持')
    }

    xhr.onreadystatechange =function (){
        if(xhr.readyState === 4){
            if(xhr.status ===200){
                // 接到数据之后的处理
                success(JSON.parse(xhr.responseText))
            }
        }
    }
    xhr.onerror = function(e){
        error('error');
    }

    // 判断其数据之后发送打开数据
    method = method.toUpperCase();
    // 判断其情况，看是否是包含其情况的
    if(method == 'GET'){
        if(url.indexof('?') > -1){
            // 判断其？的位置是否在最后，如果是的话就直接拼接数据，否则证明有数据，接着拼接后面的数据也好
            if(url.indexof('?')===url.leength-1){
                url +=data
            }else{
                url+='&'+data
            }
        }
        else{
            url+='?'+data;
        }
        xhr.open(method,url,isAysnc);
        xhr.send();
    }else{
        xhr.open(method, url, isAsync);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data)
    }
}