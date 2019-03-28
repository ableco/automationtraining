const removeDupliucatedWords = function (sentence)
{
    sentence= sentence.toLowerCase ();
    let totalWords = sentence.split (" ").length; 
    let newSentence = sentence.slice (0,sentence.indexOf(' '));
    sentence = sentence.slice (sentence.indexOf(' ')+1,sentence.length); 

    for (let i=1; i <totalWords ; i++)
    {
        if (i === totalWords -1)
        {
            var compareWord = sentence;
        }
        else
        {
            var compareWord = sentence.slice (0,sentence.indexOf(' '));
        }
        if (!newSentence.includes(compareWord))
        {
            newSentence = newSentence + ' '+compareWord;   
        }
        sentence = sentence.slice (sentence.indexOf(' ')+1,sentence.length); 
    }
    return newSentence;
}

console.log(removeDupliucatedWords ('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));