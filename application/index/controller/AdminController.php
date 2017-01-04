<?php

namespace app\index\controller;

use think\Controller;
use think\Request;
use think\Db;

class adminController extends Controller {

  //  登录
  public function login () {
    $name = input('post.name');
    $password = input('post.password');

    if ($name != 'admin') {
      return ajaxReturn(1, '非管理帐号!');
    }

    if (strlen($name) == 0) {
      return ajaxReturn(1, '请输入用户名');
    }
    if (strlen($password) == 0) {
      return ajaxReturn(1, '请输入密码');
    }

    $user = Db::name('user')
      ->where([
        'name' => $name,
        'password' => encry($password)
      ])->find();

    if ($user) {
      $this->login_session($user['id']);
      return ajaxReturn(0, encode($user['id']));
    } else {
      return ajaxReturn(1, '登录失败');
    }
  }

    //  登录
  protected function login_session ($id) {
    session('isLogin', true);
    session('isAdmin', true);
    session('user_id', $id);
    return ajaxReturn(0, '登录成功');
  }
}
