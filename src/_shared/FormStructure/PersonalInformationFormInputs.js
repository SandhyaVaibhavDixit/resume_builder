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
        }, 
        valid: false,
        touched: false
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
        }, 
        valid: false,
        touched: false
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
        },
        valid: false,
        touched: false
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
        }, 
        valid: false,
        touched: false
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
          valid: true
    },
    {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        elementType: 'input',
        config: {
            type: 'date',
            placeholder: 'mm / dd / yyyy'
        },
        value: '',
        validation: {
          required: true,
          isDate: true
        }, 
        valid: false,
        touched: false
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
        },
        valid: false,
        touched: false
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
        },
        valid: false,
        touched: false
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
        }, 
        valid: false,
        touched: false
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
        }, 
        valid: false,
        touched: false
    }
]