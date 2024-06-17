import React, { memo } from 'react';
import { Input, InputProps } from 'antd';

export const MemoInput = memo<InputProps>((props) => {
  return <Input {...props} />;
});


