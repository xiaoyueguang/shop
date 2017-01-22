<?php

namespace app\admin\controller;

use think\Controller;
use think\Request;
use app\admin\model\Product;

class ProductController extends IndexController {
  public function list () {
    $page = input('page');
    $Product = Product::all(function ($query) use ($page) {
      $query->limit(10)->page($page);
    });

    return ajaxReturn(0, [
      "max" => Product::count(),
      "data" => $Product
    ]);
  }

  //  添加
  public function add () {
    $product = new Product;

    $result = $product->allowField(true)->save(input(''));

    if (false == $result) {
      return ajaxReturn(1, $product->getError());
    } else {
      return ajaxReturn(0, '添加成功');
    }
  }

  //  删除
  public function del () {
    
    $product = Product::destroy(input('id'));
    return ajaxReturn(0, $product);
  }

  //  获取用户信息
  public function get () {
    $product = Product::get(input('id'));
    return ajaxReturn(0, $product);
  }

  //  修改用户
  public function update () {
    
    $product = Product::find(input('id'));
    $product->name = input('name');
    $product->desc = input('desc');
    $product->thumb = input('thumb');
    $result = $product->save();
    if ($result) {
      return ajaxReturn(0, '更新成功');
    }
  }

}
