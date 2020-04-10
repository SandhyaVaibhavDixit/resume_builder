export const DataStructure = [
    {
        name: 'name',
        label: 'Fullname',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Your Full Name'
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
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Location'
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
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Zip Code'
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
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Country'
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
        type: 'select',
        config: {
            options: [
              { value: 'male', displayValue: 'Male' },
              { value: 'female', displayValue: 'Female' },
              { value:  'other', displayValue: 'Other' }
            ]
          },
          value: 'Male',
          validation: {},
          valid: true
    },
    {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'dd / mm / yyyy'
        },
        value: '',
        validation: {
          required: true
        }, 
        valid: false,
        touched: false
    },
    {
        name: 'email',
        label: 'E-mail',
        type: 'input',
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
        type: 'input',
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
        type: 'textarea',
        config: {
            type: 'text',
            placeholder: 'Provice your Permanent Address'
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
        type: 'textarea',
        config: {
            type: 'text',
            placeholder: 'Provide your Local Address'
        },
        value: '',
        validation: {
            required: true
        }, 
        valid: false,
        touched: false
    }
]