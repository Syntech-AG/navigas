import React, { useState } from 'react';
import { useFetchClient } from '@strapi/strapi/admin';
import { Box, Flex, Field, TextInput, Button, Typography, Card } from '@strapi/design-system';
import { Upload, Check } from '@strapi/icons';

const HomePage = () => {
  const { post } = useFetchClient();
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select an Excel file');
      return;
    }

    const form = new FormData();
    form.append('excel', file);

    setBusy(true);
    setError(null);

    try {
      const { data } = await post('/excel-import/upload', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert(`Imported ${data.imported} cars`);
      setFile(null);
    } catch (err) {
      const msg = err.response?.data?.error?.message || err.message;
      console.error('Upload failed:', msg);
      alert(`Upload failed: ${msg}`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh" background="neutral100">
      <Card minWidth="320px" maxWidth="400px" width="100%" padding={6}>
        <Box marginBottom={4}>
          <Typography variant="beta" fontWeight="bold">
            Excel Import
          </Typography>
        </Box>

        <form onSubmit={onSubmit}>
          <Box marginBottom={6}>
            <Field.Root name="excel" error={error} required>
              <Field.Label>Select Excel File</Field.Label>
              <Field.Input
                type="file"
                accept=".xlsx,.xls"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  if (error) setError(null);
                }}
                disabled={busy}
              />
              <Field.Error />
            </Field.Root>

            {file && (
              <Flex alignItems="center" gap={1} marginTop={2}>
                <Check color="success600" />
                <Typography variant="pi" textColor="success600">
                  {file.name}
                </Typography>
              </Flex>
            )}
          </Box>

          <Button
            type="submit"
            startIcon={<Upload />}
            disabled={!file || busy}
            loading={busy}
            size="L"
            fullWidth
          >
            {busy ? 'Uploading…' : 'Upload Excel'}
          </Button>
        </form>
      </Card>
    </Flex>
  );
};

export { HomePage };
