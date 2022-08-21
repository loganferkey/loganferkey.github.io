const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-content-block]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => 
            { tabContent.classList.remove('active'); });
        tabs.forEach(t => { t.classList.remove('active-page'); });

        tab.classList.toggle('active-page');
        target.classList.add('active');
    });
});