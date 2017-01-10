<?php

namespace app\admin\controller;

use think\Controller;
use think\Request;
use think\Db;
use app\admin\model\User;

class UserController extends IndexController {

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

  //  返回列表
  public function list () {
    $page = input('get.page');

    $user = User::all(function ($query) use ($page) {
      $query->limit(10)->page($page)
        ->field('id, name, nickname, email, create_time, is_disable');
    });

    return ajaxReturn(0, [
      "max" => User::count(),
      "data" => $user
    ]);
  }

  //  禁用用户
  public function disable () {
    //  判断是否为管理ID
    if (input('get.id') == ADMIN_ID) {
      return ajaxReturn(1, '管理帐号不能禁用');
    }

    $user = Db::name('user')
      ->where('id', input('get.id'))
      ->select();
    $is_disable = $user[0]['is_disable'];

    $result = Db::name('user')
      ->where('id', input('get.id'))
      ->update(['is_disable' => $is_disable == 0 ? 1 : 0]);

    $return = [];
    if ($result == 1) {
      $return['result'] = $is_disable == 0 ? 1 : 0;
      $return['name'] = $user[0]['name'];
    }
    return ajaxReturn(0, $return);
  }

  //  创建用户
  public function add () {
    $is_exist = count(User::get(['name' => input('get.name')])) > 0;
    if ($is_exist) {
      return ajaxReturn(1, '该帐号已存在!');
    }

    $user = new User;
    $result = $user->allowField(true)->validate(true)->save(input('get.'));
    if (false == $result) {
      return ajaxReturn(1, $user->getError());
    } else {
      return ajaxReturn(0, '添加成功');
    }
  }
  //  获取用户信息
  public function get () {
    $user = User::get(input('id'));
    return ajaxReturn(0, [
      'name' => $user['name'],
      'avatar' => $user['avatar'],
      'email' => $user['email'],
      'id' => $user['id'],
      'nickname' => $user['nickname']
    ]);
  }

  //  保存用户
  public function update () {
    $id = input('id');
    $nickname = input('nickname');
    $email = input('email');
    $password = input('password');
    $data = [
      'nickname' => $nickname,
      'email' => $email,
    ];
    $rule = 'User.edit';
    if ($password != '') {
      $data['password'] = $password;
      $rule = 'User.editWithPassword';
    }

    $result = $this->validate($data, $rule);

    if (true !== $result) {
      return ajaxReturn(1, $result);
    }

    $user = User::find($id);
    $user->email = $email;
    $user->nickname = $nickname;
    if ($password != '') {
      $user->password = $password;
    }
    $result = $user->save();
    if ($result) {
      return ajaxReturn(0, '更新成功');
    }
  }
}
