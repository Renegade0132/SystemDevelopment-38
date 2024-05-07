function getUserData(variable) {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(this.responseText);
                } else {
                    reject(new Error('Request failed with status:', this.status));
                }
            }
        };
        xhttp.open("POST", "../Server/Class_User.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("variableToGet=" + variable);
    });
}