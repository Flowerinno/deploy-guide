const commands = [
  'cd /home/ubuntu/app/current/server',
  'npm install',
  'npm run production:env',
  'npx prisma db push',
  'npx prisma generate',
  'pm2 startOrRestart ecosystem.config.js --env production',
  'pm2 save',
];

module.exports = {
  apps: [
    {
      name: 'app-server',
      script: 'npm run build && npm run start:prod',
      autorestart: true,
      max_restarts: 50,
      max_memory_restart: '1024M',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  // Deployment Configuration
  deploy: {
    production: {
      key: './example-application.pem', //your downloaded .pem file
      user: 'ubuntu',
      host: 'ec2-3-67-example.eu-central-1.compute.amazonaws.com', //your ec2 instance
      ssh_options: 'StrictHostKeyChecking=no',
      ref: 'origin/main',
      repo: 'git@github.com:account/example.git',
      path: '/home/ubuntu/app',
      'post-deploy': commands.join(' && '),
    },
  },
};
