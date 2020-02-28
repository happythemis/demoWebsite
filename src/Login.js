import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Icon } from "antd";
// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

// import { createForm } from "rc-form";
// import { useForm } from "sunflower-antd";

// import { WrappedFormUtils } from "antd/lib/form/Form";

// const LoginForm = props => {
//   // const handleValuesChange = () => console.log('Value changes').
//   // const form = useform({
//   //   onValuesChange: handleValuesChange,
//   // });
//   const { getFieldDecorator, validateFields } = props.form;
//   const handleSubmit = e => {
//     e.preventDefault();
//     validateFields((err, values) => {
//       if (!err) {
//         console.log("Received values of form: ", values);
//       }
//     });
//   };
//   return (
//     <Form onSubmit={handleSubmit}>
//       <FormItem>
//         {getFieldDecorator("userName")(<Input placeholder="Username" />)}
//       </FormItem>
//     </Form>
//   );
// };
// const { useForm } = Form;

const LoginForm = props => {
  const defaultEmail = "";
  const defaultPassword = "";
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  // const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const { formProps } = useForm({ form });

  // const handleEmailChange = value => {
  //   setEmail(value);
  // };

  // const handlePasswordChange = value => {
  //   setPassword(value);
  // };

  // const form = useForm({
  //   // onValuesChcdange: onChangeBase
  // });
  // const { WrappedFormUtils } = props;
  const {
    getFieldDecorator,
    getFieldsError,
    getFieldValue,
    isFieldTouched
  } = props.form;

  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  const isLoginButtonDisabled =
    hasErrors(getFieldsError()) ||
    !isFieldTouched("email") ||
    !isFieldTouched("password");

  const onSubmit = (email, password) => {
    setEmail(email);
    setPassword(password);
    setIsLoggedIn(true);
    console.log(email, password, isLoggedIn);
  };

  const loginHeader = isLoggedIn ? (
    <h1 className="title">You Logged In</h1>
  ) : (
    <h1 className="title">Please Log In</h1>
  );

  return (
    <div>
      <style jsx={true}>{`
        .title {
          font-family: Roboto;
          font-size: 38px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.42;
          letter-spacing: normal;
          color: rgba(0, 0, 0, 0.85);
          margin: auto;
          text-align: center;
        }
      `}</style>
      <Row type="flex"justify="end">
        <Col offset={2} span={4} style={{ minWidth: "320px" }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="title">{loginHeader}</div>
          <br />
          <br />
          <Form
            // {...formProps}
            // className="login-form"
            layout={"vertical"}
            // tslint:disable-next-line jsx-no-lambda
            onSubmit={evt => {
              if (!isLoginButtonDisabled) {
                // setLoading(true);
                evt.preventDefault();
                onSubmit(email, password);
              }
            }}
          >
            <Form.Item label="Email">
              {getFieldDecorator("email", {
                rules: [
                  {
                    required: true,
                    message: "Please input your email!"
                  },
                  {
                    type: "email",
                    message: "The input is not valid email!"
                  }
                ]
                // initialValue: defaultEmail
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                  size="large"
                  // onChange={handleEmailChange}
                />
              )}
            </Form.Item>
            <Form.Item label="Password">
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your password!"
                  }
                ]
                // initialValue: defaultPassword
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                  size="large"
                  // onChange={handlePasswordChange}
                />
              )}
            </Form.Item>
            <br />
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  hasErrors(getFieldsError()) ||
                  !isFieldTouched("email") ||
                  !isFieldTouched("password")
                }
                block={true}
                // loading={loading}
                size={"large"}
                // tslint:disable-next-line jsx-no-lambda
                onClick={evt => {
                  // setLoading(true);
                  evt.preventDefault();
                  // onSubmit(email, password);
                  onSubmit(getFieldValue("email"), getFieldValue("password"));
                }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      {/* <Link to="/register">Sign Up</ Link>
      {/* <br />
      <br />
      Or <a href="/register">register now!</a> */}
    </div>
  );
};

const WrappedLoginForm = Form.create({ name: "login" })(LoginForm);

