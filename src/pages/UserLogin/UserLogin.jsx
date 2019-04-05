/* eslint react/no-string-refs:0 */
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Input, Button, Checkbox, Grid, Message } from "@alifd/next";
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError
} from "@icedesign/form-binder";
import IceIcon from "@icedesign/foundation-symbol";

const { Row, Col } = Grid;

@withRouter
class UserLogin extends Component {
  static displayName = "UserLogin";

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        username: "",
        password: "",
        checkbox: false
      }
    };
  }

  formChange = value => {
    this.setState({
      value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //表单验证
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log("errors", errors);
        return;
      }
      //验证完成，TODO 此处应当向后台发起表单请求

      //此处代码

      console.log(values);
      Message.success("登录成功！");
      //页面跳转
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="formContainer">
        <h4 className="formTitle">52wiki</h4>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div className="formItems">
            <Row className="formItem">
              <Col className="formItemCol">
                <IceIcon type="person" size="small" className="inputIcon" />
                <IceFormBinder name="username" required message="必填">
                  <Input
                    className="next-input-single"
                    size="large"
                    maxLength={20}
                    placeholder="账户邮箱"
                  />
                </IceFormBinder>
              </Col>
              <Col>
                <IceFormError name="username" />
              </Col>
            </Row>

            <Row className="formItem">
              <Col className="formItemCol">
                <IceIcon type="lock" size="small" className="inputIcon" />
                <IceFormBinder name="password" required message="必填">
                  <Input
                    className="next-input-single"
                    size="large"
                    htmlType="password"
                    placeholder="账户密码"
                  />
                </IceFormBinder>
              </Col>
              <Col>
                <IceFormError name="password" />
              </Col>
            </Row>
            <Row className="formItem">
              <Button
                type="primary"
                onClick={this.handleSubmit}
                className="submitBtn"
              >
                登 录
              </Button>
            </Row>

            <Row className="tips">
              <Link to="#" className="tips-text">
                立即注册
              </Link>
            </Row>
          </div>
        </IceFormBinderWrapper>
      </div>
    );
  }
}

export default UserLogin;
