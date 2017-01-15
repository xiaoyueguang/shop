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
    $product = Product::destory(input('id'));

    return ajaxReturn(1, $product);
  }

  //  保存缩略图
  public function savethumb () {
    return 'hhhhaha.png';
  }
}
