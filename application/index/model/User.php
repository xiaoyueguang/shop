<?php
namespace app\index\model;
use think\Model;
use think\Validate;

class User extends Model {
  protected $table = 'user';

  //  注册
  public function register ($data) {
    $user = new User;
    $result = $user->validate('User.register')->save($data);
    if (false == $result) {
      return $user->getError();
    } else {
      return (int)$user->id;
    }
  }
  public function test() {
    return encry(123456);
  }
  
}
