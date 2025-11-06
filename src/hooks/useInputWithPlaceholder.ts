import { useState, useCallback } from 'react';

export const useInputWithPlaceholder = (placeholderValue: string = '') => {
  const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const getDisplayValue = useCallback(() => {
    return value || (isFocused ? '' : placeholderValue);
  }, [value, isFocused, placeholderValue]);

  const getActualValue = useCallback(() => {
    return value || placeholderValue;
  }, [value, placeholderValue]);

  return {
    value,
    setValue,
    displayValue: getDisplayValue(),
    actualValue: getActualValue(),
    inputProps: {
      onFocus: handleFocus,
      onBlur: handleBlur,
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    },
  };
};
