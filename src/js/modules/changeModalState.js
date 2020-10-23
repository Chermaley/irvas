import checkNumInputs from "./checkNumInputs";
import modal from "./modal";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems(event, element, prop) {
        element.forEach((item, i) => {
                item.addEventListener(event, () => {
                        switch (item.nodeName) {
                            case 'SPAN':
                                state[prop] = i;
                                break;
                            case 'INPUT':
                                if (item.getAttribute('type') === 'checkbox') {
                                    i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                                    element.forEach((box, j)=>{   // Проверка на одну галочку.
                                        box.checked = false;
                                        if(i == j){
                                            box.checked = true;
                                        }
                                    });
                                } else {
                                   state[prop] = item.value;
                                }
                                break;
                            case 'SELECT':
                                state[prop] = item.value;
                                break;
                        }
                        console.log(state);
                        return state;   
                    });
                   
                });
                
               

        }
        

bindActionToElems('click', windowForm, 'form');
bindActionToElems('input', windowWidth, 'width');
bindActionToElems('input', windowHeight, 'height');
bindActionToElems('change', windowType, 'type');
bindActionToElems('change', windowProfile, 'profile');




};

export default changeModalState;