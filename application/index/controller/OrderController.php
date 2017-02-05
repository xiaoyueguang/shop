<?php

namespace app\index\controller;

use think\Controller;
use think\Request;

class OrderController extends Controller {
  public function add () {
    return ajaxReturn(0, '111');
  }
}