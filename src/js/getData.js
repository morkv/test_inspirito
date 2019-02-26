const getData = (e) => {
    
    let renderData = document.querySelector('.render-val');

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);
    xhr.onload = () => {
        if(xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            let output = ``;

            Object.prototype.findKey = function(keyObj) {
                var p, key, val, tRet;
                for (p in keyObj) {
                    if (keyObj.hasOwnProperty(p)) {
                        key = p;
                        val = keyObj[p];
                    }
                }
            
                for (p in this) {
                    if (p == key) {
                        if (this[p] == val) {
                            return this;
                        }
                    } else if (this[p] instanceof Object) {
                        if (this.hasOwnProperty(p)) {
                            tRet = this[p].findKey(keyObj);
                            if (tRet) { return tRet; }
                        }
                    }
                }
            
                return false;
            };
            let label = data.findKey({ id: e });
            output = `<p> Label: ${label.label}</p>`
            renderData.innerHTML = output;
            
        } else if(xhr.status == 404) {
            innerText.innerHTML = `not found`
        }
    }
    xhr.send()

}

const getId = () => {
    let getDataBtn = document.querySelector('.input-get');
    let getDataVal = document.querySelector('.get-val');

    getDataBtn.addEventListener('click', (e) => {
        getData(getDataVal.value)
        getDataVal.value = ''
    });
}

export default  getId;