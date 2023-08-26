
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
          [{text: 'fill in the form', web_app: {url: webAppUrl + '/form'}}],
          
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

  if (msg?.web_app_data?.data) {
    try {
      const data = JSON.parse(msg?.web_app_data?.data);

      await bot.sendMessage('thanks for the feedback');
      await bot.sendMessage('your country: ' + data?.country );
      await bot.sendMessage('your city: ' + data?.city);

      setTimeout(() => {
      
      })

    } catch (e) {
      console.log(e);
    }
  
  }

});