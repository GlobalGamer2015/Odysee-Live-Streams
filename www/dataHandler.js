function localStorageHandler(form) {
    for(var i = 0; i < form.length; i++){
        if(form[i].type == 'checkbox'){
            if(localStorage.getItem(`${form[i].id}_option`) !== form[i].checked.toString()) {
                localStorage.setItem(`${form[i].id}_option`, form[i].checked.toString());
            }
        }
    }
}