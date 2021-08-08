module.exports = {
  apps: [
    {
      name: 'portfolio-server',
      script: './dist/index.js', 
      watch: false,
      ignore_watch: ['[/\\]./', 'node_modules', 'logs'],
      exec_mode: 'cluster',
    },
  ],
};

