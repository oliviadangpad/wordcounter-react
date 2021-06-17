function makeFakeRequest(success, failure) {
    setTimeout(function() {
        if (Math.random() > 0.5) {
            success();
        } else {
            failure();
        }
    }, 1500);
}

export default makeFakeRequest;