export default WrappedLoginForm;
// // // import Login from 'ant-design-pro/lib/Login';
// // import { Alert, Checkbox} from 'antd';
// // import React from "react";
// // // import {
// // //   BrowserRouter as Router,
// // //   Switch,
// // //   Route,
// // //   Link
// // // } from "react-router-dom";
// // import ReactDOM from 'react-dom';
// // const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;
// //
// // class LoginDemo extends React.Component {
// // // export default function Login() {
// //   state = {
// //     notice: '',
// //     type: 'tab2',
// //     autoLogin: true,
// //   };
// //   onSubmit = (err, values) => {
// //     console.log('value collected ->', {
// //       ...values,
// //       autoLogin: this.state.autoLogin,
// //     });
// //     if (this.state.type === 'tab1') {
// //       this.setState(
// //         {
// //           notice: '',
// //         },
// //         () => {
// //           if (!err && (values.username !== 'admin' || values.password !== '888888')) {
// //             setTimeout(() => {
// //               this.setState({
// //                 notice: 'The combination of username and password is incorrect!',
// //               });
// //             }, 500);
// //           }
// //         }
// //       );
// //     }
// //   };
// //   onTabChange = key => {
// //     this.setState({
// //       type: key,
// //     });
// //   };
// //   changeAutoLogin = e => {
// //     this.setState({
// //       autoLogin: e.target.checked,
// //     });
// //   };
// //   render() {
// //     return (
// //       <div className="login-warp">
// //         <Login
// //           defaultActiveKey={this.state.type}
// //           onTabChange={this.onTabChange}
// //           onSubmit={this.onSubmit}
// //         >
// //           <Tab key="tab1" tab="Account">
// //             {this.state.notice && (
// //               <Alert
// //                 style={{ marginBottom: 24 }}
// //                 message={this.state.notice}
// //                 type="error"
// //                 showIcon
// //                 closable
// //               />
// //             )}
// //             <UserName name="username" />
// //             <Password name="password" />
// //           </Tab>
// //           <Tab key="tab2" tab="Mobile">
// //             <Mobile name="mobile" />
// //             <Captcha onGetCaptcha={() => console.log('Get captcha!')} name="captcha" />
// //           </Tab>
// //           <div>
// //             <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>
// //               Keep me logged in
// //             </Checkbox>
// //             <a style={{ float: 'right' }} href="">
// //               Forgot password
// //             </a>
// //           </div>
// //           <Submit>Login</Submit>
// //           <div>
// //             Other login methods
// //             <span className="icon icon-alipay" />
// //             <span className="icon icon-taobao" />
// //             <span className="icon icon-weibo" />
// //             <a style={{ float: 'right' }} href="">
// //               Register
// //             </a>
// //           </div>
// //         </Login>
// //       </div>
// //     );
// //   }
// // }
// //
// // ReactDOM.render(<LoginDemo />);
// // export default LoginDemo;
// import ReactDOM from 'react-dom';
// import React, { useState } from "react";
// import {Form, Icon, Input, Button, Checkbox, Row, Col } from "antd";
// //
// // class NormalLoginForm extends React.Component {
// //   const {
// //       getFieldDecorator,
// //       getFieldsError,
// //       getFieldValue,
// //       isFieldTouched
// //   } = props.form;
// //
// //   handleSubmit = e => {
// //     e.preventDefault();
// //     this.props.form.validateFields((err, values) => {
// //       if (!err) {
// //         console.log('Received values of form: ', values);
// //       }
// //     });
// //   };
// //   // const {
// //   //     getFieldDecorator,
// //   //     getFieldsError,
// //   //     getFieldValue,
// //   //     isFieldTouched
// //   // } = props.form;
// //
// //   render() {
// //     const { getFieldDecorator } = this.props.form;
// //     return (
// //       <Form onSubmit={this.handleSubmit} className="login-form">
// //         <Form.Item>
// //           {getFieldDecorator('username', {
// //             rules: [{ required: true, message: 'Please input your username!' }],
// //           })(
// //             <Input
// //               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
// //               placeholder="Username"
// //             />,
// //           )}
// //         </Form.Item>
// //         <Form.Item>
// //           {getFieldDecorator('password', {
// //             rules: [{ required: true, message: 'Please input your Password!' }],
// //           })(
// //             <Input
// //               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
// //               type="password"
// //               placeholder="Password"
// //             />,
// //           )}
// //         </Form.Item>
// //         <Form.Item>
// //           {getFieldDecorator('remember', {
// //             valuePropName: 'checked',
// //             initialValue: true,
// //           })(<Checkbox>Remember me</Checkbox>)}
// //           <a className="login-form-forgot" href="">
// //             Forgot password
// //           </a>
// //           <Button type="primary" htmlType="submit" className="login-form-button">
// //             Log in
// //           </Button>
// //           Or <a href="">register now!</a>
// //         </Form.Item>
// //       </Form>
// //     );
// //   }
// // }
// //
// // const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
// //
// // // ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
// // export default NormalLoginForm;
// // //
// const LoginForm = props => {
//   const defaultEmail = "";
//   const defaultPassword = "";
//   const [email, setEmail] = useState(defaultEmail);
//   const [password, setPassword] = useState(defaultPassword);
//
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//
//   const {
//     getFieldDecorator,
//     getFieldsError,
//     getFieldValue,
//     isFieldTouched
//   } = props.form;
//
//   function hasErrors(fieldsError) {
//     return Object.keys(fieldsError).some(field => fieldsError[field]);
//   }
//
//   const isLoginButtonDisabled =
//     hasErrors(getFieldsError()) ||
//     !isFieldTouched("email") ||
//     !isFieldTouched("password");
//
//   const onSubmit = (email, password) => {
//     setEmail(email);
//     setPassword(password);
//     setIsLoggedIn(true);
//     console.log(email, password, isLoggedIn);
//   };
//
//   const loginHeader = isLoggedIn ? (
//     <h1 className="title">Welcome Back</h1>
//   ) : (
//     <h1 className="title">Log In/Sign Up Page</h1>
//   );
//
//   return (
//     <div>
//       <style jsx={true}>{`
//         .title {
//           font-size: 50px;
//           letter-spacing: normal;
//           color: rgba(0, 0, 0, 0.85);
//           margin: auto;
//           text-align: center;
//         }
//       `}</style>
//       <Row type="flex" justify="center">
//         <Col span={4}>
//         <div>helllo</div>
//         </Col>
//         <Col span={4}>
//         <div>helllo2</div>
//         </Col>
//
//       </Row>
//       </div>
//       // <Row type="flex" justify="center">
//       //   <Col span={4} style={{ minWidth: "320px" }}>
//       //     <br />
//           // <br />
//           // <br />
//           // <br />
//           // <br />
//           // <div className="title">{loginHeader}</div>
//           // <br />
//           // <br />
//           // <Form
//           //   // {...formProps}
//           //   // className="login-form"
//           //   // layout={""}
//           //   // tslint:disable-next-line jsx-no-lambda
//           //   onSubmit={evt => {
//           //     if (!isLoginButtonDisabled) {
//           //       // setLoading(true);
//           //       evt.preventDefault();
//           //       onSubmit(email, password);
//           //     }
//           //   }}
//           // >
//           //   <Form.Item label="Username">
//           //     {getFieldDecorator("username", {
//           //       rules: [
//           //         {
//           //           required: true,
//           //           message: "username"
//           //         }
//           //         // ,{
//           //         //   type: "username",
//           //         //   message: "The input is not valid email!"
//           //         // }
//           //       ]
//           //       // initialValue: defaultEmail
//           //     })(
//           //       <Input
//           //
//           //         placeholder="username"
//           //         size="large"
//           //         // onChange={handleEmailChange}
//           //       />
//           //     )}
//           //   </Form.Item>
//           //   <Form.Item label="Password">
//           //     {getFieldDecorator("password", {
//           //       rules: [
//           //         {
//           //           required: true,
//           //           message: "password"
//           //         }
//           //       ]
//           //       // initialValue: defaultPassword
//           //     })(
//           //       <Input
//           //
//           //         type="password"
//           //         placeholder="Password"
//           //         size="large"
//           //         // onChange={handlePasswordChange}
//           //       />
//           //     )}
//           //   </Form.Item>
//           //   <br />
//           //   <Form.Item>
//           //     <Button
//           //       type="primary"
//           //       htmlType="submit"
//           //       disabled={
//           //         hasErrors(getFieldsError()) ||
//           //         !isFieldTouched("username") ||
//           //         !isFieldTouched("password")
//           //       }
//           //       block={true}
//           //       // loading={loading}
//           //       size={"large"}
//           //       // tslint:disable-next-line jsx-no-lambda
//           //       onClick={evt => {
//           //         // setLoading(true);
//           //         evt.preventDefault();
//           //         // onSubmit(email, password);
//           //         onSubmit(getFieldValue("email"), getFieldValue("password"));
//           //       }}
//           //     >
//           //       Log in
//           //     </Button>
//           //   </Form.Item>
//           // </Form>
//       //     </Col>
//       // </Row>
//       // {/* <Link to="/register">Sign Up</ Link>
//     //  {/* <br />
//     //  <br />
//   //    Or <a href="/register">register now!</a> */}
//   //  </div>
//   );
// };
//
// const WrappedNormalLoginForm = Form.create({ name: "login" })(LoginForm);
// //
// export default WrappedNormalLoginForm;
