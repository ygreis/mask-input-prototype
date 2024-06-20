"use strict";

(() => {

    reais.maskBr().addEventListener('input', function(e){
        var value = e.target.value;
        result_reais.innerText = value.brToNumber().toMonetary('en-US', 'USD');
    });

    usd.maskUsd().addEventListener('input', function(e){
        var value = e.target.value;
        result_usd.innerText = value.brToNumber().toMonetary();
    });

})()

