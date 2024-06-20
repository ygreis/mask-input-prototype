"use strict";

(() => {

    function _toMonetary(lang = 'pt-BR', currency = 'BRL', options = {}){
        let result = new Intl.NumberFormat(lang, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            ...options
        });
        
        return result.format(this);
    }

    Number.prototype.toMonetary = _toMonetary;
    
    String.prototype.toNumber = function() {
        return Number(this.replace(/[^0-9-]+/g, ''));
    }
    
    String.prototype.brToNumber = function() {
        return Number(this.replace(/\D/g, '').replace(/\./g, '').replace(/,/g, '.')) / 100;
    }
    
    HTMLInputElement.prototype.maskBr = function() {
        if(this.__proto__.__maskBr){
            console.log('ja instanciado');
            return;
        }
    
        this.__proto__.__maskBr = true;
    
        this.addEventListener('input', function(e){
    
            const val = e.target.value;    
            const float = val.brToNumber();
            const br = float.toMonetary();
    
            e.target.value = br;
        })
    
        return this;
    }

    HTMLInputElement.prototype.maskUsd = function() {
        if(this.__proto__.__maskUsd){
            console.log('ja instanciado');
            return;
        }
    
        this.__proto__.__maskUsd = true;
    
        this.addEventListener('input', function(e){
    
            const val = e.target.value;  
            e.target.value = val.brToNumber().toMonetary('en-US', 'USD');
        })
    
        return this;
    }

})();