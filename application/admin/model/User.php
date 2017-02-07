<?php
namespace app\admin\model;
use think\Model;

class User extends Model {

  protected $readonly = ['name'];
  protected $auto = ['password'];
  protected $insert = ['password'];
  protected $update = ['password'];
  protected $type = [
    'gold' => 'float',
    'status' => 'integer'
  ];

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
