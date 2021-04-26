import * as yup from 'yup'
import i18n from 'i18next'

const types = {
    number: 'number',
    string: 'letter',
}

yup.setLocale({
    mixed: {
        required: i18n.t('error.required'),
        notType: ({type}) => `you value must be ${types[type]}.`
    },
    string: {
        min: 'the minimum characters must be ${min}',
        max: 'the maximum characters must be ${max}',

    },
    number: {
        min: 'the minimum value must be ${min}',
        max: 'the maximum value must be ${max}',
    },
})