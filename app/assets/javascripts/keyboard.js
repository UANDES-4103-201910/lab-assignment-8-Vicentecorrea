class KeyboardController {

    constructor(keyboardId) {
        this.target = keyboardId;
    }

    printOnConsole(keyClass) {
        $('.' + keyClass).click(function () {
            console.log($(this).text());
        });
    }

    write(keyClass) {
        $('.' + keyClass).click(function () {
            var key = $(this).text();
            var bkspKey = $('#bksp-key').text();
            var enterKey = $('#enter-key').text();
            var inputDiv = $('#input-div');
            var inputDivText = inputDiv.text();
            if (key !== bkspKey && key !== enterKey) {
                inputDiv.append(key);
            }
            else {
                if (key === bkspKey) {
                    inputDiv.empty();
                    inputDiv.append(inputDivText.slice(0, -21));
                }
                if (key === enterKey) {
                    inputDiv.append("<br>");
                }
            }
        });
    }

    showHide(buttonId) {
        var showHideButton = $('#' + buttonId);
        var a = this.target;
        showHideButton.click(function () {
            $('#' + a).toggle();
        })
    }
}

// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');
	const keyboard = new KeyboardController('kcontainer');
    keyboard.write('key');
    keyboard.printOnConsole('key');
    keyboard.showHide('show-hide-button');
});

