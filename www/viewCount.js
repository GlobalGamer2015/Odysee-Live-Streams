function viewCount(data) {
    console.log(data.viewCount)
    if(data.viewCount === undefined) {
        return _viewCount = 0;
    }
    else {
        return _viewCount = data.viewCount-1; // Subtract 1 viewer due to the App acting as a user
    }
}