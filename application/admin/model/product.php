<?php

namespace app\admin\model;
use think\Model;

class Product extends Model {

  // use SoftDelete;
  protected $deleteTime = 'delete_time';

  public function getCreateTimeAttr ($val) {
    return date('Y-m-d', $val);
  }

  public function getUpdateTimeAttr ($val) {
    return date('Y-m-d', $val);
  }

  public function getDeleteTime ($val) {
    return date('Y-m-d', $val);
  }
}
