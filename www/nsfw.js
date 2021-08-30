function nsfw(data) {
    if(data.is_nsfw == 0) {
        return is_nsfw = "False";
    }
    else if(data.is_nsfw == 1) {
        return is_nsfw = "True";
    }
}