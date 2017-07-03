function nextPrime(){
	if(typeof nextPrime.p === "undefined"){
		nextPrime.p = 1;
	}
	if(!(nextPrime.p==1 || nextPrime.p==2)){
		while(1){
			var prePrime = nextPrime.p;
			if(nextPrime.p % 2 == 0){
				nextPrime.p += 1;
			}else{
				for(var i=3; i*i<=nextPrime.p; i+=2){
					if(nextPrime.p % i == 0){
						nextPrime.p += 1;
						break;
					}
				}
			}
			if(nextPrime.p==prePrime){
				break;
			}
		}
	}
	var box = document.getElementById("primes");
	var p = document.createElement("p");
	var textNode = document.createTextNode(nextPrime.p);
	p.appendChild(textNode);
	box.appendChild(p);
	nextPrime.p += 1;
}
