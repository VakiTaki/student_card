export function validator(data, config) {
   const errors = {};
   const validate = (validateMethod, data, config) => {
      let statusValidate;
      switch (validateMethod) {
         case "isRequired": {
            if (typeof (data) === "boolean") {
               statusValidate = !data;
            } else {
               statusValidate = (data.trim() === "");
            }
            break;
         }

         case "isEmail": {
            const emailRegExp = /^\S+@\S+\.\S+$/g;
            statusValidate = !emailRegExp.test(data);
            break;
         }
         case "isCapitalSymbol": {
            const capitalSymbolRegExp = /[A-Z]+/g;
            statusValidate = !capitalSymbolRegExp.test(data);
            break;
         }
         case "isContainDigit": {
            const containDigitRegExp = /\d+/g;
            statusValidate = !containDigitRegExp.test(data);
            break;
         }
         case "minLength": {
            statusValidate = data.length < config.value;
            break;
         }
         case "isName": {
            const containDigitRegExp = /^[^' -][a-zA-ZА-ЯЁа-яё'-]{1,20}[^ ]$/ug;
            statusValidate = !containDigitRegExp.test(data);
            break;
         }
         case "isStudentAge": {
            statusValidate = (+(new Date().getFullYear()) - 100 >= +data)
            break;
         }
         case "isFuture": {
            statusValidate = +(new Date().getFullYear()) < +data
            break;
         }
         case "isUrl": {
            const emailRegExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
            statusValidate = !emailRegExp.test(data);
            break;
         }
         default:
            break;
      }
      if (statusValidate) return config.message;
   };
   for (const fieldName in data) {
      for (const validateMethod in config[fieldName]) {
         const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod]);
         if (error && !errors[fieldName]) { errors[fieldName] = error; };
      }
   }
   return errors;
}
