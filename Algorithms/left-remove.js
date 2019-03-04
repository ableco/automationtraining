var x =  [2,2,3,5,3,1,5];
var y = [x[0]];
console.log(x);
for (i = 1; i < x.length; i++) { 
	for (j = 0; j < y.length; j++) {
			if(y[j]==x[i]){
				y.splice(j, 1);
			  y.push(x[i]);
			}
			else if(j==y.length-1)
			{
			  	y.push(x[i]);
			}
		}
	}
console.log(y);