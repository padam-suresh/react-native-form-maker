# react-native-form-maker

The react-native-form-maker is a versatile form generation library for React Native. With this powerful tool, you can effortlessly create dynamic forms directly from JSON data. It currently supports various form elements, including text inputs, password fields, and buttons. Simplify your form-building process and enhance your app's user experience by seamlessly integrating react-native-form-maker into your project.",

## Installation

```sh
npm install react-native-form-maker
```

## Usage

```js
    import {FormGenerator} from 'react-native-form-maker';

    <SafeAreaView style={[ {flex: 1, justifyContent: 'center'}]}>
      <FormGenerator
        formData={[
          {
            inputType: 'title',
            placeholder: '',
            value: '',
            validation: '',
            label: 'User Info',
            name: '',
            maxLength: 100,
          },
          {
            inputType: 'text',
            placeholder: 'Username',
            value: '',
            validation: 'true',
            label: 'Username',
            name: 'Username',
            maxLength: 100,
          },
          {
            inputType: 'text',
            placeholder: 'Age',
            value: '',
            validation: 'true',
            label: 'Age',
            name: 'Age',
            maxLength: 100,
          },
          {
            inputType: 'text',
            placeholder: 'Phone no',
            value: '',
            validation: 'true',
            label: 'Phone no',
            name: 'Phone no',
            maxLength: 100,
          },
          {
            inputType: 'text',
            placeholder: 'Email',
            value: '',
            validation: 'true',
            label: 'Email',
            name: 'Email',
            maxLength: 100,
          },
          {
            inputType: 'text',
            placeholder: 'Pincode/Zipcode',
            value: '',
            validation: 'true',
            label: 'Pincode/Zipcode',
            name: 'Pincode',
            maxLength: 100,
          },
          {
            inputType: 'button',
            placeholder: 'Submit',
            value: '',
            validation: 'true',
            label: 'Submit',
            name: 'Submit',
            maxLength: 0,
            submitUrl: 'https://dummy.restapiexample.com/api/v1/create',
          },
        ]}
      />
    </SafeAreaView>

```
## Output

![Output](https://raw.githubusercontent.com/padam-suresh/public-images/main/img.png)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---