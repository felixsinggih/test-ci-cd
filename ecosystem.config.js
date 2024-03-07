module.exports = {
    apps: [{
        name: 'test-cicd',
        script: 'node_modules/next/dist/bin/next',
        instances: 1,
        exec_mode: 'cluster',
        args: 'start -- -p 3003',
        max_memory_restart: '128M',
        env_production: {
            NODE_ENV: 'production'
        }
    }]
}