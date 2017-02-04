<?php

namespace app\index\model;

use think\Model;

class Product extends Model
{
    protected $type = [
        'count' => 'integer',
        'prize' => 'float'
    ];

    public function getCreateTimeAttr ($val) {
        return date('Y-m-d', $val);
    }

    public function getUpdateTimeAttr ($val) {
        return date('Y-m-d', $val);
    }
}
