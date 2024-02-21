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
import React from 'react'

import { ComponentsProvider, Tab2, Tabs2 } from '@looker/components'
import { CreateTemplateUpload } from './CreateTemplate/CreateTemplateUpload'
import { DownLoadTemplate } from './DownloadTemplate/DownLoadTemplate'

export const AppTab: React.FC = () => {
  return (
    <ComponentsProvider
      themeCustomizations={{
        colors: { key: '#1A73E8' },
      }}
    >
      <Tabs2 defaultTabId="createtemplate">
        <Tab2 id="createtemplate" label="Create Template Upload">
          <CreateTemplateUpload />
        </Tab2>
        <Tab2 id="downloadtemplate" label="Download Template Upload">
          <DownLoadTemplate />
        </Tab2>
      </Tabs2>
    </ComponentsProvider>
  )
}
