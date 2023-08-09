function countDown(x) {
    const timer = setInterval(function() { 
        if (x - 1 === 0) { 
            clearInterval(timer); 
            console.log("DONE!");
        }
        else {
            console.log(--x); 
        }
    }, 1000); // Repeat every 1000 milliseconds
}

countDown(4);
