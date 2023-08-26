
const TelegramBot = require('node-telegram-bot-api');

const token = '6616263618:AAHUcrbnd54vReGN_uO7nrLXI2qNc_tgkQY';
const webAppUrl = 'https://clinquant-sfogliatella-365c77.netlify.app';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Received your message', {
      reply_markup: {
        keyboard: [
          [{text: 'fill in the form', web_app: {url: webAppUrl}}],
          
        ]
      }
    });

    await bot.sendMessage(chatId, 'button below, fill out the form', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'Buy TonDeV Coin', web_app: {url: webAppUrl + '/form'}}],
        ]
      }
    })

  }
});