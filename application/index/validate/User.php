<?php
namespace app\index\validate;
use think\Validate;

class User extends Validate {
  protected $rule = [
    'name' => 'require|max:25|alphaDash',
    'password' => 'require|min:6|alphaDash'
  ];

  protected $message = [
    'name.require' => '请输入用户名',
    'name.alphaDash' => '请输入合法的用户名',
    'password.require' => '请输入密码',
    'password.alphaDash' => '请输入合法的密码',
    'name.max' => '用户名过长',
    'password.min' => '密码过短'
  ];

  protected $scene = [
    'register' => ['name', 'password'],
    'name' => 'name',
  ];
}
