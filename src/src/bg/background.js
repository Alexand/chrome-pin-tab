(() => {
  const { commands, tabs } = chrome;

  commands.onCommand.addListener(command => {
      if(command !== 'toggle-pintab') {
          return;
      }

      tabs.getSelected(({pinned}) => {
          tabs.update({id}, {
              pinned: !pinned
          });
      });
  });
})();
