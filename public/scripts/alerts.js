function createAlert(type, text) {
    if($('.alerts').length == 0) {
        $('.wrapper').append(`<div class="alerts"></div>`)
    }
    const alerts = {
        danger: {
            icon: `
            <svg class="alert-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Iconly/Regular/Light/Danger Circle">
                <g id="Danger Circle">
                <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 2.75021C17.1081 2.75021 21.2501 6.89121 21.2501 12.0002C21.2501 17.1082 17.1081 21.2502 12.0001 21.2502C6.89112 21.2502 2.75012 17.1082 2.75012 12.0002C2.75012 6.89121 6.89112 2.75021 12.0001 2.75021Z" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 3" d="M11.9952 8.20432V12.6233" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 5" d="M11.995 15.7962H12.005" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </g>
            </svg>
            `,
            className: "danger-alert"
        },
        warning: {
            icon: `
            <svg class="alert-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Iconly/Regular/Light/Danger Triangle">
                <g id="Danger Triangle">
                <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M4.81397 20.4369H19.197C20.779 20.4369 21.772 18.7269 20.986 17.3529L13.8 4.78793C13.009 3.40493 11.015 3.40393 10.223 4.78693L3.02497 17.3519C2.23897 18.7259 3.23097 20.4369 4.81397 20.4369Z" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 3" d="M12.0024 13.4149V10.3149" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 2" d="M11.995 16.5001H12.005" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </g>
            </svg>
            `,
            className: "warning-alert"
        },
        success: {
            icon: `
            <svg class="alert-icon"  viewBox="0 0 24 24" fill="none">
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