<?php

namespace app\index\controller;


use think\Controller;
use think\Request;
use think\Db;

class AdminuserController extends adminController {
  //  返回列表
  public function user_list () {
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