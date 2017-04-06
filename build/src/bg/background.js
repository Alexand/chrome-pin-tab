'use strict';

(function () {
    var _chrome = chrome,
        commands = _chrome.commands,
        tabs = _chrome.tabs;


    commands.onCommand.addListener(function (command) {
        if (command !== 'toggle-pintab') {
            return;
        }

        tabs.getSelected(function (_ref) {
            var pinned = _ref.pinned;
	    tabs.update(_ref.id, { pinned: !pinned })
        });
    });
})();
