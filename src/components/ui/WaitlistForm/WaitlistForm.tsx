import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Input } from '../input/input';
import { Text } from '../text/text';
import { Button } from '../button/button';

const WaitlistForm = ({ pageContent }: { pageContent: any }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('email submitted: ', email);
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
        required
        onChange={handleEmailChange}
      />
      <Button type="submit" size="submit" class="mt-4">
        {pageContent.submit_label}
      </Button>
    </form>
  );
};

export default WaitlistForm;
