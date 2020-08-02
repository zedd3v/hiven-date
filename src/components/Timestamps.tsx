import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

export default ({
  date,
  unix,
  iso,
}: {
  date: string;
  unix: string;
  iso: string;
}): JSX.Element => {
  return (
    <div className="w-100">
      <FormControl
        id="date"
        className="w-100 my-4 light-input text-center"
        value={date}
        disabled
      />
      <FormControl
        id="unix"
        className="w-100 mb-4 light-input text-center"
        value={unix}
        disabled
      />
      <FormControl
        id="iso"
        className="w-100 light-input text-center"
        value={iso}
        disabled
      />
    </div>
  );
};
