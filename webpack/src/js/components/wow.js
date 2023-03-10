export default function() {
    let scrollEls = document.querySelectorAll('.wow');

    const elementInView = (el) => {
        let elTop = el.getBoundingClientRect().top;
        let elBot = el.getBoundingClientRect().bottom;
        return elTop <= window.innerHeight - 100 || window.innerHeight >= elBot;
    }

    const displayElement = (el) => {
        let delay = el.hasAttribute('data-wow-delay') ?
                    el.getAttribute('data-wow-delay') : 0;
        setTimeout(() => {
            el.classList.add("wow-init");
        }, delay);

        scrollEls = document.querySelectorAll('.wow:not(.wow-init)');
    };

    const handleScroll = () => {
        if (!scrollEls.length) {
            window.removeEventListener("scroll", handleScroll);
            return;
        }

        [...scrollEls].forEach((el) => {
            if (elementInView(el)) {
                displayElement(el);
            }
        })
    }

    if (scrollEls) {
        window.addEventListener('DOMContentLoaded', handleScroll);
        window.addEventListener("scroll", handleScroll);
    }
}
