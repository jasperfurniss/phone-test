import React, { useRef, useEffect } from "react";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { TextInput } from "playbook-ui";

export default function PhoneInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    const telInput = intlTelInput(inputRef.current, {
      // options for the library can be added here
    });
    return () => {
      telInput.destroy();
    };
  }, []);

  return (
    <div>
      <TextInput ref={inputRef} type="tel" paddingLeft="xl" />
    </div>
  );
}
