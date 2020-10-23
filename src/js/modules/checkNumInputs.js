const checkNumInputs = (selector) =>{
    const NumInputs = document.querySelectorAll(selector);

    NumInputs.forEach((item)=>{
        item.addEventListener('input', ()=>{
            item.value = item.value.replace(/\D/, ''); //проверяем на числа
        });
    });
};
export default checkNumInputs;