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

function encode ($string = '', $skey = 'linjilei') {
  $strArr = str_split(base64_encode($string));
  $strCount = count($strArr);

  foreach(str_split($skey) as $key => $value) {
    $key < $strCount && $strArr[$key] .= $value;
  }
  return str_replace(array('=', '+', '/'), array(md5('='), md5('+'), md5('/')), join('', $strArr));
}

function decode($string = '', $skey = 'linjilei') {
  $strArr = str_split(str_replace(array(md5('='), md5('+'), md5('/')), array('=', '+', '/'), $string), 2);
  $strCount = count($strArr);
  foreach (str_split($skey) as $key => $value) {
    $key <= $strCount  && isset($strArr[$key]) && $strArr[$key][1] === $value && $strArr[$key] = $strArr[$key][0];
  }
  return base64_decode(join('', $strArr));
}
//  过滤字段
function filterField ($arr, $str) {
  $newArr = [];
  foreach ($str as $k) {
    if ($arr[$k]) {
      $newArr[$k] = $arr[$k];
    }
  }
  return $newArr;
}