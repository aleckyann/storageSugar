function setStorage(nameStorage, data = ''){
    localStorage.setItem(nameStorage, data);
}

function getStorage(nameStorage){
    try {
        return localStorage.getItem(nameStorage);
    } catch (e) {
        console.log(e);
    }
}

function removeStorage(nameStorage){
    try {
        localStorage.remove(nameStorage);
    } catch (e) {
        console.log(e);
    }
}

function clearStorages(){
    try {
        localStorage.clear();
    } catch (e) {
        console.log(e);
    }
}
