export const AttachDocumentFormInputs = [
    {
        name: 'fileName',
        label: 'File',
        elementType: 'file',
        config: { 
            elementType: 'file',
            placeholder: 'File'
        }
    },
    {
        name: 'title',
        label: 'Title',
        elementType: 'input',
        config: {
            type: 'text',
            placeholder: 'Title'
        }
    },
    {
        name: 'description',
        label: 'Description',
        elementType: 'textarea',
        config: {
            placeholder: 'Add some description about the file'
        }
    }
] 