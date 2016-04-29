module.exports = function (args,opts) {
    var result = {
        '_':[]
    }
 
    var value = args.slice(2).join(' ');
    
    var reStr=/(-[^\s-](?:-\S+)?|--\S+)\s*([^\s-]*)?/g;
    
    var match;
    
    while(match = reStr.exec(value)){
        var key = match[1].replace(/-/g,'');
        match[2]=typeof(match[2]) == 'undefined'?"true":match[2];
        if(key in result){
            if(typeof(result[key]) == 'array'){
                result[key].push(match[2]);
            }else{
                result[key]=new Array(result[key],match[2]);
            }
        }else{
            result[key]=match[2];
        }
    }
    
    var _value=value.replace(/--?\S+\s*[^-\s]*/g,"").replace(/\s+$/g,"").split(/\s+/);
    result._ = result._.concat(_value);
    return result;
}