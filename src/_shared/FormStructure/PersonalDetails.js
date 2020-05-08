export const FormInputs = [
    {
        name: 'name',
        label: 'Fullname',
        type: 'input',
        config: {
            type: 'text',
            placeholder: 'Your Full Name',
            tabIndex: '1'
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
            placeholder: 'Location',
            tabIndex: '2'
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
            placeholder: 'Zip Code',
            tabIndex: '3'
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
            placeholder: 'Country',
            tabIndex: '4'
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
              { value: 'male', text: 'Male' },
              { value: 'female', text: 'Female' },
              { value:  'other', text: 'Other' }
            ],
            tabIndex: '5'
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
            type: 'date',
            placeholder: 'mm / dd / yyyy',
            tabIndex: '6'
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
        type: 'input',
        config: {
          type: 'email',
          placeholder: 'Your E-Mail',
          tabIndex: '7'
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
            placeholder: 'Phone',
            tabIndex: '8'
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
            placeholder: 'Provide your Permanent Address',
            tabIndex: '9'
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
            placeholder: 'Provide your Local Address',
            tabIndex: '10'
        },
        value: '',
        validation: {
            required: true
        }, 
        valid: false,
        touched: false
    }
]