import React from 'react';
import { LockTwoTone, MailOutlined } from '@ant-design/icons';
import { ProFormText } from '@ant-design/pro-form';

export default function LogIn({ styles }) {
  return (
    <>
      <ProFormText
        name="badgeNumber"
        fieldProps={{
          size: 'large',
          prefix: <MailOutlined className={styles.prefixIcon} />,
        }}
        placeholder="Enter your Badge number"
        rules={[
          {
            required: true,
            message: 'Badge number is required',
          },
        ]}
      />
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'large',
          prefix: <LockTwoTone className={styles.prefixIcon} />,
        }}
        placeholder="Enter your password"
        rules={[
          {
            required: true,
            message: 'Password is required',
          },
        ]}
      />
      {/* <ProFormSelect
        name="userType"
        hasFeedback
        valueEnum={{
          admin: 'Admin',
          user: 'User',
        }}
        placeholder="Login as"
        rules={[{ required: true, message: 'Please select login as' }]}
      /> */}
    </>
  );
}
