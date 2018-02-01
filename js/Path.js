'use strict';

console.log( '2. Path.js was loaded.' );

function Path()
{
    this.PATH = '/home/Shakiba/bin/';

    this.pwd =
        [
            'home',
            'Shakiba',
        ];

    this.get = function()
    {
        return this.pwd.join( '/' );
    }

    // this.list = [];

    // all files and directories
    this.root =
        {
            'Shakiba' :
            {
                'bin'       : 'directory',
                'Desktop'   : 'directory',
                'Download'  : 'directory',
                'Documents' : 'directory',
                'Music'     : 'directory',
                'Videos'    : 'directory',
                'Pictures'  : 'directory',
                'Templates' : 'directory',
                'workplace' : 'directory',
                'Public'    : 'directory',

                'README'    : 'readable',
            },

            'bin' :
            {
                'ls'      : 'executable',
                'df'      : 'executable',
                'cd'      : 'executable',
                'clear'   : 'executable',
                'pwd'     : 'executable',
                'cat'     : 'executable',
                'echo'    : 'executable',
                'history' : 'executable',
                'bc'      : 'executable',
                'fs'      : 'executable',
                'date'    : 'executable',
                'help'    : 'executable',
                'ii'      : 'executable',
                'open'      : 'executable',
            },
            'Desktop'   : { },
            'Downloads' : { },
            'Documents' :
            {
                'about-me' : 'readable',
                'project'  : 'readable',
                'skill'    : 'readable',
            },
            'Music'     : {
                'README' : 'readable',
                'alexander-rybak-fairytale.mp3' : 'media',
            },
            'Videos'    : { 'video.mp4' : 'media' },
            'Pictures'  :
            {
                'README' : 'readable',
                'at-mountain.jpg' : 'media',
                'scorpion-as-pet.jpg' : 'media',
                'my-hand-bead.jpg' : 'media',
            },
            'Templates' : { },
            'workspace' : { },
            'Public'    : { }
        };

    this.readable =
    {
        Shakiba :
        {
            'README' :
            [
                '█░░░█ █▀▀ █░░ █▀▀ █▀▀█ █▀▄▀█ █▀▀',
                '█▄█▄█ █▀▀ █░░ █░░ █░░█ █░▀░█ █▀▀',
                '░▀░▀░ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀▀ ▀░░░▀ ▀▀▀',
                'to red-cursor.',
                'A simple, but still beautiful Terminal Emulator.',
                '',
                'This is an app with pure JavaScript, HTML and CSS.',
                '',
                'For navigation between directories use [cd].',
                'All four arrow keys are handled.',
                'For reading the contents of files use [cat] command.',
                '[clear] the screen anytime you need.',
                '[open] a media when you like.',
                'Also you can type [help] or just press Control + h',
                '',
                'red-cursor copyright (C) 2017 Shakiba',
                'https://github.com/k-five/red-cursor',
                // 'copyright (C) 2017..' + ( ( Date().toString().split( ' ' ) )[3] ) + ' Shakiba',
            ]
        },
        Pictures  :
        {
            'README' :
            [
                'at-mountain:',
                'About 2013 at the mountain around Sanandaj.',
                'I am at the right side with costume clothes and',
                '    a backpack. It was about spring.',
                '',
                'scorpion-as-pet:',
                'I had a lot of pets but this one was special.',
                'I got it at mountain. My family forced my to',
                '    let it go.',
                '',
                'my-hand-bead:',
                'One of my handmade.',
                'I designed/created a log of handmade with bead.',
            ],
            'at-mountain.jpg' : 'resizable=yes,top=200,left=200,width=850,height=650',
            'scorpion-as-pet.jpg' : 'resizable=yes,top=200,left=200,width=1050,height=850',
            'my-hand-bead.jpg' : 'resizable=yes,top=200,left=200,width=650,height=650',
        },

        Videos :
        {
            'video.mp4' : 'resizable=yes,top=200,left=200,width=820,height=620'
        },

        Music :
        {
            'README' :
            [
                "Years ago, when I was younger",
                "I kinda liked a girl I knew",
                "She was mine and we were sweethearts",
                "That was then, but then it’s true",
                "",
                "I’m in love with a fairytale",
                "Even though it hurts",
                "‘Cause I don’t care if I lose my mind",
                "I’m already cursed",
                "",
                "Every day we started fighting",
                "Every night we fell in love",
                "No one else could make me sadder",
                "But no one else could lift me high above",
                "",
                "I don’t know what I was doing",
                "When suddenly, we fell apart",
                "Nowadays, I cannot find her",
                "But when I do, we’ll get a brand new start",
                "",
                "I’m in love with a fairytale",
                "Even though it hurts",
                "‘Cause I don’t care if I lose my mind",
                "I’m already cursed",
                "",
                "She’s a fairytale, yeah…",
                "Even though it hurts",
                "‘Cause I don’t care if I lose my mind",
                "I’m already cursed",
            ],

            'alexander-rybak-fairytale.mp3' : 'resizable=yes,top=200,left=200,width=300,height=50',
        },
        Documents :
        {
            'about-me' :
            [
                'A self taught/motivated programmer.',
                'degree in electrical (= associate-degree) below bachelor.',
                '',
                'self-taught, creative, indefatigable',
                'critical-thinking, neat and punctual.',
                'console / keyboard / emacs -nw lover.',
            ],

            'project' :
            [
                'non-software:',
                '6 month supervisor (= I plus 3 girls), and producing Air-Filter for cars.',
                '14 months working in love-house project (when Mr. Mahmood.A.N was the President).',
                '    I was a contractor and had 8 blocks (= 64 units). I was wiring.',
                '1 year repearing smart-phone(s) (=software: root, jailbreak, etc) and an active',
                '    member in: pda-planet.com forum.',
                'I have been for 6 months parkour coach.',
                'I already had written a book in Persian about: [the secret]. But was not published.',

                '',
                'software:',
                '\u25A0 renrem: rename and remove files based on regex + colorizing output.',
                '\u25A0 drr   : same as renrem but in D language. renrem is in C++',
                '\u25A0 cecho : simple ANSI color tester in C language.',
                '\u25A0 bline : beautifully print line. In C.',
                '\u25A0 rinp  : Run in Parallel. Running multi-commands in parallel.',
                '\u25A0 LCBE  : Learning Code By Example. In C, C++, D, Perl and so on.',
                '\u25A0 RFC   : some wrapper for std::regex in C++.',
                '\u25A0 red-cursor    : Simulate Unix/Linux Terminal with JavaScript, HTML and CSS.',
                '\u25A0 Perl-one-liner: illustrating how to use Perl one-liners.',

                '',
                'In English language:',
                '\u25CF academic word definition: definition of academic words.',
                '\u25CF rong-chang-new-word     : new vocabulary for English Learner.',
                '\u25CF VoALP                   : Vocabulary of Advanced Linux Programming book.',
                '\u25CF computer-fundamental    : Computer Fundamental new vocabulary + audio-book',
                '\u25CF operating system        : Operating System new vocabulary',
            ],

            'skill' :
            [
                'human-language : Kurdish, Persian, English (US)',
                'system-language: C, C++ and D.',
                'script-language: Perl, Bash.',
                'web-client-side: HTML, CSS and JavaScript.',
                'web-server-side: PHP and MySql.',
                'miscellaneous  : regex, fast-typing, DSVC (= git), bead designer',
                'OS             : Linux (= Ubuntu), and Windows (=7) and Android',
                '               : more than 80% I use console CLI, not GUI.',
                'sport          : Yoga more than 10 years.',
                '               : Physical Fitness more than 10 years.',
                '               : Parkour more than 2 years.'
            ]

        }
    };

    // return current working directory
    this.cwd = function( name )
    {
        if( name === undefined )
        {
            return this.pwd [ this.pwd.length - 1 ];
        }
        else
        {
            this.pwd.push( name );
            return this.pwd [ this.pwd.length - 1 ];
        }
    }

    // this.update = function()
    // {
    //     // clear everything in the list
    //     this.list = [];

    //     // update the list of files and directories in the Current Working Directory
    //     for( var files in this.root[ this.pwd [ this.pwd.length - 1 ] ] )
    //     {
    //         this.list.push( files );
    //     }
    // }
}
