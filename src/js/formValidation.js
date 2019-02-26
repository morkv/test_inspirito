const validateAction = () => {
    const formValidation = document.querySelector('.form--validation')
    formValidation.addEventListener('submit',validateForm);

    var rules = {
        required: function(e){
            if(e.value != '') {
                return true;
            }
            return false;
    },
    username: function(e) {
        // var reg = /^[a-zA-Z0-9]{1,36}$/;
        var reg = /^[A-Z]{1}[a-z]{0,29}$/
        if(reg.test(e.value)){
            e.style.borderColor = 'lightblue'
            return true
        }
        e.style.borderColor = 'red'
    },

    address: function(e) {
            var reg = /^[#.0-9a-zA-Z\s,-]{1,100}$/;
            if(reg.test(e.value)){
                e.style.borderColor = 'lightblue'
                return true
            }
            e.style.borderColor='red'
    },
    addressSecond: function(e) {
            var reg = /^[#.0-9a-zA-Z\s,-]{0,100}$/;
            if(reg.test(e.value)){
                e.style.borderColor = 'lightblue'
                return true
            }
            e.style.borderColor = 'red'
        
    },
    city: function(e) {
            var reg = /^[A-Z]{1}[A-Za-z . ,'-]{0,49}$/;
            if(reg.test(e.value)){
                e.style.borderColor = 'lightblue'
                return true
            }
            e.style.borderColor = 'red'
            
    },
    zip: function(e) {
            var reg = /^[0-9]{5}$/;
            if(reg.test(e.value)){
                e.style.borderColor = 'lightblue'
                return true
            }
            e.style.borderColor = 'red'
            
    },
    state: function(e) {
            var reg = /^[#.0-9a-zA-Z\s,-]{1,100}$/;
            if(reg.test(e.value)){
                e.style.borderColor = 'lightblue'
                return true
            }
            e.style.borderColor = 'red'
            
        }
    }

    function validateForm(e){
        let errors=[];
        let inputsAll = document.forms[0].elements;
        for(let i =0;i<inputsAll.length;i++){
            let rulesList = inputsAll[i].dataset.rule;
            rulesList = rulesList.split(' ');
            for(let j = 0;j<rulesList.length;j++){
                if(rulesList[j] in rules) {
                    if(!rules[rulesList[j]](inputsAll[i])){
                        errors.push({
                            name: inputsAll[i].name,
                            error: rulesList[j]
                        });
                    }
                }
            }
        }
        if(errors.length > 0){
            e.preventDefault()
            // showErrors(errors);
        }
    }

    function showErrors(arr){

    }
}

export default validateAction;