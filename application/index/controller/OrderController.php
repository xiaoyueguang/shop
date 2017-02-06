<?php

namespace app\index\controller;

use think\Controller;
use think\Request;
use app\index\model\User;
use app\index\model\Product;
use app\index\model\Order;

class OrderController extends Controller {
  public function add () {
    $user = User::get(decode(input('appuid')));
    $gold = $user->gold;
    $product = Product::get(input('id'));
    $prize = $product->prize;
    $order = new Order;
    if ((int)$gold > (int)$prize) {
      $result = $order->allowField(true)->save([
        'product_id' => $product->id,
        'user_id' => $user->id,
        'count' => 1,
        'prize' => $product->prize,
        'status' => 1
      ]);

      if ($result) {
        return ajaxReturn(0, '添加成功');
      } else {
        return ajaxReturn(1, '添加失败');
      }
    } else {
      return ajaxReturn(1, '余额不足');
    }
  }

  public function list () {
    $user = User::get(decode(input('appuid')));
    $order = Order::get([
      'user_id' => $user->id
    ]);
    return ajaxReturn(0, [
      'order' => $order,
      'user' => $order->user,
      'product' => $order->product
    ]);
  }
}