/*
** nopCommerce custom js functions
*/



function OpenWindow(query, w, h, scroll) {
    var l = (screen.width - w) / 2;
    var t = (screen.height - h) / 2;

    winprops = 'resizable=0, height=' + h + ',width=' + w + ',top=' + t + ',left=' + l + 'w';
    if (scroll) winprops += ',scrollbars=1';
    var f = window.open(query, "_blank", winprops);
}

function setLocation(url) {
    window.location.href = url;
}

function displayAjaxLoading(display) {
    if (display) {
        $('.ajax-loading-block-window').show();
    }
    else {
        $('.ajax-loading-block-window').hide('slow');
    }
}

function displayPopupNotification(message, messagetype, modal) {
    //types: success, error, warning
    var container;
    if (messagetype == 'success') {
        //success
        container = $('#dialog-notifications-success');
    }
    else if (messagetype == 'error') {
        //error
        container = $('#dialog-notifications-error');
    }
    else if (messagetype == 'warning') {
        //warning
        container = $('#dialog-notifications-warning');
    }
    else {
        //other
        container = $('#dialog-notifications-success');
    }

    //we do not encode displayed message
    var htmlcode = '';
    if ((typeof message) == 'string') {
        htmlcode = '<p>' + message + '</p>';
    } else {
        for (var i = 0; i < message.length; i++) {
            htmlcode = htmlcode + '<p>' + message[i] + '</p>';
        }
    }

    /*Pro nopCommerce*/
    if (messagetype == 'error') {
        $('#dialog-notifications-error div').html(htmlcode);
    }
    else if (messagetype == 'warning') {
        $('#dialog-notifications-warning div').html(htmlcode);
    }
    else {
        $('#dialog-notifications-success div').html(htmlcode);
    }

    //var isModal = (modal ? true : false);
    //container.dialog({modal:isModal});
    container.bPopup({
        opacity: '0.3',
        positionStyle: 'fixed',
    });
    /*Pro nopCommerce*/
}

function displayJoinedPopupNotifications(notes) {
    if (Object.keys(notes).length === 0) return;

    var container = $('#dialog-notifications-success');
    var htmlcode = document.createElement('div');

    for (var note in notes) {
        if (notes.hasOwnProperty(note)) {
            var messages = notes[note];

            for (var i = 0; i < messages.length; ++i) {
                var elem = document.createElement("div");
                elem.innerHTML = messages[i];
                elem.classList.add('popup-notification');
                elem.classList.add(note);

                htmlcode.append(elem);
            }
        }
    }

    container.html(htmlcode);
/*Pro nopCommerce*/
    //container.dialog({
    //    width: 350,
    //    modal: true
    //});

    container.bPopup({
        opacity: '0.3',
        positionStyle: 'fixed',
    });
/*Pro nopCommerce*/
}

function displayPopupContentFromUrl(url, title, modal, width) {
    var isModal = (modal ? true : false);
    var targetWidth = (width ? width : 550);
    var maxHeight = $(window).height() - 20;

    $('<div></div>').load(url)
        .dialog({
            modal: isModal,
            width: targetWidth,
            maxHeight: maxHeight,
            title: title,
            close: function (event, ui) {
                $(this).dialog('destroy').remove();
            }
        });
}


function displayBarNotification(message, messagetype, timeout) {
    var notificationTimeout;

    var messages = typeof message === 'string' ? [message] : message;
    if (messages.length === 0)
        return;

    //types: success, error, warning
    var cssclass = ['success', 'error', 'warning'].indexOf(messagetype) !== -1 ? messagetype : 'success';
    //remove previous CSS classes and notifications
    $('#bar-notification')
        .removeClass('success')
        .removeClass('error')
        .removeClass('warning');
    $('.bar-notification').remove();

    //we do not encode displayed message

    //add new notifications
    var htmlcode = '';
    if ((typeof message) == 'string') {
        htmlcode = '<p class="content">' + message + '</p>';
    } else {
        for (var i = 0; i < message.length; i++) {
            htmlcode = htmlcode + '<p class="content">' + message[i] + '</p>';
        }
    }
    //$('#bar-notification').append(htmlcode)
    //    .addClass(cssclass)
    //    .fadeIn('slow')
    //    .mouseenter(function ()
    //        {
    //            clearTimeout(barNotificationTimeout);
    //        });

    //$('#bar-notification .close').unbind('click').click(function () {
    //    $('#bar-notification').fadeOut('slow');
    //});

    ////timeout (if set)
    //if (timeout > 0) {
    //    barNotificationTimeout = setTimeout(function () {
    //        $('#bar-notification').fadeOut('slow');
    //    }, timeout);
    //}
    //Pro nopCommerce
    $('#bar-notification div').html(htmlcode);

    $('#bar-notification').addClass(cssclass).bPopup({
        opacity: '0.5',
        modalColor: '#666666',
        positionStyle: 'fixed',
    });
}

function htmlEncode(value) {
    return $('<div/>').text(value).html();
}

function htmlDecode(value) {
    return $('<div/>').html(value).text();
}


// CSRF (XSRF) security
function addAntiForgeryToken(data) {
    //if the object is undefined, create a new one.
    if (!data) {
        data = {};
    }
    //add token
    var tokenInput = $('input[name=__RequestVerificationToken]');
    if (tokenInput.length) {
        data.__RequestVerificationToken = tokenInput.val();
    }
    return data;
};