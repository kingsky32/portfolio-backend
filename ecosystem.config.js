module.exports = {
  apps: [
    {
      name: 'portfolio-server',
      script: 'npm',
      args: 'start',
      watch: false,
      ignore_watch: ['[/\\]./', 'node_modules', 'logs'],
      exec_mode: 'cluster',
    },
  ],
};
