function randomGame() {
    let count = 0;
    const timer = setInterval(function() { 
        let randomNum = Math.random();
        count++;
        if (randomNum > 0.75) { 
            clearInterval(timer); 
            console.log(count);
        }
    }, 1000); // Repeat every 1000 milliseconds
}

randomGame();