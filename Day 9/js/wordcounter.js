document.getElementById('input').addEventListener('input', function () {
    var text = this.value,
    //wordcount
    wordCount = text.trim().replace(/\s+/g, ' ').split(' ').length;

    //charactercount
    characterCount = text.replace(/\s+/g,"").length

    if (characterCount !== 0){
        document.getElementById('words').textContent = wordCount;
        
        //reading time counter
        overallReadingSeconds = Math.ceil(wordCount/4);
        readingMinutes = Math.floor(overallReadingSeconds/60);
        readingSeconds = overallReadingSeconds % 60;
        if (readingMinutes <= 0) {
            document.getElementById('readingtime').textContent = `${overallReadingSeconds} sec`;
        } else{
            document.getElementById('readingtime').textContent = `${readingMinutes} min(s) ${readingSeconds} sec`;
        }

        //reading time counter
        overallSpeakingSeconds = Math.ceil(wordCount/3);
        speakingMinutes = Math.floor(overallSpeakingSeconds/60);
        speakingSeconds = overallSpeakingSeconds % 60;
        if (speakingMinutes <= 0) {
            document.getElementById('speakingtime').textContent = `${overallSpeakingSeconds} sec`;
        } else{
            document.getElementById('speakingtime').textContent = `${speakingMinutes} min(s) ${speakingSeconds} sec`;
        }


    } else {
        document.getElementById('words').textContent = 0;
        document.getElementById('readingtime').textContent = "0 sec";
    }

    document.getElementById('characters').textContent = characterCount;
    });