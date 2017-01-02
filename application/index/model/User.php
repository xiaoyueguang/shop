<?php
namespace app\index\model;
use think\Model;

class User extends Model {
  protected $table = 'user';
  
  public function add ($name, $password, $email) {
    $user = new User;
    $user->name = $name;
    $user->password = md5($password);
    $user->email = $email;
    $user->save();
    return $user->id;
  }

  public function save () {
    echo '1111';
  }
}
