<?php

namespace app\index\controller;
use think\Controller;
use think\Request;

// 通用工具 比如上传之类
class CommonController extends Controller {
  // 保存图片
  public function savethumb () {
    $file = request()->file('thumb');
    if (!$file) {
      return ajaxReturn(1, '请上传文件');
    }
    $info = $file->move(ROOT_PATH.'public'.DS.'uploads');
    if ($info) {
      $name = $info->getSaveName();
      return ajaxReturn(0, $name);
    } else {
      return ajaxReturn(1, '上传失败');
    }
  }
}