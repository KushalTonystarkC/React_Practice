import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import SimpleForm from './SimpleForm';

// const config ={
//     width: "400px",
//     height: "500px",
//     floating: true,
//   };
class SpeechSynthesis extends Component{
    render() {
        return (
            <ChatBot
            headerTitle="Talking Bot"
            recognitionEnable={true}
            speechSynthesis={{ enable: true, lang: 'fr' }}
            steps={[
                {
                    id: '1',
                    message: 'What is your name?',
                    trigger: '2',
                },
                {
                    id: '2',
                    user: true,
                    validator: (value) => {
                        if (/^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*/.test(value))
                        {
                        return true;
                        }
                        else
                        {
                        return'Please input proper Name.';
                        }
                        },
                    trigger: '3',
                    repeat: false
                },
                {
                    id: '3',
                    message: 'Hi {previousValue}, Nice to meet you! Are you a Madridista ?',
                    trigger: 'check',
                },
                {
                    id: 'check',
                    options: [
                    { value: 'yes', label: 'Yes', trigger: '4' },
                    { value: 'no', label: 'No', trigger: '5' },
                    ],
                },
                {
                    id: '4',
                    message: 'Great! Welcome to the official fanpage of Real Madrid Fan',
                    trigger: '6',
                },
                {
                    id: '5',
                    message: 'Sorry. You are a traitor please leave.I dont want to talk to you.',
                    end: true,
                },
                {
                    id: '6',
                    message: 'Do You want to Join Us ?',
                    trigger: 'check1',
                },
                {
                    id: 'check1',
                    options: [
                    { value: 'yes', label: 'Yes', trigger: '7' },
                    { value: 'no', label: 'No', trigger: '8' },
                    ],
                },
                {
                    id: '7',
                    component: <SimpleForm />,
                    end: true,
                },
                {
                    id: '8',
                    message: 'Sad to hear this. Thank you for visiting this website!!',
                    end: true,
                },
          
    ]}
    // {...config}
/>
    );
}
}

export default SpeechSynthesis;