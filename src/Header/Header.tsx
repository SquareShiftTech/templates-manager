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

import { Flex, FlexItem } from '@looker/components'
import React from 'react'
const Header = () => {
  return (
    <>
      <Flex
        justifyContent="space-between"
        style={{
          backgroundColor: '#4b8468ff',
          color: 'white',
        }}
      >
        <FlexItem>
          <img
            src={
              'https://static.wixstatic.com/media/bd5ec7_50731cf334cd4c1ea9ddabdf6338ee57~mv2.png/v1/fill/w_312,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20white.png'
            }
            width="220"
            height="65"
            alt="Squareshift logo"
          />
        </FlexItem>{' '}
        <FlexItem>
          <h2>Templates manager</h2>
        </FlexItem>
        <FlexItem>
          <h2 style={{ color: '#4b8468ff' }}> Templates manager</h2>
        </FlexItem>
      </Flex>
    </>
  )
}

export default Header
