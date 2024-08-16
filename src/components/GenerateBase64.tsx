import { useState } from 'react';

import { Button, Card, Layout, Page, Text, TextField } from '@shopify/polaris';

const GenerateBase64 = () => {
  const [base64Image, setBase64Image] = useState<string>('');
  const [imageInput, setImageInput] = useState<string>('');

  const handleGenerateImage = () => {
    // Generate a Base64 image (currently a red square)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 100;
    if (ctx) {
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      setBase64Image(canvas.toDataURL('image/png'));
      setImageInput(canvas.toDataURL('image/png')); // Optionally set it to input for demonstration
    }
  };

  const handleImageInputChange = (value: string) => {
    setImageInput(value);
    setBase64Image(value);
  };

  return (
    <Page narrowWidth>
      <Text as='h1' variant='headingLg'>
        dekodo enkodo base64
      </Text>

      <Layout>
        <Button onClick={handleGenerateImage}>Generate Image</Button>
      </Layout>

      <Card roundedAbove='sm'>
        <TextField
          label='Input Base64 Image'
          value={imageInput}
          onChange={handleImageInputChange}
          multiline={false}
          placeholder='Paste Base64 image data here'
          autoComplete='off'
        />

        {base64Image && (
          <img
            src={base64Image}
            alt='Generated Image'
            style={{
              marginTop: '20px',
              maxWidth: '100%',
              maxHeight: '100px',
            }}
          />
        )}
      </Card>
    </Page>
  );
};

export default GenerateBase64;
