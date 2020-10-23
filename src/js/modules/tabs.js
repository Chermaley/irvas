const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
      

    function hideTabContent(){
        content.forEach((item)=>{
            item.style.display = "none";
        });
        tab.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }
    function showTabContent(i = 0){
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }
    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
    const target = e.target;
    if(target && (
        target.classList.contains(tabSelector.replace(/\./, '')) || 
    target.parentNode.classList.contains(tabSelector.replace(/\./, '')))){
        tab.forEach((item, i) =>{
            if(target == item || target.parentNode == item){
                hideTabContent();
                showTabContent(i);
            }
        });
    }
    });
          
};
export default tabs;




 // function bindTab(tabSelector, tabContentSelector, activeClassSelector){
    //     const tab = document.querySelectorAll(tabSelector),
    //           tabContent = document.querySelectorAll(tabContentSelector),
    //           activeClass = document.querySelector(activeClassSelector);

    // function openTab(i = 0){
    //     tabContent.forEach((item) => {
    //     item.style.display ="none";
    //     });
    //     tabContent[i].style.display = "block";
    // }     

    // tab.forEach((item, i) =>{
    //     item.addEventListener('click', () => openTab(i));
    // });


    // }
    // bindTab('.tablink', '.glazing_content');
    // bindTab('.internal_link', '.decoration_content .row');