var word1 = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
var words = word1.split(' ');
var words2 = [words[0]];
console.log(words);
for (i = 1; i < words.length; i++) { 
    for (j=0; j<words2.length; j++){
        if(words2[j]==words[i]){
            words2.splice(j, 1);
            words2.push(words[i]);
        }
        else if(j==words2.length-1)
			{
			  	words2.push(words[i]);
			}
    }
}
console.log(words2.join(' '));