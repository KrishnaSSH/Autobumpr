const readline = require('readline');
const { Client } = require('discord.js-selfbot-v13');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your token: ', (token) => {
    rl.question('Enter the channel ID to bump in: ', (channelId) => {
        rl.close();

        const client = new Client();

        client.on('ready', async () => {
            console.log(`✅ Logged in as ${client.user.tag}`);

            let channel;
            try {
                channel = await client.channels.fetch(channelId);
            } catch (e) {
                console.log('❌ Invalid channel ID or unable to fetch channel.');
                process.exit(1);
            }

            async function bump() {
                try {
                    await channel.sendSlash('302050872383242240', 'bump');
                    console.count('✅ Bumped!');
                } catch (e) {
                    console.log('❌ Failed to send bump command.');
                }
            }

            function loop() {
                const randomDelay = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000;
                setTimeout(async () => {
                    await bump();
                    loop();
                }, randomDelay);
            }

            bump();
            loop();
        });

        client.login(token).catch(() => {
            console.log('❌ Invalid token provided.');
            process.exit(1);
        });
    });
});
