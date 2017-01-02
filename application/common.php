<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\Request;

// 应用公共文件

//  返回
function ajaxReturn ($code, $msg) {
  return [
    'code' => $code,
    'msg' => $msg
  ];
}

//  密码加密
function encry ($pass) {
  return sha1(sha1(md5($pass)));
}
