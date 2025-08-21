import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Input } from '../input/input';
import { Text } from '../text/text';
import { Button } from '../button/button';

import * as z from 'zod';

const emailSchema = z.email('Must be a valid email.');

const WaitlistForm = ({ pageContent }: { pageContent: any }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (emailError) setEmailError('');
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);

    if (!result.success) {
      const errorMsg = z.prettifyError(result.error);
      setEmailError(errorMsg);
    } else {
      const body = JSON.stringify({ email });
      const response = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      const data = await response.json();
    }
    setEmail('');
  };

  return (
    <form onSubmit={handleFormSubmit} className="mt-1 w-full max-w-sm">
      <Text variant="muted" class="text-left">
        {pageContent.email_label}
      </Text>
      <Input
        type="text"
        name="email"
        class="global_base"
        placeholder={pageContent.email_form_placeholder}
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <small className="text-red-600">{emailError}</small>}
      <Button disabled={!email} type="submit" size="submit" class="mt-4">
        {pageContent.submit_label}
      </Button>
    </form>
  );
};

export default WaitlistForm;
