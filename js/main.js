document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const target = document.querySelector(this.dataset.bsTarget);

            if (target.classList.contains('show')) {
                target.classList.remove('show');
            } else {
                const allOpenItems = document.querySelectorAll('.accordion-collapse.show');
                allOpenItems.forEach(item => {
                    item.classList.remove('show');
                });
                target.classList.add('show');
            }
        });
    });
});
