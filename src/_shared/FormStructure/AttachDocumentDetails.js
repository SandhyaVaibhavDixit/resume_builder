export const DataStructure = [
    {
        name: 'title',
        label: 'Title',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Title'
        },
        value: '',
        validation: {
          required: true
        }, 
        valid: false,
        touched: false
    },
    {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        config: {
            type: 'text',
            placeholder: 'Add some description about the file'
        },
        value: '',
        validation: {
            required: true
        }, 
        valid: false,
        touched: false
    }
] 