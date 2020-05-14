export const PersonalInformationFormInputs = [
    {
        name: 'name',
        label: 'Fullname',
        elementType: 'input',
        config: {
            type: 'text',
            placeholder: 'Your Full Name',
        },
        value: '',
        validation: {
          required: true
        }
    },
    {
        name: 'location',
        label: 'Location',
        elementType: 'input',
        config: {
            type: 'text',
            placeholder: 'Location',
        },
        value: '',
        validation: {
          required: true
        }
    },
    {
        name: 'zipcode',
        label: 'Zip Code',
        elementType: 'input',
        config: {
            type: 'text',
            placeholder: 'Zip Code',
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
          isNumeric: true
        }
    },
    {
        name: 'nationality',
        label: 'Nationality',
        elementType: 'input',
        config: {
            type: 'text',
            placeholder: 'Country',
        },
        value: '',
        validation: {
          required: true
        }
    },
    {
        name: 'gender',
        label: 'Gender',
        elementType: 'select',
        config: {
            options: [
              { value: 'male', text: 'Male' },
              { value: 'female', text: 'Female' },
              { value:  'other', text: 'Other' }
            ]
          },
          value: 'Male',
          validation: {},
    },
    {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        elementType: 'date',
        config: {
            type: 'date',
            placeholder: 'mm / dd / yyyy'
        },
        value: '',
        validation: {
          required: true,
          isDate: true
        }, 
    },
    {
        name: 'email',
        label: 'E-mail',
        elementType: 'input',
        config: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        }
    },
    {
        name: 'mobile',
        label: 'Mobile',
        elementType: 'input',
        config: {
            type: 'text',
            placeholder: 'Phone'
        },
        value: '',
        validation: {
          required: true,
          minLength: 10,
          maxLength: 20,
          isNumeric: true
        }
    },
    {
        name: 'permanentAddress',
        label: 'Permanent Address',
        elementType: 'textarea',
        config: {
            placeholder: 'Provide your Permanent Address'
        },
        value: '',
        validation: {
          required: true
        }
    },
    {
        name: 'localAddress',
        label: 'Local Address',
        elementType: 'textarea',
        config: {
            placeholder: 'Provide your Local Address',
        },
        value: '',
        validation: {
            required: true
        }
    }
]