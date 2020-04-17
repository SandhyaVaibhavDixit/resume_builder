export const DataStructure = [
    {
        name: 'company',
        label: 'Company',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Name of the company'
        },
        value: '',
        validation: {
          required: true
        }, 
        valid: false,
        touched: false
    },
    {
        name: 'post',
        label: 'Post',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Name of the post'
        },
        value: '',
        validation: {
          required: true
        }, 
        valid: false,
        touched: false
    },
    {
        name: 'duration',
        label: 'Duration',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Ex: 2 years and 3 months, 2 months, 16 days'
        },
        value: '',
        validation: {
        required: true
        }, 
        valid: false,
        touched: false
    }
]