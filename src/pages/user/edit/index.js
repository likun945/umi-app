import React, { useState, useEffect } from 'react';
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { useStoreHook } from 'think-react-store';

const Edit = function (props) {
  const { getFieldProps, validateFields } = props.form;
  const {
    user: { editUserAsync, getUserAsync, avatar, phone, sign },
  } = useStoreHook();
  const [files, setFiles] = useState([{ url: avatar }]);
  const handleChange = (files) => {
    if (files[0]?.file?.size / 1024 / 1024 > 12.5) {
      Toast.fail('图片大小不能大于5.5M');
      return;
    }
    setFiles(files);
  };
  useEffect(() => {
    // console.log(props);
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
        editUserAsync({
          avatar: files[0].url,
          phone: value.phone,
          sign: value.sign,
        });
      }
    });
  };
  // useEffect(()=>{
  //   getUserAsync({})
  // })
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
        <InputItem
          placeholder="电话"
          {...getFieldProps('phone', {
            rules: [
              {
                required: true,
              },
            ],
            initialValue: phone,
          })}
        >
          电话
        </InputItem>
        <InputItem
          {...getFieldProps('sign', {
            rules: [
              {
                required: true,
              },
            ],
            initialValue: sign,
          })}
          placeholder="用户签名"
        >
          用户签名
        </InputItem>
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
