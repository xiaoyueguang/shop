<?php
namespace app\index\model;
use think\Model;
use app\index\model\User;
use app\index\model\Product;

class Order extends Model {
  public function user () {
    return $this->hasMany('user', 'id', 'user_id')
      ->field('id, name, gold');
  }
  public function product () {
    return $this->hasMany('product', 'id', 'product_id');
  }
}