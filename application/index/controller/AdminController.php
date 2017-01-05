<?php

namespace app\index\controller;

use think\Controller;
use think\Request;
use think\Db;

class adminController extends Controller {

  public function _initialize () {
    $action = Request::instance()->action();

    define("ADMIN_ID", 2);

    //  非登录方法时验证是否登录
    if ($action != 'login') {
      //  是否为管理帐号
      if (input('get.appuid') != encode(2)) {
        echo '{"code":0,"msg":"没有权限操作"}';
        $this->isLogin = false;
      } else {
        $this->isLogin = true;
      }

    }
    
  }

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
  public function user_list () {
    if ($this->isLogin) {
      $page = input('get.page');
      $user = Db::name('user')
        ->limit(10)->page($page)
        ->field('id, name, nickname, email, create_time, is_disable')->select();

      $data = [];
      forEach($user as $k => $v) {
        $v['create_time'] = date('Y-m-d h:i:s', $v['create_time']);
        array_push($data, $v);

      }
      return ajaxReturn(0, $data);
    }
  }

  //  禁用用户
  public function user_disable () {
    if ($this->isLogin) {
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
  }

  //  创建用户
  public function user_add () {
    
  }
}
