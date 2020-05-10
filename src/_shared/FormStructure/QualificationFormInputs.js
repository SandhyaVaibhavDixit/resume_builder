export const QualificationFormInputs = [
    {
        name: 'qualificationLevel',
        label: 'Qualification Level',
        elementType: 'select',
        config: {
            options: [
              { value: '',   text:'Select'},
              { value: 'Tenth Level', text: 'Tenth Level' },
              { value: 'Twelth Level', text: 'Twelth Level' },
              { value: 'Diploma', text: 'Diploma' },
              { value: 'Graduate Level', text: 'Graduate Level' },
              { value: 'Post Graduate Level', text: 'Post Graduate Level' },
              { value: 'Doctrate', text: 'Doctrate' }
            ]
          }
    },
    {
        name: 'universityBoard',
        label: 'University / Board',
        elementType: 'input',
        config: {
            type: 'text',
            placeholder: 'University / Board'
        }
    },
    {
        name: 'yearOfPass',
        label: 'Year of Pass',
        elementType: 'input',
        config: {
            type: 'text',
            placeholder: 'Year of pass e.g. 2020'
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
        elementType: 'select',
        config: {
            options: [
              { value: '',   text:'Select'},
              { value: 'Third Class', text: 'Third Class' },
              { value: 'Second Class', text: 'Second Class' },
              { value: 'First Class', text: 'First Class' },
              { value: 'Distiction', text: 'Distiction' },
            ]
          }
    },
    {
        name: 'institute',
        label: 'Institute',
        elementType: 'input',
        config: {
            type: 'text',
            placeholder: 'Name of the institute'
        }
    },
    {
        name: 'subject',
        label: 'Subject',
        elementType: 'input',
        config: {
            type: 'text',
            placeholder: 'Enter Subject'
        }
    },
    {
        name: 'percentageOfMark',
        label: 'Percentage of Mark',
        elementType: 'input',
        config: {
            type: 'text',
            placeholder: 'Percentage of Mark'
        },
        validation: {
          required: true,
          isFloat: true
        }
    }
]