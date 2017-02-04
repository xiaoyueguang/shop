<?php

namespace app\index\controller;

use think\Controller;
use think\Request;
use app\index\model\Product;
class ProductController extends Controller
{
    /**
     * 显示资源列表
     *
     * @return \think\Response
     */
    public function index()
    {
        //
        $page = input('page');
        $product = Product::all(function ($query) use ($page) {
            $query->limit(10)->page($page);
        });
        return ajaxReturn(0, [
            "max" => ceil(Product::count() / 10),
            "data" => $product
        ]);
    }

    /**
     * 显示创建资源表单页.
     *
     * @return \think\Response
     */
    public function create()
    {
        //
    }

    /**
     * 保存新建的资源
     *
     * @param  \think\Request  $request
     * @return \think\Response
     */
    public function save(Request $request)
    {
        //
    }

    /**
     * 显示指定的资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function detail () {
        $product = Product::get(input('id'));
        if ($product) {
            return ajaxReturn(0, $product);
        } else {
            return ajaxReturn(1, '该商品不存在');
        }
    }

    /**
     * 显示编辑资源表单页.
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * 保存更新的资源
     *
     * @param  \think\Request  $request
     * @param  int  $id
     * @return \think\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * 删除指定资源
     *
     * @param  int  $id
     * @return \think\Response
     */
    public function delete($id)
    {
        //
    }
}
