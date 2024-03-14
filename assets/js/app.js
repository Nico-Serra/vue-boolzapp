//console.log('hello ');

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
                date: '15:30',
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
                            date: '15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '16:15',
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
                            date: '16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '16:35',
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
                            date: '10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '16:15',
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
                            date: '15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '15:50',
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
                            date: '15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '15:50',
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
                            date: '15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '15:50',
                            message: 'Non ancora',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '15:51',
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
                            date: '15:30',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '15:50',
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
                            date: '15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                            ,
                            delete: true,
                            hidden: false,
                        },
                        {
                            date: '15:51',
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
            //console.log(newMessage);
            contact.messages.push(newMessage)
            this.userMessage.message = ''

            setTimeout(function () {
                const okMessage = {
                    date: '16:15',
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
            //console.log(newContacts)
            return newContacts
        },
        /*showAllContacts(contacts){
            const allcontacts = {this.contacts}
            console.log(allcontacts);
        },*/
        openMenu(chat){
            chat.hidden= true
        },
        deleteMessage(chat){
            chat.delete= false
        }
    },
    mounted() {
        //onsole.log(this.contacts[0].visible);
        //console.log(this.contacts[0].messages.status);
        //console.log(this.search.length);
    },
}).mount('#app')