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
import {
  CardContent,
  ComponentsProvider,
  Heading,
  FieldSelect,
  Button,
} from '@looker/components'
import React, { useEffect, useState } from 'react'
import fileDownload from 'js-file-download'
import { toast } from 'sonner'
import { getTemplates } from '../api/api'

export const DownLoadTemplate: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [existingTemplates, setExistingTemplates] = useState<string[]>([''])
  const [selectedTemplate, setSelectedTemplate] = useState<string>()

  useEffect(() => {
    getTemplates().then((response) => {
      setExistingTemplates(response)
      setIsLoading(false)
    })
  }, [])

  const templateChangeHandler = (value: string) => {
    setSelectedTemplate(value)
  }

  const downloadButtonHandler = (e: any) => {
    e.preventDefault()
    // fetch the file url for selectedtemplate
    const fileUrl =
      'https://support.staffbase.com/hc/en-us/article_attachments/360009197011/username-password-recovery-code.csv'
    fileDownload(fileUrl, selectedTemplate || 'downloaded_file.csv')
    toast.success('File Downloaded Sucessfully', {
      position: 'top-center',
      duration: 1000,
    })
  }

  return (
    <ComponentsProvider
      themeCustomizations={{
        colors: { key: '#1A73E8' },
      }}
    >
      <CardContent maxWidth={'50%'}>
        <Heading marginBottom={'10px'}>Download Template</Heading>
        <FieldSelect
          name="templates"
          label="Templates"
          defaultValue={existingTemplates[0]}
          options={existingTemplates.map((templateName) => ({
            label: templateName,
            value: templateName,
          }))}
          onChange={templateChangeHandler}
          marginBottom={'10px'}
          placeholder="Please select a template"
        />
        <Button
          onClick={downloadButtonHandler}
          disabled={isLoading || !selectedTemplate}
        >
          Download Template
        </Button>
      </CardContent>
    </ComponentsProvider>
  )
}
