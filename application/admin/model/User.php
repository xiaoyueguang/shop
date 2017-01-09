<?php
namespace app\admin\model;
use think\Model;

class User extends Model {

  protected $readonly = ['name'];
  
  public function setPasswordAttr ($val) {
    return encry($val);
  }

  public function getCreateTimeAttr ($val) {
    return date('Y-m-d', $val);
  }

  public function getUpdateTimeAttr ($val) {
    return date('Y-m-d', $val);
  }
}
