

class Validator {
    constructor() {
        this.cache = [];
        this.strategies = {
            isNotEmpty(value, message) {
                if (value == "") {
                    return message;
                }
            },
            phoneVerify(str, message) {
                var reg = /^((13\d)|(14[5,7,9])|(15[0-3,5-9])|(166)|(17[0,1,3,5,7,6,8])|(18[0-9])|(19[8,9]))\d{8}/;
                if (!reg.test(str)) {
                    return message;
                }
            }
        }
    }
    add(dom, rules) {
        let _this = this;
        for (var i = 0, rule; (rule = rules[i++]);) {
            var strategyArr = rule.strategy.split(":");
            var message = rule.message;
            this.cache.push(function () {
                var strategy = strategyArr.shift();
                strategyArr.unshift(dom);
                strategyArr.push(message);
                return _this.strategies[strategy].apply(_this, strategyArr);
            });
        }
    }
    start() {
        for (var i = 0, fun; (fun = this.cache[i++]);) {
            var message = fun();
            if (message) break;
        }
        return message;
    }

}


export const validator = (form, rules, cb) => {
    let validator = new Validator();
    for (let keys of Object.keys(form)) {
        if (rules[keys]) {
            validator.add(form[keys], rules[keys]);
        }
    }
    cb(validator.start());
}

