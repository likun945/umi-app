import React, { useState, useEffect } from 'react';
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

const Edit = function (props) {
  const [files, setFiles] = useState([]);
  const { getFieldProps, validateFields } = props.form;
  const handleChange = (files) => {
    if (files[0]?.file?.size / 1024 / 1024 > 0.5) {
      Toast.fail('图片大小不能大于0.5M');
      return;
    }
    setFiles(files);
  };
  useEffect(() => {
    console.log(props);
  }, []);
  const handleSubmit = () => {
    if (!files.length) {
      Toast.fail('请上传图片');
    }
    validateFields((error, value) => {
      if (error) {
        Toast.fail('请补充信息');
        return;
      } else {
      }
    });
  };
  return (
    <div>
      <List>
        <List.Item>
          <ImagePicker
            files={files}
            selectable={files.length < 1}
            onChange={handleChange}
          ></ImagePicker>
        </List.Item>
        <List.Item>
          <InputItem
            placeholder="电话"
            {...getFieldProps('tel', {
              rules: [
                {
                  required: true,
                },
              ],
              initialValue: '123',
            })}
          >
            电话
          </InputItem>
        </List.Item>
        <List.Item>
          <InputItem
            {...getFieldProps('sign', {
              rules: [
                {
                  required: true,
                },
              ],
              initialValue: 'likun',
            })}
            placeholder="用户签名"
          >
            用户签名
          </InputItem>
        </List.Item>
      </List>
      <Button
        type="warning"
        style={{ marginTop: '20px' }}
        onClick={handleSubmit}
      >
        修改
      </Button>
    </div>
  );
};

export default createForm()(Edit);
