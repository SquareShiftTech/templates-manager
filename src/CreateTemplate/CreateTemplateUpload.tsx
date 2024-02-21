/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
import type { InputFileProps } from '@looker/components'
import {
  Button,
  CardContent,
  ComponentsProvider,
  Heading,
  InputFile,
  ProgressCircular,
  Space,
} from '@looker/components'
import React, { useState } from 'react'
import { Toaster, toast } from 'sonner'
import { uploadFile } from '../api/api'

const FileUploadInput = (props: InputFileProps) => {
  const {
    handleFile = () => {
      // file handling logic here
    },
    accept = '.xlsx,.csv',
    value = 'Accepts only PDF files',
    placeholder = 'File not selected',
    ...restProps
  } = props

  return (
    <>
      <InputFile
        handleFile={handleFile}
        accept={accept}
        value={value}
        placeholder={placeholder}
        {...restProps}
      />
    </>
  )
}

const Loading = () => {
  return (
    <Space justify="center" height={'50vh'}>
      <ProgressCircular />
      Uploading Template Please Wait...
    </Space>
  )
}
export const CreateTemplateUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = () => {
    if (file) {
      setIsLoading(true)
      const formData = new FormData()
      formData.append('file', file)

      uploadFile(formData)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log('File Uploaded', response)
          toast.success('File Uploaded Sucessfully', {
            position: 'top-center',
            duration: 1000,
          })
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  return (
    <ComponentsProvider
      themeCustomizations={{
        colors: { key: '#1A73E8' },
      }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <CardContent maxWidth={'50%'}>
          <Heading marginBottom={'10px'}>Upload Template</Heading>
          <Space gap={'small'} marginTop={'10px'} marginBottom={'20px'}>
            <FileUploadInput
              buttonText="Chose Template"
              handleFile={function (value: File): void {
                setFile(value)
                setFileName(value.name)
              }}
            />
            <Button onClick={handleSubmit} disabled={fileName?.length === 0}>
              Upload Template
            </Button>
          </Space>
        </CardContent>
      )}
      <Toaster richColors />
    </ComponentsProvider>
  )
}
