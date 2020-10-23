import "./slider";
import modal from './modules/modal';
import tabs from './modules/tabs';
import changeModalState from "./modules/changeModalState";
import forms from "./modules/forms";
import timer from "./modules/timer";
import images from './modules/images';

document.addEventListener('DOMContentLoaded', () =>{
'use strict';

let modalState = {};
const deadline = '2020-10-20';
modal(modalState);
changeModalState(modalState);

tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
forms(modalState, '.popup_calc_end');
timer('#timer', deadline);
images();


});
