import React from 'react'
import './index.less'
import { Form, Input, Button, Checkbox } from 'antd'
// import Svg from "@components/SvgIcon";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

class Login extends React.Component {
  render() {
    const onFinish = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <div className="login-wrapper">
        <div className="middle-content">
          <h2>友缘社交管理系统</h2>
          <div className="login-from">
            <Form {...layout} layout="vertical" name="basic" initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} >
              <Form.Item label="登录名" name="username" rules={[{ message: ''}]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    message: '请输入你的密码！',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>记住我</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
