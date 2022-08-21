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

const commitTree = [
    {
        repo: 'website',
        commithash: '140249fd90e09fd8s0d8f',
        date: '08/21/2022'},
    {
        repo: 'website',
        commithash: '203948fd0f83982098f8d9',
        date: '05/15/2015'},
    {
        repo: 'website',
        commithash: '1487fd9f93092809f89d8f9',
        date: '04/28/2002'},
];

console.table(commitTree);