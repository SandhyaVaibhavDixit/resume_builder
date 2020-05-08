export const FormInputs = [
    {
        name: 'qualificationLevel',
        label: 'Qualification Level',
        type: 'select',
        config: {
            options: [
              { value: '',   text:'Select'},
              { value: 'Tenth Level', text: 'Tenth Level' },
              { value: 'Twelth Level', text: 'Twelth Level' },
              { value: 'Diploma', text: 'Diploma' },
              { value: 'Graduate Level', text: 'Graduate Level' },
              { value: 'Post Graduate Level', text: 'Post Graduate Level' },
              { value: 'Doctrate', text: 'Doctrate' }
            ],
            tabIndex: '1'
          }
    },
    {
        name: 'universityBoard',
        label: 'University / Board',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'University / Board',
            tabIndex: '2'
        }
    },
    {
        name: 'yearOfPass',
        label: 'Year of Pass',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Year of pass e.g. 2020',
            tabIndex: '3'
        },
        validation: {
          required: true,
          minLength: 4,
          maxLength: 4,
          isNumeric: true
        }
    },
    {
        name: 'resultClassification',
        label: 'Result Classification',
        type: 'select',
        config: {
            options: [
              { value: '',   text:'Select'},
              { value: 'Third Class', text: 'Third Class' },
              { value: 'Second Class', text: 'Second Class' },
              { value: 'First Class', text: 'First Class' },
              { value: 'Distiction', text: 'Distiction' },
            ],
            tabIndex: '4'
          }
    },
    {
        name: 'institute',
        label: 'Institute',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Name of the institute',
            tabIndex: '5'
        }
    },
    {
        name: 'subject',
        label: 'Subject',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Enter Subject',
            tabIndex: '6'
        }
    },
    {
        name: 'percentageOfMark',
        label: 'Percentage of Mark',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Percentage of Mark',
            tabIndex: '7'
        },
        validation: {
          required: true,
          isFloat: true
        }
    }
]