/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import Button from '../../../../../../library/Button';
import Card, { CardBlock, CardTitle } from '../../../../../../library/Card';
import { mineralTheme } from '../../../../../../library/themes';
import DemoLayout from '../../common/DemoLayout';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const CustomContent: StyledComponent<{ [key: string]: any }> = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.color_gray_20,
    padding: `${theme.space_stack_md} 0`
  })
);

const customContent = (
  <CustomContent>
    <Button fullWidth>Button</Button>
  </CustomContent>
);

export default {
  id: 'children',
  title: 'Arbitrary Children',
  backgroundColor: mineralTheme.color_gray_10,
  description: `A CardBlock will render any children.`,
  scope: { Button, Card, CardBlock, CardTitle, customContent, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{customContent}</CardBlock>
      </Card>
    </DemoLayout>`
};
