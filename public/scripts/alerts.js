function createAlert(type, text) {
    if($('.alerts').length == 0) {
        $('.wrapper').append(`<div class="alerts"></div>`)
    }
    const alerts = {
        danger: {
            icon: `
            <svg class="alert-close-button" viewBox="0 0 24 24" fill="rgb(228,228,228)">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
            </svg>
            `,
            className: "danger-alert"
        },
        warning: {
            icon: `
            <svg class="alert-close-button"  viewBox="0 0 24 24" fill="rgb(228,228,228)">
                <path d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path><path d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"></path>
            </svg>
            `,
            className: "warning-alert"
        },
        success: {
            icon: `
            <svg class="alert-close-button"  viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="rgb(228,228,228)" stroke-width="2"/>
                <path d="M8 12L11 15L16 9" stroke="rgb(228,228,228)" stroke-width="2"/>
            </svg>                       
            `,
            className: "success-alert"
        }
    };
    let $alert = $(`<div class="alert ${alerts[type].className}">${alerts[type].icon}${text}</div>`)
    $('.alerts').append($alert)
    setTimeout(() => {
        $alert.addClass('hidden').fadeOut(function() { $(this).remove() })
    }, 3000);
}