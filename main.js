var createCounter = function(n) {
    let t=n-1;
    return function() {
        t++;
        return t;
    };
};

