export const DataStructure = [
    {
        name: 'qualificationLevel',
        label: 'Qualification Level',
        type: 'select',
        config: {
            options: [
              { value: 'tenthLevel', text: 'Tenth Level' },
              { value: 'twelthLevel', text: 'Twelth Level' },
              { value: 'diploma', text: 'Diploma' },
              { value: 'graduateLevel', text: 'Graduate Level' },
              { value: 'postGraduateLevel', text: 'Post Graduate Level' },
              { value: 'doctrate', text: 'Doctrate' }
            ]
          },
          validation: {},
          valid: true
    },
    {
        name: 'universityBoard',
        label: 'University / Board',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'University / Board'
        },
        validation: {
          required: true
        }, 
        valid: false,
        touched: false
    },
    {
        name: 'yearOfPass',
        label: 'Year of Pass',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Year of pass e.g. 2020'
        },
        validation: {
          required: true,
          minLength: 4,
          maxLength: 4,
          isNumeric: true
        }, 
        valid: false,
        touched: false
    },
    {
        name: 'resultClassification',
        label: 'Result Classification',
        type: 'select',
        config: {
            options: [
              { value: 'third', text: 'Third Class' },
              { value: 'second', text: 'Second Class' },
              { value: 'first', text: 'First Class' },
              { value: 'distiction', text: 'Distiction' },
            ]
          },
          validation: {},
          valid: true
    },
    {
        name: 'institute',
        label: 'Institute',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Name of the institute'
        },
        validation: {
          required: true
        }, 
        valid: false,
        touched: false
    },
    {
        name: 'subject',
        label: 'Subject',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Enter Subject'
        },
        validation: {
          required: true
        }, 
        valid: false,
        touched: false
    },
    {
        name: 'percentageOfMark',
        label: 'Percentage of Mark',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Percentage of Mark'
        },
        validation: {
          required: true,
          isFloat: true
        }, 
        valid: false,
        touched: false
    }
]