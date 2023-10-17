document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const targetId = this.getAttribute('data-tab-target');
            const target = document.querySelector(targetId);

            tabContents.forEach(tabContent => {
                tabContent.style.display = 'none';
            });

            target.style.display = 'block';
        });
    });
});
