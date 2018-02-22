function parse (string) {
    var object = {};
    var a = string.split(';');
    for(var i = 0; i < a.length; i++){
        var b = a[i].split('=');
        if(b[0].length > 1 && b[1]){
            object[b[0]] = b[1];
        }
    }
    return object;
}
module.exports = {
    parse: function (a) {
        return parse(a);
    },
    get: function (a,b) {
        return parse(a)[b];
    },
    parsePromise: function (a) {
        return new Promise(function (b,c) {
            try{
                b(parse(a));
            }catch(d){
                c(d);
            }
        });
    },
    getPromise: function (a,b) {
        return new Promise(function (c,d) {
            try{
                c(parse(a)[b]);
            }catch(e){
                d(e);
            }
        });
    },
};