<?php

namespace app\index\controller;

use think\Db;
use think\Controller;
use think\Request;
use app\index\model\User;
use app\index\model\Product;
use app\index\model\Order;

class OrderController extends Controller {
  // 添加订单. 默认未付款
  public function add () {
    $user = User::get(decode(input('appuid')));
    $gold = $user->gold;
    $product = Product::get(input('id'));
    $prize = $product->prize;
    $order = new Order;
    if ($gold >= $prize) {
      $result = $order->allowField(true)->save([
        'product_id' => $product->id,
        'user_id' => $user->id,
        'count' => 1,
        'prize' => $product->prize,
        'status' => 1,
        'order_id' => date('ymdHis').substr(md5($user->id), 0, 6).rand(100000, 999999)
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
  // 返回订单列表
  public function list () {
    $user = $this->get_user();
    $order = Order::all([
      'user_id' => $user['id']
    ]);
    foreach($order as $key => $value) {
      $value['user'] = $user;
      $value['product'] = $this->get_product($value['product_id']);
    }

    return $order;
  }
  // 付款
  public function pay ($id) {
    $order = Order::get($id);
    $user = $this->get_user();
    if ($order->status == 1) {
      return ajaxReturn(1, '该订单已付款');
    }

    if ($order->prize > (int)$user['gold']) {
      // 余额不足
      return ajaxReturn(1, '付款失败!');
    } else {
      // 余额足够
      Db::table('product')
        ->where('id', $order->product_id)
        ->setDec('count', $order->count);

      Db::table('user')
        ->where('id', $order->user_id)
        ->setDec('gold', $order->prize);

      $order->status = 1;
      $order->save();
      return ajaxReturn(0, '付款成功!');
    }
  }

  // 获取用户信息
  protected function get_user () {
    return Db::table('user')->where('id', decode(input('appuid')))->field('id,gold,name,nickname')->find();
  }
  // 获取商品信息
  protected function get_product ($id) {
    return Db::table('product')->where('id', $id)->find();
  }

}