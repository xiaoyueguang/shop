<?php
namespace app\index\controller;
use think\Db;
use app\index\model\User;

class UserController {
  //  获取一般的信息
  public function index() {
    if (session('isLogin') || input('post.appuid')) {
      $user = User::get(function($query){
        $query->where('id', decode(input('post.appuid')));
      });
      return ajaxReturn(0, [
        'appuid' => encode($user->id),
        'name' => $user->name,
        'nickname' => $user->nickname,
        'email' => $user->email,
        'avatar' => $user->avatar,
        'is_disable' => $user->is_disable
      ]);
    } else {
      return ajaxReturn(1, '未登录');
    }
  }
  //  登录
  public function login () {
    $name = input('post.name');
    $password = input('post.password');
    if (strlen($name) == 0) {
      return ajaxReturn(1, '请输入用户名');
    }
    if (strlen($password) == 0) {
      return ajaxReturn(1, '请输入密码');
    }

    $user = User::get(function($query) {
      $query->where('name', input('post.name'))
        ->where('password', encry(input('post.password')));
    });

    if ($user) {
      $this->login_session($user->id);
      return ajaxReturn(0, encode($user->id));
    } else {
      session(null);
      return ajaxReturn(1, '登录失败');
    }
  }
  //  退出
  public function loginOut () {
    session(null);
    return ajaxReturn(0, '退出成功');
  }
  //  注册
  public function register () {
    $user = new User;
    $name = input('post.name');
    $password = input('post.password');
    if ($this->check_repeat($name)) {
      return ajaxReturn(1, '用户名重复');
    }
    
    if ($password != input('post.confirm')) {
      return ajaxReturn(1, '确认密码错误');
    }

    $result = $user->register([
      'name' => $name,
      'password' => encry($password)
    ]);
    if (is_int($result)) {
      $this->login_session($result);
      return ajaxReturn(0, '注册成功!');
    } else {
      return ajaxReturn(1, $result);
    }
  }
  //  登录
  protected function login_session ($id) {
    session('isLogin', true);
    session('user_id', $id);
    return ajaxReturn(0, '登录成功');
  }

  //  检查用户名重复
  public function check_repeat ($name) {
    $user = User::get(['name' => $name]);
    if ($user) {
      return true;
    } else {
      return false;
    }
  }

  //  修改密码
  public function change_pass () {
    if (session('isLogin')) {
      $oldPass = input('post.oldPass');
      $newPass = input('post.newPass');
      if ($newPass == $oldPass) {
        return ajaxReturn(1, '新密码与原密码相同');
      }

      $result = User::get(['id', session('user_id')]);
      //  判断原密码是否正确
      if ($result->password != encry($oldPass)) {
        return ajaxReturn(1, '原密码错误');
      }

      Db('user')->where('id', session('user_id'))
        ->update([
          'password' => encry($newPass)
        ]);

      return ajaxReturn(0, '修改成功');
    } else {
      return ajaxReturn(1, '请先登录');
    }
  }

  public function test () {
    $user = new User;
    return $user->test();
  }
  
}
