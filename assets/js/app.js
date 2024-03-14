console.log('hello ');

/*
- Milestone 1
    - Replica della grafica
    - Visualizzazione dinamica della lista contatti tramite il v-for
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            search: '',
            userMessage: {
                date: '10/01/2020 15:30:55',
                message: '',
                status: 'sent',
                delete: true,
                hidden: false
            },
            activeChat: 0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: 0,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: 1,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: 2,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: 3,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: 4,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: 5,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: 6,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: 7,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        showChat(index) {
            this.activeChat = index
        },
        sendMessage(contact) {
            const newMessage = { ...this.userMessage }
            console.log(newMessage);
            contact.messages.push(newMessage)
            this.userMessage.message = ''

            setTimeout(function () {
                const okMessage = {
                    date: '10/01/2020 16:15:22',
                    message: 'OK',
                    status: 'received'
                };
                contact.messages.push(okMessage)
            }, 1000)
        },
        /**
         * 
         * @param {Array} contacts 
         */
        filterContacts(contacts) {
            //const newArray =[{...contacts}]
            //console.log(newArray);
            //console.log(contacts.includes(this.search));
            const newContacts = contacts.filter((contact) => {
                //console.log(contact.name.split('').includes(this.search));
                if (contact.name.toLowerCase().includes(this.search.toLowerCase())) {
                    return contact
                }
            })
            console.log(newContacts)
            this.contacts = newContacts
        },
        /*showAllContacts(contacts){
            contacts = this.contacts
        }*/
        openMenu(chat){
            chat.hidden= true
        },
        deleteMessage(chat){
            chat.delete= false
        }
    },
    mounted() {
        //onsole.log(this.contacts[0].visible);
        console.log(this.contacts[0].messages.status);
    },
}).mount('#app')