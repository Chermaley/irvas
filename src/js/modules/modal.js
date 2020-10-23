const modal = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();


       
            trigger.forEach(item => {
                let event = item.addEventListener('click', (e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
    
                    if (modal.classList.contains('popup_calc_profile')){   //Если мы хотим перейти на след модал окно
                        if (!state.form || !state.width || !state.height) { // то проверяем на заполненость полей
                            event.removeEventListener();
                           
                        }
                        
                    }
                   
                    if (modal.classList.contains('popup_calc_end')){   //Если мы хотим перейти на след модал окно
                        if (!state.type || !state.profile) { // то проверяем на заполненость полей
                            event.removeEventListener();
                        }
                    }
                    
    
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
        
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden";
                    document.body.style.marginRight = `${scroll}px`;
                    
                    // document.body.classList.add('modal-open');
                });
            });
            

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
            // document.body.classList.remove('modal-open');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
                // document.body.classList.remove('modal-open');
            }
        });
    }


    function openModalTimer(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, time);
    }
    openModalTimer('.popup', 60000);

    function calcScroll(){
        let div = document.createElement('div');
        div.style.overflow = 'scroll';
        div.style.visibility ='hidden';
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
};







export default modal;