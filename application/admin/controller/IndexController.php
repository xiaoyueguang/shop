<?php
namespace app\admin\controller;

use think\Controller;

class IndexController extends Controller {
  // 前置操作
  protected $beforeActionList = [
    'is_admin' => ['except' => 'login']
  ];
  //  判断是否有权限
  public function is_admin () {
    define('ADMIN_ID', 7);
    define('ADMIN_ID2', 2);
    if (!(input('appuid') == encode(ADMIN_ID) || input('appuid') == encode(ADMIN_ID2))) {
      echo json_encode([
        'code' => 1,
        'msg' => '没有权限操作!'
      ]);
      return exit;
    }
  }
}