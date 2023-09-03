import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import CustomTextInput from './CustomTextInput';
import CustomButton from './CustomButton';
import CustomTitle from './CustomTitle';
import Password from './Password';
import {makeApiCall} from '../utils/apiCalls';

interface FormData {
  inputType: 'password' | 'text' | 'button' | 'title';
  placeholder: string;
  value: string;
  validation: string;
  label: string;
  name: string;
  maxLength: number;
  submitUrl?: string;
}

interface FormGeneratorProps {
  formData: FormData[];
}

const FormGenerator: React.FC<FormGeneratorProps> = ({formData}) => {
  const [formValues, setFormValues] = useState<{[name: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    console.log(`name: ${name}, value: ${value}`);
    console.log(formValues);
    setFormValues(prevFormValues => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (submitUrl: string) => {
    try {
      setIsLoading(true);
      const response = await makeApiCall(formValues, submitUrl);
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <View>
      {formData?.map((field, index) => {
        if (field.inputType === 'text') {
          return (
            <CustomTextInput
              key={field.name}
              placeholder={field.placeholder}
              name={field.name}
              value={formValues?.name}
              onChange={handleInputChange}
            />
          );
        } else if (field.inputType === 'button' && !isLoading) {
          return (
            <CustomButton
              key={field.name}
              label={field.label}
              submitUrl={field.submitUrl}
              onPress={handleSubmit}
            />
          );
        } else if (field.inputType === 'title') {
          return <CustomTitle key={`title-${index}`} title={field.label} />;
        } else if (field.inputType === 'password') {
          return (
            <Password
              key={field.name}
              placeholder={field.placeholder}
              name={field.name}
              value={formValues?.name}
              onChange={handleInputChange}
            />
          );
        }
        return null;
      })}
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

export default FormGenerator;
