const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('YOUR_API_KEY_TOKEN');

// Handler /start
bot.start((ctx) => {
    sendMainMenu(ctx);
});

// Main menu
function sendMainMenu(ctx) {
    ctx.reply('Welcome to easy start bot',
        Markup.keyboard([
            ['View one'],
            ['View two'],
            ['View three'],
            ['About this bot']
        ])
            .resize()
            .oneTime(false)
    );
}

// Handlers 
bot.hears('View one', (ctx) => {
    ctx.reply('This is view example',
        Markup.inlineKeyboard([
            [Markup.button.callback('option one', 'show_photo')],
            [Markup.button.callback('option three', 'show_video')],
            [Markup.button.callback('Back to main menu', 'main_menu')]
            // Add options... more information: https://telegraf.js.org/functions/Markup.inlineKeyboard.html
        ])
    );
});

bot.hears('View two', (ctx) => {
    ctx.reply('This is view example',
        Markup.inlineKeyboard([
            [Markup.button.callback('option one', 'show_photo')],
            [Markup.button.callback('option three', 'show_video')],
            [Markup.button.callback('Back to main menu', 'main_menu')]
            // Add options... more information: https://telegraf.js.org/functions/Markup.inlineKeyboard.html
        ])
    );
});

bot.hears('View three', (ctx) => {
    ctx.reply('This is view example',
        Markup.inlineKeyboard([
            [Markup.button.callback('option one', 'show_photo')],
            [Markup.button.callback('option three', 'show_video')],
            [Markup.button.callback('Back to main menu', 'main_menu')]
            // Add options... more information: https://telegraf.js.org/functions/Markup.inlineKeyboard.html
        ])
    );
});

// Actions 
bot.action('show_photo', async (ctx) => {
    await ctx.replyWithPhoto({ url: 'URL_YOUR_PHOTO' }, { caption: 'Message photo' });
    await sendOptionMenu(ctx)
    // More information: https://telegraf.js.org/classes/Telegraf-1.html#action-2
});

bot.action('show_video', async (ctx) => {
    await ctx.sendVideo({ url: 'URL_YOUR_VIDEO' }, { caption: 'Message video' });
    await sendOptionMenu(ctx);
    // More information: https://telegraf.js.org/classes/Telegraf-1.html#action-2
});

// About this bot
bot.hears('About this bot', async (ctx) => {
    await ctx.reply('About information this bot');
    await sendToMainMenu(ctx);
});

// Handlers inline menu
bot.action('main_menu', (ctx) => {
    sendMainMenu(ctx);
});

// Functions example
function sendOptionMenu(ctx) {
    ctx.reply('Message',
        Markup.inlineKeyboard([
            [Markup.button.callback('Back to menu', 'main_menu')]
        ])
    );
}

function sendToMainMenu(ctx){
    ctx.reply('Message',
        Markup.inlineKeyboard([
            [Markup.button.callback('Back to Menu', 'main_menu')]
        ])
    );
}

// Launch bot
bot.launch();

// Handler errors
bot.catch((err) => {
    console.error('Error:', err);
});

console.log('Bot Connected ✅');
