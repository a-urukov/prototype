exports.blocks = [
    {
        name: 'i-bem',
        elems: [
            {
                name: 'dom',
                mods: { 'init': 'auto' }
            },
            { name: 'elem' },
            { name: 'i18n' },
            { name: 'interface' }
        ]
    },
    { name: 'ua' },
    { name: 'b-page' },
    { name: 'p-morda' },
    { name: 'b-phrase' },
    { name: 'b-phrase-edit' },
    { name: 'p-phrases' },
    { name: 'link' },
    { name: 'dropdown', mods: { switcher : 'link', theme : 'normal' } },
    { name: 'popup' },
    { name: 'input', mods: { theme: 'normal', type: 'textarea' } },
    { name: 'checkbox', mods: { theme: 'normal'}  },
    { name: 'button', mods: { theme: 'normal'} }
];
