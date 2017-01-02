<?php
namespace app\index\controller;
use think\Db;

class User {
  public function index() {
    $a = Db::table('user')->where('id', 1)->find();
    return $a;
  }

  public function register () {
    // $user = new User;
    // $user->add('linji', 123456, 'admin@admin.com');
    // return ['id' => $user->id];
    var_dump(User);
  }
}
