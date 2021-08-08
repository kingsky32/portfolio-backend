module.exports = {
  apps: [
    {
      name: 'portfolio-server',
      script: 'yarn',
      args: 'start',
      watch: false,
      ignore_watch: ['[/\\]./', 'node_modules', 'logs'],
      exec_mode: 'cluster',
    },
  ],
};
