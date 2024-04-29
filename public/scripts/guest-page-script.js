$(function() {
    $('#more-details-btn').on('click', () => {  
        $('html, body').animate({ 
            scrollTop: $('.about-section').offset().top
        }, {
            duration: 0,
            easing: 'linear',
        });
    })

    const scrollToTopBtn = $('#scrollToTopBtn')
    $(window).on('scroll', () => {
        if ($(document).scrollTop() > ($('section:nth-child(1)').height() * 0.80)) {
            scrollToTopBtn.addClass('active')
        } else {
            scrollToTopBtn.removeClass('active')
        }
    })

    scrollToTopBtn.on('click', () => {
        $('html, body').animate({ 
            scrollTop: 0
        }, {
            duration: 0,
            easing: 'linear',
        });
    })

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.7 });

    observer.observe(document.querySelector('.about-us-block'))
    document.querySelectorAll('.feature-card').forEach((element) => {
        observer.observe(element)
    })

})