<?php
namespace app\index\model;
use think\Model;
use app\index\model\User;
use app\index\model\Product;

class Order extends Model {
  protected $type = [
    'count' => 'integer',
    'prize' => 'float'
  ];

  public function user () {
    return $this->hasMany('user', 'id', 'user_id')
      ->field('id, name, gold');
  }
  public function product () {
    return $this->hasMany('product', 'id', 'product_id');
  }

  public function getCreateTimeAttr ($val) {
    return date('Y-m-d', $val);
  }

  public function getUpdateTimeAttr ($val) {
    return date('Y-m-d', $val);
  }
}