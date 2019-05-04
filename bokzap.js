const Inko = require('inko');
var inko = new Inko();
var zap = {};
zap.key = `01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=_+	[]\\{}|;':",./<>? ~\`이다의는에을하한고가로기지사서은도를대정리자수시으있어구인나제국과그해전부것일적아연라성들상원여보장화주소동공조스경계용위우게학만개면되관문유선중산치신회발비분생내방무와세니물등할실통었미모러업교체진재안야명민간며단당요년거마금된오본했법합식없각였결영행때데력반설터려속운양현차종말형음술석바입역임않작히및건질표외*@`.split("");
zap.encode = function(inp){
	var input = (typeof inp == "string")?inp.split(""):"";
	
	var output = input.map(text => this.key.indexOf(text));
	var nowHangul = false;
	console.log(inko.is한글("가"));
	var output2 = [];
	for(var i in output){
		if(output[i] == -1){
			if(inko.is한글(input[i])){
				if(!nowHangul){
					output2.push(254);
				}
				nowHangul = true;
				for(var j in inko.ko2en(input[i])){
					output2.push(this.key.indexOf(inko.ko2en(input[i])[j]));
				}
			}else{
				console.log(input[i]);
				output2.push(255);
			}
		}else{
			if(nowHangul){
				output2.push(254);
			}
			nowHangul = false;
			output2.push(output[i]);
		}
	}
	
	console.log(output2);
	var buf = new Buffer.from(output2);
	return buf;
}
zap.decode = function(inp){
	var input = [...inp];
	console.log(inp);
	var output = input.map(num => this.key[num]);
	return output.join("");
}
module.exports = zap;