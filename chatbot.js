// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg =>{

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! ' + name.split(" ")[0] + ' sou o assistente virtual do Fabio Tattoo .  Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Orçamentos\n2 - Outras Informações '); //Primeira mensagem de texto

        
    }


    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Certo!  ' + name.split(" ")[0] + ' Vou te fazer algumas perguntas,  nao se preocupe vai ser rapidão !   ');

    await delay(3000); //delay de 3 segundos
    await chat.sendStateTyping(); // Simulando Digitação
    await delay(3000);
    await client.sendMessage(msg.from,'É maior de 18 anos?\n\n7 - sim\n8 - não ');

    }
    
    if (msg.body !== null && msg.body === '8' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from,' Erro critico no Sistema , Volte aqui alguns anos depois ...');

    }

    if (msg.body !== null && msg.body === '7' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from,'Certo! Podemos seguir ...');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from,'Em qual parte do corpo deseja tatuar?\n\n3 - Braço\n4 - pernas\n5 - Costas\n6 - Outro lugar');
    }
    
     if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'Entendi! ' + name.split(" ")[0] + ' Vou te Encaminhar para falar diretamente com o Fabio e ele te passa o Orcamento certinho ta bom  ?');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Enquanto ele prepara pra te responder da uma olhada nos trabalhos dele no instagram e aproveita e já segue ele! https://instagram.com/fabiosilveiratattoo '); 
     
    }
    
    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
            const chat = await msg.getChat();
            await delay(3000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(3000);
            const contact = await msg.getContact(); //Pegando o contato
            const name = contact.pushname; //Pegando o nome do contato
            await client.sendMessage(msg.from, 'Entendi! ' + name.split(" ")[0] + ' Vou te Encaminhar para falar diretamente com o Fabio e ele te passa o Orcamento certinho ta bom ?  ');
            
            await delay(3000); //delay de 3 segundos
            await chat.sendStateTyping(); // Simulando Digitação
            await delay(3000);
            await client.sendMessage(msg.from, 'Enquanto ele prepara pra te responder da uma olhada nos trabalhos dele no instagram e aproveita e já segue ele! https://instagram.com/fabiosilveiratattoo ');
            

     }
     
     if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
                const chat = await msg.getChat();
        
                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                const contact = await msg.getContact(); //Pegando o contato
                const name = contact.pushname; //Pegando o nome do contato
                await client.sendMessage(msg.from, 'Entendi! ' + name.split(" ")[0] + ' Vou te Encaminhar para falar diretamente com o Fabio e ele te passa o Orcamento certinho ta bom ?  ');

                await delay(3000); //delay de 3 segundos
                await chat.sendStateTyping(); // Simulando Digitação
                await delay(3000);
                await client.sendMessage(msg.from, 'Enquanto ele prepara pra te responder da uma olhada nos trabalhos dele no instagram e aproveita e já segue ele! https://instagram.com/fabiosilveiratattoo');
      }
      
      if (msg.body !== null && msg.body === '6' && msg.from.endsWith('@c.us')) {
                    const chat = await msg.getChat();
                    await delay(3000); //delay de 3 segundos
                    await chat.sendStateTyping(); // Simulando Digitação
                    await delay(3000);
                    const contact = await msg.getContact(); //Pegando o contato
                    const name = contact.pushname; //Pegando o nome do contato
                    await client.sendMessage(msg.from, 'Entendi! ' + name.split(" ")[0] + ' Vou te Encaminhar para falar diretamente com o Fabio e ele te passa o Orcamento certinho ta bom ?  ');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Enquanto ele prepara pra te responder da uma olhada nos trabalhos dele no instagram e aproveita e já segue ele! https://instagram.com/fabiosilveiratattoo');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Vou te encaminhar para falar com um dos nossos Atendentes');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Enquanto ele prepara pra te responder da uma olhada nos trabalhos dele no instagram, aproveita e já segue ele!  https://instagram.com/fabiosilveiratattoo');
  


    }
    
});