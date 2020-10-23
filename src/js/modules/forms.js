import checkNumInputs from './checkNumInputs';

const forms = (state, endModalSelector) =>{         //Селектор последнего окна пекредаем, чтобы закрыть после отправки
        const form = document.querySelectorAll('form'),
              inputs = document.querySelectorAll('input'),  //берем все инпуты, чтобы потом их очистить
              endModal = document.querySelector(endModalSelector);

    checkNumInputs('input[name="user_phone"]');
    const message = {
        loading: "Загрузка",
        success: "Спасибо! Скоро мы с вами свяжемся",
        failure: "Что-то пошло не так...!" 
    };

    const postData = async (url, data) =>{
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, { //Ставим await чтобы дождаться завершения отправки
            method: "POST",
            body: data
        });
        return await res.text(); //Ставим await чтобы дождаться ответа
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item =>{
        item.addEventListener('submit', (e) =>{   //event нужен для того, чтобы страница не пперезагружалась
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') === "end"){
                for(let k in state){
                    formData.append(k, state[k]);
                }
            }

            postData('assets/server.php', formData)
            .then(res => {
                statusMessage.textContent = message.success;
                console.log(res);
            })
            .catch(() => {
              statusMessage.textContent = message.failure;
            })
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                    
                    if(endModal != null){
                        endModal.style.display = "none";        
                        document.body.style.overflow = "";
                    }
                    

                }, 2000);
            });
            state = {};
            
            
        });
    });
};

export default forms;